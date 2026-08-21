const express = require("express");
const cors = require("cors");

const knowledge = require("./data/knowledge");
const realNumbers = require("./data/realNumbers");

const {
  readContent,
  addContent,
  getContentById,
  updateContent,
  deleteContent,
  getStatistics,
} = require("./data/contentStore");


const app = express();

const PORT = 5000;


/* =========================================
   MIDDLEWARE
========================================= */

app.use(cors());

app.use(express.json());


/* =========================================
   BASIC
========================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "AGS Knowledge Hub API",
    engine: "AGS Knowledge Engine",
    version: "1.0.0",
    status: "online",
  });
});


/* =========================================
   HEALTH
========================================= */

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "AGS Knowledge Engine",
    status: "online",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});


/* =========================================
   KNOWLEDGE STRUCTURE
========================================= */

app.get("/api/knowledge", (req, res) => {
  res.json({
    success: true,
    categories: knowledge.categories || [],
  });
});


/* =========================================
   SYLLABUS TOPICS
========================================= */

app.get("/api/topics", (req, res) => {

  const topics = [];

  const categories =
    knowledge.categories || [];


  categories.forEach((category) => {

    const levels =
      category.levels || [];


    levels.forEach((level) => {

      const subjects =
        level.subjects || [];


      subjects.forEach((subject) => {

        const chapters =
          subject.chapters || [];


        chapters.forEach((chapter) => {

          topics.push({

            id: chapter.id,

            title: chapter.name,

            category:
              category.name,

            level:
              level.name,

            subject:
              subject.name,

            status:
              chapter.status ||
              "active",

            lastUpdated:
              chapter.lastUpdated ||
              null,

          });

        });

      });

    });

  });


  /*
    Add topics created
    through Content Manager.
  */

  const stored =
    readContent();


  stored.forEach((item) => {

    topics.push({

      id: item.id,

      title: item.title,

      category:
        item.classification?.category ||
        "",

      level:
        item.classification?.level ||
        "",

      subject:
        item.classification?.subject ||
        "",

      status:
        item.status ||
        "draft",

      lastUpdated:
        item.updatedAt ||
        null,

    });

  });


  res.json({

    success: true,

    count:
      topics.length,

    topics,

  });

});


/* =========================================
   REAL NUMBERS
========================================= */

app.get(
  "/api/content/real-numbers",
  (req, res) => {

    res.json({

      success: true,

      content:
        realNumbers,

    });

  }
);


/* =========================================
   CONTENT MANAGER
========================================= */


/*
   GET ALL KNOWLEDGE
*/

app.get(
  "/api/admin/content",
  (req, res) => {

    const content =
      readContent();


    res.json({

      success: true,

      count:
        content.length,

      content,

    });

  }
);


/*
   GET ONE KNOWLEDGE ITEM
*/

app.get(
  "/api/admin/content/:id",
  (req, res) => {

    const content =
      getContentById(
        req.params.id
      );


    if (!content) {

      return res.status(404).json({

        success: false,

        message:
          "Knowledge item not found.",

      });

    }


    res.json({

      success: true,

      content,

    });

  }
);


/*
   CREATE KNOWLEDGE
*/

