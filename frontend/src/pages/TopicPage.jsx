import { useState } from "react";
import ChapterTest from "./ChapterTest";

const sections = [
  ["overview", "📖", "Overview"],
  ["goals", "🎯", "Learning Goals"],
  ["prerequisites", "📚", "Prerequisites"],
  ["topics", "🧠", "Concepts"],
  ["revision", "🔁", "Revision"],
  ["tips", "💡", "Exam Tips"],
  ["mistakes", "⚠️", "Common Mistakes"],
  ["test", "🎯", "Chapter Test"],
  ["sources", "🔗", "Sources"],
];

function TopicPage({ content }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [practiceAnswers, setPracticeAnswers] = useState({});

  if (!content) {
    return (
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">AGS KNOWLEDGE ENGINE</p>
          <h2>Content Not Found</h2>
          <p>We could not find the learning content for this topic.</p>
          <a href="/search" className="primary-action">
            ← Back to Search
          </a>
        </section>
      </main>
    );
  }

  const choosePracticeAnswer = (
    topicIndex,
    questionIndex,
    option,
    answer
  ) => {
    const key = `${topicIndex}-${questionIndex}`;

    setPracticeAnswers((current) => ({
      ...current,
      [key]: {
        selected: option,
        correct: option === answer,
      },
    }));
  };

  return (
    <main className="page">
      <section className="page-hero">
        <div className="eyebrow">
          {content.level} • {content.subject}
        </div>

        <h2>{content.title}</h2>

        <p>{content.overview}</p>
      </section>

      <section className="topic-layout">
        <aside className="topic-sidebar">
          <h3>Learn</h3>

          {sections.map(([id, icon, label]) => (
            <button
              key={id}
              className={
                activeSection === id
                  ? "topic-menu active"
                  : "topic-menu"
              }
              onClick={() => setActiveSection(id)}
            >
              {icon} {label}
            </button>
          ))}
        </aside>

        <section className="topic-main">
          {activeSection === "overview" && (
            <>
              <article className="lesson-card">
                <h3>📖 About This Chapter</h3>
                <p>{content.overview}</p>
              </article>

              <article className="lesson-card">
                <h3>🎯 What You Will Learn</h3>

                <ul className="concept-list">
                  {content.learningGoals?.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              </article>

              <article className="lesson-card">
                <h3>📚 Before You Start</h3>

                <ul className="concept-list">
                  {content.prerequisites?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </article>
            </>
          )}

          {activeSection === "goals" && (
            <article className="lesson-card">
              <div className="eyebrow">YOUR TARGETS</div>

              <h3>🎯 Learning Goals</h3>

              <p>
                By the end of this chapter, you should be comfortable
                with:
              </p>

              <ul className="concept-list">
                {content.learningGoals?.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </article>
          )}

          {activeSection === "prerequisites" && (
            <article className="lesson-card">
              <div className="eyebrow">GET READY</div>

              <h3>📚 Prerequisites</h3>

              <p>
                Revise these ideas before starting the chapter.
              </p>

              <ul className="concept-list">
                {content.prerequisites?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          )}

          {activeSection === "topics" && (
            <>
              <div className="topic-heading">
                <div className="eyebrow">STEP-BY-STEP LEARNING</div>

                <h3>🧠 Concepts & Lessons</h3>

                <p>
                  Build the chapter from fundamentals to
                  exam-level questions.
                </p>
              </div>

              {content.topics?.map((topic, topicIndex) => (
                <article
                  className="lesson-card"
                  key={topic.id || topicIndex}
                >
                  <div className="eyebrow">
                    TOPIC {String(topicIndex + 1).padStart(2, "0")}
                  </div>

                  <h3>{topic.title}</h3>

                  <p>{topic.description}</p>

                  {topic.concepts?.map((concept, index) => (
                    <div className="concept-box" key={index}>
                      <strong>{concept.title}</strong>

                      <p>{concept.explanation}</p>

                      {concept.rule && (
                        <div className="example-box">
                          <strong>Important Rule</strong>
                          <p>{concept.rule}</p>
                        </div>
                      )}

                      {concept.formula && (
                        <div className="example-box">
                          <strong>Formula</strong>
                          <p>{concept.formula}</p>
                        </div>
                      )}

                      {concept.steps?.length > 0 && (
                        <>
                          <strong>Steps</strong>

                          <ol className="concept-list">
                            {concept.steps.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ol>
                        </>
                      )}

                      {concept.examples?.length > 0 && (
                        <div className="example-box">
                          <strong>Examples</strong>

                          {concept.examples.map(
                            (example, exampleIndex) => (
                              <p key={exampleIndex}>{example}</p>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {topic.examples?.length > 0 && (
                    <>
                      <h4>✏️ Solved Examples</h4>

                      {topic.examples.map((example, index) => (
                        <div className="example-box" key={index}>
                          <strong>Question</strong>

                          <p>{example.question}</p>

                          <strong>Solution</strong>

                          <p>{example.solution}</p>
                        </div>
                      ))}
                    </>
                  )}

                  {topic.practice?.length > 0 && (
                    <>
                      <h4>📝 Practice Questions</h4>

                      {topic.practice.map((question, index) => {
                        const key = `${topicIndex}-${index}`;
                        const result = practiceAnswers[key];

                        return (
                          <div
                            className="practice-question"
                            key={index}
                          >
                            <strong>
                              {index + 1}. {question.question}
                            </strong>

                            <div className="question-options">
                              {question.options?.map((option) => (
                                <button
                                  key={option}
                                  className={
                                    result?.selected === option
                                      ? result.correct
                                        ? "selected correct"
                                        : "selected"
                                      : ""
                                  }
                                  onClick={() =>
                                    choosePracticeAnswer(
                                      topicIndex,
                                      index,
                                      option,
                                      question.answer
                                    )
                                  }
                                >
                                  {option}
                                </button>
                              ))}
                            </div>

                            {result && (
                              <div className="concept-box">
                                <strong>
                                  {result.correct
                                    ? "✓ Correct!"
                                    : "✗ Not quite"}
                                </strong>

                                <p>
                                  {result.correct
                                    ? "Nice work. You got the answer right."
                                    : `Correct answer: ${question.answer}`}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </>
                  )}
                </article>
              ))}
            </>
          )}

          {activeSection === "revision" && (
            <article className="lesson-card">
              <div className="eyebrow">LAST-MINUTE REVIEW</div>

              <h3>🔁 Quick Revision</h3>

              <ul className="concept-list">
                {content.revision?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          )}

          {activeSection === "tips" && (
            <article className="lesson-card">
              <div className="eyebrow">EXAM STRATEGY</div>

              <h3>💡 Exam Tips</h3>

              <ul className="concept-list">
                {content.examTips?.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </article>
          )}

          {activeSection === "mistakes" && (
            <article className="lesson-card">
              <div className="eyebrow">WATCH OUT</div>

              <h3>⚠️ Common Mistakes</h3>

              <ul className="concept-list">
                {content.commonMistakes?.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>
            </article>
          )}

          {activeSection === "test" && (
            <ChapterTest
              questions={content.test || []}
              title={`${content.title} Chapter Test`}
            />
          )}

          {activeSection === "sources" && (
            <article className="lesson-card">
              <div className="eyebrow">REFERENCE MATERIAL</div>

              <h3>🔗 Sources</h3>

              <p>
                Reference material used while preparing this
                chapter.
              </p>

              {content.sources?.length ? (
                content.sources.map((source, index) => (
                  <div className="concept-box" key={index}>
                    <strong>{source.title}</strong>

                    <p>{source.note}</p>

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
                ))
              ) : (
                <div className="example-box">
                  <strong>No external sources added yet</strong>

                  <p>
                    Source references can be added from the AGS
                    content system.
                  </p>
                </div>
              )}
            </article>
          )}

          <div className="chapter-actions">
            <a
              href="/education/10th-standard/mathematics"
              className="secondary-action"
            >
              ← Back to Mathematics
            </a>

            <button
              className="primary-action"
              onClick={() => setActiveSection("test")}
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
