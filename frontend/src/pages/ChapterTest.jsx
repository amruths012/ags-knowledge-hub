import { useState } from "react";

function ChapterTest({ questions = [], title = "Chapter Test" }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions.length) {
    return (
      <div className="lesson-card">
        <h3>🎯 Chapter Test</h3>
        <p>
          The test questions for this chapter are being
          prepared.
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

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const calculateScore = () => {
    return questions.reduce((score, item, index) => {
      return score + (
        answers[index] === item.answer ? 1 : 0
      );
    }, 0);
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
          {percentage >= 80
            ? "🏆"
            : percentage >= 50
            ? "👍"
            : "📚"}
        </div>

        <div className="eyebrow">
          TEST COMPLETED
        </div>

        <h2>{title}</h2>

        <div className="score-number">
          {score}/{questions.length}
        </div>

        <h3>
          {percentage}%
        </h3>

        <p>
          {percentage >= 80
            ? "Excellent work! You have a strong understanding of this chapter."
            : percentage >= 50
            ? "Good attempt. Review the incorrect answers and try again."
            : "Keep practising. Go through the concepts again and retake the test."}
        </p>

        <div className="answer-review">

          <h3>
            📋 Answer Review
          </h3>

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
                  <strong>
                    {userAnswer || "Not answered"}
                  </strong>
                </p>

                <p>
                  Correct answer:{" "}
                  <strong>
                    {item.answer}
                  </strong>
                </p>

                <span>
                  {correct
                    ? "✓ Correct"
                    : "✗ Incorrect"}
                </span>
              </div>
            );
          })}

        </div>

        <button
          className="primary-action"
          onClick={restartTest}
        >
          🔄 Retake Test
        </button>

      </div>
    );
  }

  return (
    <div className="chapter-test">

      <div className="test-header">

        <div>
          <div className="eyebrow">
            CHAPTER TEST
          </div>

          <h2>
            {title}
          </h2>
        </div>

        <div className="question-counter">
          Question {current + 1} of {questions.length}
        </div>

      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${
              ((current + 1) / questions.length) * 100
            }%`,
          }}
        />
      </div>

      <div className="test-question">

        <h3>
          {current + 1}. {question.question}
        </h3>

        <div className="test-options">

          {question.options.map((option) => {

            const selected =
              answers[current] === option;

            return (
              <button
                key={option}
                className={
                  selected
                    ? "test-option selected"
                    : "test-option"
                }
                onClick={() =>
                  selectAnswer(option)
                }
              >
                <span>
                  {selected ? "✓" : "○"}
                </span>

                {option}
              </button>
            );
          })}

        </div>

      </div>

      <div className="test-navigation">

        <button
          className="secondary-action"
          onClick={previousQuestion}
          disabled={current === 0}
        >
          ← Previous
        </button>

        {current < questions.length - 1 ? (

          <button
            className="primary-action"
            onClick={nextQuestion}
          >
            Next →
          </button>

        ) : (

          <button
            className="primary-action"
            onClick={() => setSubmitted(true)}
          >
            Submit Test ✓
          </button>

        )}

      </div>

    </div>
  );
}

export default ChapterTest;