app.post(
  "/api/admin/content",
  (req, res) => {

    const {

      category,

      level,

      subject,

      title,

      description,

      overview,

      learningGoals,

      prerequisites,

      concepts,

      explanations,

      examples,

      visualExplanations,

      commonMistakes,

      practiceQuestions,

      examQuestions,

      revisionNotes,

      summary,

      faqs,

      sourceUrl,

    } = req.body;


    /*
      Required fields.
    */

    if (
      !category ||
      !title
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Category and title are required.",

      });

    }


    /*
      Generate stable ID.
    */

    const id =
      title
        .toLowerCase()
        .trim()
        .replace(
          /[^a-z0-9]+/g,
          "-"
        )
        .replace(
          /^-|-$/g,
          ""
        );


    /*
      Prevent duplicates.
    */

    const existing =
      readContent();


    const duplicate =
      existing.find(
        (item) =>
          item.id === id
      );


    if (duplicate) {

      return res.status(409).json({

        success: false,

        message:
          "A knowledge item with this title already exists.",

      });

    }


    const now =
      new Date().toISOString();


    /*
      Universal AGS
      knowledge object.
    */

    const newContent = {

      id,

      title:
        title.trim(),


      classification: {

        category:
          category || "",

        level:
          level || "",

        subject:
          subject || "",

      },


      content: {

        description:
          description || "",

        overview:
          overview || "",

        learningGoals:
          learningGoals || [],

        prerequisites:
          prerequisites || [],

        concepts:
          concepts || [],

        explanations:
          explanations || [],

        examples:
          examples || [],

        visualExplanations:
          visualExplanations || [],

        commonMistakes:
          commonMistakes || [],

        practiceQuestions:
          practiceQuestions || [],

        examQuestions:
          examQuestions || [],

        revisionNotes:
          revisionNotes || [],

        summary:
          summary || "",

        faqs:
          faqs || [],

      },


      sources:
        sourceUrl
          ? [
              {
                url:
                  sourceUrl,

                type:
                  "external",

                addedAt:
                  now,
              },
            ]
          : [],


      status:
        "draft",


      version:
        1,


      verification: {

        verified:
          false,

        lastVerified:
          null,

        verifiedBy:
          null,

      },


      updateHistory: [

        {

          version:
            1,

          action:
            "created",

          date:
            now,

        },

      ],


      createdAt:
        now,

      updatedAt:
        now,

    };


    const saved =
      addContent(
        newContent
      );


    res.status(201).json({

      success: true,

      message:
        "Knowledge created successfully.",

      content:
        saved,

    });

  }
);


/* =========================================
   UPDATE KNOWLEDGE
========================================= */

app.put(
  "/api/admin/content/:id",
  (req, res) => {

    const existing =
      getContentById(
        req.params.id
      );


    if (!existing) {

      return res.status(404).json({

        success: false,

        message:
          "Knowledge item not found.",

      });

    }


    const now =
      new Date().toISOString();


    const newVersion =
      (existing.version || 1) + 1;


    const updates =
      req.body || {};


    const updateHistory = [

      ...(existing.updateHistory || []),

      {

        version:
          newVersion,

        action:
          "updated",

        date:
          now,

      },

    ];


    const updated =
      updateContent(

        req.params.id,

        {

          ...updates,

          version:
            newVersion,

          updateHistory,

        }

      );


    res.json({

      success: true,

      message:
        "Knowledge updated successfully.",

      content:
        updated,

    });

  }
);


/* =========================================
   PUBLISH
========================================= */

app.patch(
  "/api/admin/content/:id/publish",
  (req, res) => {

    const existing =
      getContentById(
        req.params.id
      );


    if (!existing) {

      return res.status(404).json({

        success: false,

        message:
          "Knowledge item not found.",

      });

    }


    const now =
      new Date().toISOString();


    const newVersion =
      (existing.version || 1) + 1;


    const updateHistory = [

      ...(existing.updateHistory || []),

      {

        version:
          newVersion,

        action:
          "published",

        date:
          now,

      },

    ];


    const updated =
      updateContent(

        req.params.id,

        {

          status:
            "published",

          version:
            newVersion,

          updateHistory,

          verification: {

            verified:
              false,

            lastVerified:
              null,

            verifiedBy:
              null,

          },

        }

      );


    res.json({

      success: true,

      message:
        "Knowledge published successfully.",

      content:
        updated,

    });

  }
);


/* =========================================
   DELETE
========================================= */

app.delete(
  "/api/admin/content/:id",
  (req, res) => {

    const existing =
      getContentById(
        req.params.id
      );


    if (!existing) {

      return res.status(404).json({

        success: false,

        message:
          "Knowledge item not found.",

      });

    }


    const deleted =
      deleteContent(
        req.params.id
      );


    res.json({

      success:
        deleted,

      message:
        "Knowledge deleted successfully.",

    });

  }
);


