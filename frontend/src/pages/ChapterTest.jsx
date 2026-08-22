import { useState } from "react";

const STORAGE_KEY = "ags-progress";

function saveProgress(entry) {
  try {
    const current = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
    const filtered = current.filter(
      (item) => item.topicId !== entry.topicId
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([entry, ...filtered])
    );
  } catch (error) {
    console.error("Unable to save progress.", error);
  }
}

function ChapterTest({
  questions = [],
  title = "Chapter Test",
  topicId,
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions.length) {
    return (
      <div className="lesson-card">
        <h3>🎯 Chapter Test</h3>
        <p>
          The test questions for this chapter are being prepared.
        </p>
      </div>
    );
  }

  const question = questions[current];

  const selectAnswer = (answer) => {
    if (submitted) return;

    setAnswers({
      ...answers,
      [current]: answer,
    });
  };

  const calculateScore = () =>
    questions.reduce(
      (score, item, index) =>
        score + (answers[index] === item.answer ? 1 : 0),
      0
    );

  const finishTest = () => {
    const score = calculateScore();

    saveProgress({
      topicId: topicId || title,
      title,
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      date: new Date().toISOString(),
    });

    setSubmitted(true);
  };

  const restartTest = () => {
    setCurrent(0);
    setAnswers({});
    setSubmitted(false);
  };

  if (submitted) {
    const score = calculateScore();
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="test-result">
        <div className="test-result-icon">
          {percentage >= 80 ? "🏆" : percentage >= 50 ? "👍" : "📚"}
        </div>

        <div className="eyebrow">TEST COMPLETED</div>
        <h2>{title}</h2>

        <div className="score-number">
          {score}/{questions.length}
        </div>

        <h3>{percentage}%</h3>

        <p>
          {percentage >= 80
            ? "Excellent work! You have a strong understanding of this chapter."
            : percentage >= 50
            ? "Good attempt. Review the incorrect answers and try again."
            : "Keep practising. Review the concepts and retake the test."}
        </p>

        <div className="answer-review">
          <h3>📋 Answer Review</h3>

          {questions.map((item, index) => {
            const userAnswer = answers[index];
            const correct = userAnswer === item.answer;

            return (
              <div
                className={
                  correct
                    ? "review-item correct"
                    : "review-item wrong"
                }
                key={index}
              >
                <strong>
                  {index + 1}. {item.question}
                </strong>

                <p>
                  Your answer:{" "}
                  <strong>{userAnswer || "Not answered"}</strong>
                </p>

                <p>
                  Correct answer: <strong>{item.answer}</strong>
                </p>

                <span>
                  {correct ? "✓ Correct" : "✗ Incorrect"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="chapter-actions">
          <button
            className="primary-action"
            onClick={restartTest}
          >
            🔄 Retake Test
          </button>

          <a href="/progress" className="secondary-action">
            📊 View Progress
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-test">
      <div className="test-header">
        <div>
          <div className="eyebrow">CHAPTER TEST</div>
          <h2>{title}</h2>
        </div>

        <div className="question-counter">
          Question {current + 1} of {questions.length}
        </div>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      <div className="test-question">
        <h3>
          {current + 1}. {question.question}
        </h3>

        <div className="test-options">
          {question.options.map((option) => {
            const selected = answers[current] === option;

            return (
              <button
                key={option}
                className={
                  selected
                    ? "test-option selected"
                    : "test-option"
                }
                onClick={() => selectAnswer(option)}
              >
                <span>{selected ? "✓" : "○"}</span>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="test-navigation">
        <button
          className="secondary-action"
          onClick={() =>
            setCurrent((value) => Math.max(0, value - 1))
          }
          disabled={current === 0}
        >
          ← Previous
        </button>

        {current < questions.length - 1 ? (
          <button
            className="primary-action"
            onClick={() =>
              setCurrent((value) =>
                Math.min(questions.length - 1, value + 1)
              )
            }
          >
            Next →
          </button>
        ) : (
          <button
            className="primary-action"
            onClick={finishTest}
          >
            Submit Test ✓
          </button>
        )}
      </div>
    </div>
  );
}

export default ChapterTest;
