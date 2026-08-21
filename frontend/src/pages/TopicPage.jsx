import { useState } from "react";
import ChapterTest from "./ChapterTest";

function TopicPage({ content }) {
  const [activeSection, setActiveSection] = useState("overview");

  if (!content) {
    return (
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">AGS KNOWLEDGE ENGINE</p>

          <h2>Content Not Found</h2>

          <p>
            We could not find the learning content for this topic.
          </p>

          <a
            href="/search"
            className="primary-action"
          >
            ← Back to Search
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="page">

      {/* HEADER */}

      <section className="page-hero">
        <div className="eyebrow">
          {content.level} • {content.subject}
        </div>

        <h2>{content.title}</h2>

        <p>{content.overview}</p>
      </section>

      {/* MAIN LAYOUT */}

      <section className="topic-layout">

        {/* SIDEBAR */}

        <aside className="topic-sidebar">

          <h3>Learn</h3>

          <button
            className={
              activeSection === "overview"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("overview")}
          >
            📖 Overview
          </button>

          <button
            className={
              activeSection === "goals"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("goals")}
          >
            🎯 Learning Goals
          </button>

          <button
            className={
              activeSection === "prerequisites"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("prerequisites")}
          >
            📚 Prerequisites
          </button>

          <button
            className={
              activeSection === "topics"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("topics")}
          >
            🧠 Concepts
          </button>

          <button
            className={
              activeSection === "revision"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("revision")}
          >
            🔁 Revision
          </button>

          <button
            className={
              activeSection === "tips"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("tips")}
          >
            💡 Exam Tips
          </button>

          <button
            className={
              activeSection === "mistakes"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("mistakes")}
          >
            ⚠️ Common Mistakes
          </button>

          <button
            className={
              activeSection === "test"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("test")}
          >
            🎯 Chapter Test
          </button>

          <button
            className={
              activeSection === "sources"
                ? "topic-menu active"
                : "topic-menu"
            }
            onClick={() => setActiveSection("sources")}
          >
            🔗 Sources
          </button>

        </aside>

        {/* CONTENT */}

        <section className="topic-main">

          {/* OVERVIEW */}

          {activeSection === "overview" && (
            <>
              <article className="lesson-card">
                <h3>📖 About This Chapter</h3>

                <p>
                  {content.overview}
                </p>
              </article>

              <article className="lesson-card">
                <h3>🎯 What You Will Learn</h3>

                <ul className="concept-list">
                  {content.learningGoals?.map(
                    (goal, index) => (
                      <li key={index}>
                        {goal}
                      </li>
                    )
                  )}
                </ul>
              </article>

              <article className="lesson-card">
                <h3>📚 Before You Start</h3>

                <ul className="concept-list">
                  {content.prerequisites?.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </article>
            </>
          )}

          {/* LEARNING GOALS */}

          {activeSection === "goals" && (
            <article className="lesson-card">

              <h3>🎯 Learning Goals</h3>

              <ul className="concept-list">
                {content.learningGoals?.map(
                  (goal, index) => (
                    <li key={index}>
                      {goal}
                    </li>
                  )
                )}
              </ul>

            </article>
          )}

          {/* PREREQUISITES */}

          {activeSection === "prerequisites" && (
            <article className="lesson-card">

              <h3>📚 Prerequisites</h3>

              <p>
                These concepts will help you understand
                this chapter more easily.
              </p>

              <ul className="concept-list">
                {content.prerequisites?.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </article>
          )}

          {/* CONCEPTS */}

          {activeSection === "topics" && (
            <>
              <div className="topic-heading">

                <h3>
                  🧠 Concepts & Lessons
                </h3>

                <p>
                  Learn every concept step by step,
                  from basic understanding to
                  examination level.
                </p>

              </div>

              {content.topics?.map(
                (topic, topicIndex) => (

                  <article
                    className="lesson-card"
                    key={topic.id || topicIndex}
                  >

                    <div className="eyebrow">
                      TOPIC{" "}
                      {String(topicIndex + 1).padStart(
                        2,
                        "0"
                      )}
                    </div>

                    <h3>
                      {topic.title}
                    </h3>

                    <p>
                      {topic.description}
                    </p>

                    {/* CONCEPTS */}

                    {topic.concepts?.map(
                      (concept, index) => (

                        <div
                          className="concept-box"
                          key={index}
                        >

                          <strong>
                            {concept.title}
                          </strong>

                          <p>
                            {concept.explanation}
                          </p>

                          {concept.rule && (
                            <div className="example-box">

                              <strong>
                                Important Rule
                              </strong>

                              <p>
                                {concept.rule}
                              </p>

                            </div>
                          )}

                          {concept.formula && (
                            <div className="example-box">

                              <strong>
                                Formula
                              </strong>

                              <p>
                                {concept.formula}
                              </p>

                            </div>
                          )}

                          {concept.steps?.length > 0 && (
                            <>
                              <strong>
                                Steps
                              </strong>

                              <ol className="concept-list">

                                {concept.steps.map(
                                  (step, stepIndex) => (
                                    <li key={stepIndex}>
                                      {step}
                                    </li>
                                  )
                                )}

                              </ol>
                            </>
                          )}

                          {concept.examples?.length > 0 && (
                            <div className="example-box">

                              <strong>
                                Examples
                              </strong>

                              {concept.examples.map(
                                (example, exampleIndex) => (
                                  <p key={exampleIndex}>
                                    {example}
                                  </p>
                                )
                              )}

                            </div>
                          )}

                        </div>
                      )
                    )}

                    {/* SOLVED EXAMPLES */}

                    {topic.examples?.length > 0 && (
                      <>
                        <h4>
                          ✏️ Solved Examples
                        </h4>

                        {topic.examples.map(
                          (example, index) => (

                            <div
                              className="example-box"
                              key={index}
                            >

                              <strong>
                                Question
                              </strong>

                              <p>
                                {example.question}
                              </p>

                              <strong>
                                Solution
                              </strong>

                              <p>
                                {example.solution}
                              </p>

                            </div>
                          )
                        )}
                      </>
                    )}

                    {/* PRACTICE */}

                    {topic.practice?.length > 0 && (
                      <>
                        <h4>
                          📝 Practice Questions
                        </h4>

                        {topic.practice.map(
                          (question, index) => (

                            <div
                              className="practice-question"
                              key={index}
                            >

                              <strong>
                                {index + 1}.{" "}
                                {question.question}
                              </strong>

                              <div className="question-options">

                                {question.options?.map(
                                  (option) => (

                                    <button
                                      key={option}
                                      onClick={() => {
                                        if (
                                          option ===
                                          question.answer
                                        ) {
                                          alert(
                                            "Correct! 🎉"
                                          );
                                        } else {
                                          alert(
                                            `Correct answer: ${question.answer}`
                                          );
                                        }
                                      }}
                                    >
                                      {option}
                                    </button>
                                  )
                                )}

                              </div>

                            </div>
                          )
                        )}
                      </>
                    )}

                  </article>
                )
              )}
            </>
          )}

          {/* REVISION */}

          {activeSection === "revision" && (
            <article className="lesson-card">

              <h3>
                🔁 Quick Revision
              </h3>

              <ul className="concept-list">
                {content.revision?.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </article>
          )}

          {/* EXAM TIPS */}

          {activeSection === "tips" && (
            <article className="lesson-card">

              <h3>
                💡 Exam Tips
              </h3>

              <ul className="concept-list">
                {content.examTips?.map(
                  (tip, index) => (
                    <li key={index}>
                      {tip}
                    </li>
                  )
                )}
              </ul>

            </article>
          )}

          {/* COMMON MISTAKES */}

          {activeSection === "mistakes" && (
            <article className="lesson-card">

              <h3>
                ⚠️ Common Mistakes
              </h3>

              <ul className="concept-list">
                {content.commonMistakes?.map(
                  (mistake, index) => (
                    <li key={index}>
                      {mistake}
                    </li>
                  )
                )}
              </ul>

            </article>
          )}

          {/* CHAPTER TEST */}

          {activeSection === "test" && (
            <ChapterTest
              questions={content.test || []}
              title={`${content.title} Chapter Test`}
            />
          )}

          {/* SOURCES */}

          {activeSection === "sources" && (
            <article className="lesson-card">

              <h3>
                🔗 Sources
              </h3>

              <p>
                Sources used for this learning material
                will be shown here.
              </p>

              {content.sources?.map(
                (source, index) => (

                  <div
                    className="concept-box"
                    key={index}
                  >

                    <strong>
                      {source.title}
                    </strong>

                    <p>
                      {source.note}
                    </p>

                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-action"
                      >
                        Open Source →
                      </a>
                    )}

                  </div>
                )
              )}

            </article>
          )}

          {/* BOTTOM ACTIONS */}

          <div className="chapter-actions">

            <a
              href="/education/10th-standard/mathematics"
              className="secondary-action"
            >
              ← Back to Mathematics
            </a>

            <button
              className="primary-action"
              onClick={() =>
                setActiveSection("test")
              }
            >
              🎯 Start Chapter Test
            </button>

          </div>

        </section>

      </section>

    </main>
  );
}

export default TopicPage;
