import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const questions = [
  {
    question: 'Which city is the capital of Karnataka?',
    options: ['Mysuru', 'Bengaluru', 'Mangaluru', 'Belagavi'],
    answer: 'Bengaluru',
    explanation: 'Bengaluru is the capital city of Karnataka.',
  },
  {
    question:
      'Which Article of the Indian Constitution guarantees equality before law?',
    options: ['Article 12', 'Article 14', 'Article 19', 'Article 21'],
    answer: 'Article 14',
    explanation:
      'Article 14 provides equality before the law and equal protection of the laws.',
  },
  {
    question: 'What is 25% of 200?',
    options: ['25', '40', '50', '75'],
    answer: '50',
    explanation: '25% of 200 is 50.',
  },
  {
    question: 'Which gas is most abundant in Earth’s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    answer: 'Nitrogen',
    explanation:
      'Nitrogen makes up about 78% of Earth’s atmosphere.',
  },
  {
    question: 'What comes next: 5, 10, 15, 20, ?',
    options: ['22', '24', '25', '30'],
    answer: '25',
    explanation: 'The sequence increases by 5 each time.',
  },
]

const TEST_TIME = 60

function MockTests() {
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState('')
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(TEST_TIME)
  const [finished, setFinished] = useState(false)

  const question = questions[current]

  useEffect(() => {
    if (!started || finished) return

    if (timeLeft <= 0) {
      setFinished(true)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [started, finished, timeLeft])

  function startTest() {
    setStarted(true)
    setCurrent(0)
    setSelected('')
    setAnswers({})
    setTimeLeft(TEST_TIME)
    setFinished(false)
  }

  function selectAnswer(option) {
    setSelected(option)

    setAnswers((previous) => ({
      ...previous,
      [current]: option,
    }))
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      const next = current + 1

      setCurrent(next)
      setSelected(answers[next] || '')
    } else {
      setFinished(true)
    }
  }

  function previousQuestion() {
    if (current > 0) {
      const previous = current - 1

      setCurrent(previous)
      setSelected(answers[previous] || '')
    }
  }

  function finishTest() {
    setFinished(true)
  }

  function restartTest() {
    setStarted(false)
    setCurrent(0)
    setSelected('')
    setAnswers({})
    setTimeLeft(TEST_TIME)
    setFinished(false)
  }

  function calculateScore() {
    return questions.reduce((score, item, index) => {
      return score + (answers[index] === item.answer ? 1 : 0)
    }, 0)
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`
  }

  if (finished) {
    const score = calculateScore()
    const percentage = Math.round(
      (score / questions.length) * 100,
    )

    return (
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">MOCK TEST COMPLETE</p>

          <h2>Test completed!</h2>

          <p>
            Your mock test result is ready.
          </p>
        </section>

        <section className="result-card">
          <div className="result-score">
            <strong>
              {score} / {questions.length}
            </strong>

            <span>Your Score</span>
          </div>

          <div className="mock-result-details">
            <div>
              <strong>{percentage}%</strong>
              <span>Percentage</span>
            </div>

            <div>
              <strong>
                {Object.keys(answers).length}
              </strong>
              <span>Attempted</span>
            </div>

            <div>
              <strong>
                {questions.length - Object.keys(answers).length}
              </strong>
              <span>Unanswered</span>
            </div>
          </div>

          <p>
            Keep practicing and try to improve your score
            in the next test.
          </p>

          <div className="result-actions">
            <button
              className="primary-action"
              onClick={restartTest}
            >
              Retake Test
            </button>

            <Link
              to="/government-exams"
              className="secondary-action"
            >
              Back to Exams
            </Link>
          </div>
        </section>
      </main>
    )
  }

  if (!started) {
    return (
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">
            KARNATAKA EXAM PREPARATION
          </p>

          <h2>Mock Tests</h2>

          <p>
            Test your knowledge with exam-style questions,
            navigation and a countdown timer.
          </p>
        </section>

        <section className="mock-start-card">
          <div className="mock-icon">📝</div>

          <h3>
            Karnataka Government Exam — Mock Test
          </h3>

          <p>
            Test yourself across General Knowledge,
            Indian Polity, Aptitude, Science and Reasoning.
          </p>

          <div className="test-info">
            <div>
              <strong>5</strong>
              <span>Questions</span>
            </div>

            <div>
              <strong>60s</strong>
              <span>Time</span>
            </div>

            <div>
              <strong>MCQ</strong>
              <span>Format</span>
            </div>
          </div>

          <button
            className="start-test-button"
            onClick={startTest}
          >
            Start Mock Test →
          </button>
        </section>
      </main>
    )
  }

  const progress =
    ((current + 1) / questions.length) * 100

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">MOCK TEST</p>

        <h2>
          Question {current + 1} of {questions.length}
        </h2>

        <p>
          Select the best answer.
        </p>
      </section>

      <section className="mock-test-content">
        <div className="mock-test-top">
          <div className="mock-question-count">
            Question {current + 1} / {questions.length}
          </div>

          <div
            className={
              timeLeft <= 10
                ? 'mock-timer danger'
                : 'mock-timer'
            }
          >
            ⏱ {formatTime(timeLeft)}
          </div>
        </div>

        <div className="mock-progress">
          <div
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <article className="question-card">
          <h3>{question.question}</h3>

          <div className="options-list">
            {question.options.map((option) => {
              let className = 'option-button'

              if (selected === option) {
                className += ' selected'
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => selectAnswer(option)}
                >
                  {option}
                </button>
              )
            })}
          </div>

          <div className="mock-navigation">
            <button
              className="secondary-action"
              onClick={previousQuestion}
              disabled={current === 0}
            >
              ← Previous
            </button>

            {current === questions.length - 1 ? (
              <button
                className="next-question"
                onClick={finishTest}
              >
                Submit Test
              </button>
            ) : (
              <button
                className="next-question"
                onClick={nextQuestion}
              >
                Next Question →
              </button>
            )}
          </div>
        </article>
      </section>
    </main>
  )
}

export default MockTests
