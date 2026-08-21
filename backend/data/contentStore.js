const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "content.json");


/* =========================================
   READ
========================================= */

function readContent() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(
        DATA_FILE,
        "[]",
        "utf8"
      );
    }

    const raw =
      fs.readFileSync(
        DATA_FILE,
        "utf8"
      );

    if (!raw.trim()) {
      return [];
    }

    const parsed =
      JSON.parse(raw);

    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch (error) {

    console.error(
      "AGS Content Store read error:",
      error
    );

    return [];
  }
}


/* =========================================
   WRITE
========================================= */

function writeContent(content) {

  try {

    fs.writeFileSync(
      DATA_FILE,

      JSON.stringify(
        content,
        null,
        2
      ),

      "utf8"
    );

    return true;

  } catch (error) {

    console.error(
      "AGS Content Store write error:",
      error
    );

    return false;
  }
}


/* =========================================
   CREATE
========================================= */

function addContent(item) {

  const content =
    readContent();


  content.push(item);


  writeContent(content);


  return item;
}


/* =========================================
   FIND
========================================= */

function getContentById(id) {

  const content =
    readContent();


  return content.find(
    (item) =>
      item.id === id
  ) || null;
}


/* =========================================
   UPDATE
========================================= */

function updateContent(
  id,
  updates
) {

  const content =
    readContent();


  const index =
    content.findIndex(
      (item) =>
        item.id === id
    );


  if (index === -1) {
    return null;
  }


  const current =
    content[index];


  const updated = {

    ...current,

    ...updates,


    /*
      Keep nested knowledge
      sections intact.
    */

    classification: {

      ...current.classification,

      ...(updates.classification || {}),

    },


    content: {

      ...current.content,

      ...(updates.content || {}),

    },


    sources:
      updates.sources ??
      current.sources ??
      [],


    verification: {

      ...current.verification,

      ...(updates.verification || {}),

    },


    updatedAt:
      new Date().toISOString(),

  };


  content[index] =
    updated;


  writeContent(content);


  return updated;
}


/* =========================================
   DELETE
========================================= */

function deleteContent(id) {

  const content =
    readContent();


  const filtered =
    content.filter(
      (item) =>
        item.id !== id
    );


  if (
    filtered.length ===
    content.length
  ) {

    return false;
  }


  writeContent(filtered);


  return true;
}


/* =========================================
   STATISTICS
========================================= */

function getStatistics() {

  const content =
    readContent();


  return {

    total:
      content.length,


    published:
      content.filter(
        (item) =>
          item.status ===
          "published"
      ).length,


    draft:
      content.filter(
        (item) =>
          item.status ===
          "draft"
      ).length,


    verified:
      content.filter(
        (item) =>
          item.verification?.verified ===
          true
      ).length,


    needsVerification:
      content.filter(
        (item) =>
          item.verification?.verified !==
          true
      ).length,

  };
}


/* =========================================
   EXPORT
========================================= */

module.exports = {

  readContent,

  writeContent,

  addContent,

  getContentById,

  updateContent,

  deleteContent,

  getStatistics,

};