/* =========================================
   SEARCH
========================================= */

app.get(
  "/api/search",
  (req, res) => {

    const query =
      String(
        req.query.q || ""
      )
        .trim()
        .toLowerCase();


    if (!query) {

      return res.json({

        success: true,

        query: "",

        count: 0,

        results: [],

      });

    }


    const results = [];


    /*
      Search syllabus.
    */

    const categories =
      knowledge.categories || [];


    categories.forEach(
      (category) => {

        (
          category.levels || []
        ).forEach(
          (level) => {

            (
              level.subjects || []
            ).forEach(
              (subject) => {

                (
                  subject.chapters || []
                ).forEach(
                  (chapter) => {

                    const name =
                      String(
                        chapter.name ||
                        ""
                      ).toLowerCase();


                    if (
                      name.includes(
                        query
                      )
                    ) {

                      results.push({

                        type:
                          "syllabus",

                        id:
                          chapter.id,

                        title:
                          chapter.name,

                        category:
                          category.name,

                        level:
                          level.name,

                        subject:
                          subject.name,

                      });

                    }

                  }
                );

              }
            );

          }
        );

      }
    );


    /*
      Search managed knowledge.
    */

    const stored =
      readContent();


    stored.forEach(
      (item) => {

        const searchable =
          [

            item.title,

            item.classification?.category,

            item.classification?.level,

            item.classification?.subject,

            item.content?.description,

            item.content?.overview,

            item.content?.summary,

          ]

            .filter(Boolean)

            .join(" ")

            .toLowerCase();


        if (
          searchable.includes(
            query
          )
        ) {

          results.push({

            type:
              "knowledge",

            id:
              item.id,

            title:
              item.title,

            category:
              item.classification?.category ||
              "",

            level:
              item.classification?.level ||
              "",

            subject:
              item.classification?.subject ||
              "",

            status:
              item.status,

            version:
              item.version,

          });

        }

      }
    );


    res.json({

      success: true,

      query,

      count:
        results.length,

      results,

    });

  }
);


/* =========================================
   ENGINE STATUS
========================================= */

app.get(
  "/api/engine",
  (req, res) => {

    const statistics =
      getStatistics();


    res.json({

      success: true,

      engine:
        "AGS Knowledge Engine",

      version:
        "1.0.0",


      systems: {

        api:
          "online",

        knowledge:
          "online",

        contentManager:
          "online",

        search:
          "online",

        persistentStorage:
          "online",

        sourceEngine:
          "planned",

        verificationEngine:
          "planned",

        updateEngine:
          "planned",

        aiEngine:
          "planned",

        mobileApi:
          "ready",

      },


      statistics: {

        managedKnowledge:
          statistics.total,

        publishedKnowledge:
          statistics.published,

        draftKnowledge:
          statistics.draft,

        verifiedKnowledge:
          statistics.verified,

        needsVerification:
          statistics.needsVerification,

      },


      timestamp:
        new Date().toISOString(),

    });

  }
);


/* =========================================
   404
========================================= */

app.use(
  (req, res) => {

    res.status(404).json({

      success: false,

      message:
        "AGS API route not found.",

      path:
        req.originalUrl,

    });

  }
);


/* =========================================
   ERROR HANDLER
========================================= */

app.use(
  (
    err,
    req,
    res,
    next
  ) => {

    console.error(
      "AGS API Error:",
      err
    );


    res.status(500).json({

      success: false,

      message:
        "AGS Knowledge Engine encountered an error.",

    });

  }
);


/* =========================================
   START
========================================= */

app.listen(
  PORT,
  () => {

    console.log(
      `AGS Knowledge Hub API running on http://localhost:${PORT}`
    );

    console.log(
      "AGS Knowledge Engine ready."
    );

  }
);
