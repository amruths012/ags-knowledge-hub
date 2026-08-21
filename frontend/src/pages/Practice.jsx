import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const practiceData = {
  kpsc: {
    title: 'KPSC Practice',
    description:
      'Practice questions designed for Karnataka government exam preparation.',
    questions: [
      {
        question: 'What is the capital of Karnataka?',
        options: [
          'Mysuru',
          'Bengaluru',
          'Mangaluru',
          'Hubballi',
        ],
        answer: 'Bengaluru',
        explanation:
          'Bengaluru is the capital city of Karnataka.',
      },
      {
        question:
          'Which article of the Indian Constitution deals with equality before law?',
        options: [
          'Article 12',
          'Article 14',
          'Article 19',
          'Article 21',
        ],
        answer: 'Article 14',
        explanation:
          'Article 14 guarantees equality before the law and equal protection of the laws.',
      },
      {
        question:
          'Which is the largest district of Karnataka by area?',
        options: [
          'Belagavi',
          'Tumakuru',
          'Mysuru',
          'Kalaburagi',
        ],
        answer: 'Belagavi',
        explanation:
          'Belagavi is one of the largest districts of Karnataka by geographical area.',
      },
    ],
  },

  reasoning: {
    title: 'Reasoning Practice',
    description:
      'Practice logical and analytical reasoning questions.',
    questions: [
      {
        question: 'What comes next? 2, 4, 6, 8, ?',
        options: ['9', '10', '11', '12'],
        answer: '10',
        explanation:
          'The sequence increases by 2 each time.',
      },
      {
        question:
          'If CAT is coded as DBU, how is DOG coded?',
        options: [
          'EPH',
          'EOG',
          'DPH',
          'FPI',
        ],
        answer: 'EPH',
        explanation:
          'Each letter is moved one position forward in the alphabet.',
      },
    ],
  },

  aptitude: {
    title: 'Quantitative Aptitude',
    description:
      'Practice important aptitude questions for competitive examinations.',
    questions: [
      {
        question: 'What is 20% of 250?',
        options: ['25', '40', '50', '60'],
        answer: '50',
        explanation:
          '20% of 250 = 250 × 20 / 100 = 50.',
      },
      {
        question:
          'If a book costs ₹200 and the discount is ₹20, what is the selling price?',
        options: ['₹160', '₹170', '₹180', '₹190'],
        answer: '₹180',
        explanation:
          'Selling price = ₹200 − ₹20 = ₹180.',
      },
    ],
  },
}

function Practice() {
  const { subject } = useParams()

  const data =
    practiceData[subject] || practiceData.kpsc

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  const question = data.questions[currentQuestion]

  function selectAnswer(option) {
    if (answered) return

    setSelectedAnswer(option)
    setAnswered(true)

    if (option === question.answer) {
      setScore((previousScore) => previousScore + 1)
    }
  }

  function nextQuestion() {
    if (currentQuestion < data.questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1)
      setSelectedAnswer('')
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  function restartPractice() {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setShowResult(false)
    setAnswered(false)
  }

  if (showResult) {
    return (
      <main className="page">
        <section className="page-hero">
          <p className="eyebrow">PRACTICE COMPLETE</p>

          <h2>Well done!</h2>

          <p>
            You completed the {data.title} practice session.
          </p>
        </section>

        <section className="result-card">
          <div className="result-score">
            <strong>
              {score} / {data.questions.length}
            </strong>

            <span>Your Score</span>
          </div>

          <p>
            Keep practicing and improve your score with more
            questions.
          </p>

          <div className="result-actions">
            <button
              className="primary-action"
              onClick={restartPractice}
            >
              Try Again
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

  return (
    <main className="page">

      <section className="page-hero">
        <p className="eyebrow">PRACTICE</p>

        <h2>{data.title}</h2>

        <p>{data.description}</p>
      </section>

      <section className="practice-content">

        <div className="practice-top">

          <div>
            <p className="question-number">
              Question {currentQuestion + 1} of{' '}
              {data.questions.length}
            </p>

            <div className="progress-bar">
              <div
                style={{
                  width: `${
                    ((currentQuestion + 1) /
                      data.questions.length) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <Link
            to="/government-exams"
            className="back-link"
          >
            ← Exams
          </Link>

        </div>

        <article className="question-card">

          <h3>{question.question}</h3>

          <div className="options-list">

            {question.options.map((option) => {
              let className = 'option-button'

              if (answered && option === question.answer) {
                className += ' correct'
              }

              if (
                answered &&
                option === selectedAnswer &&
                option !== question.answer
              ) {
                className += ' incorrect'
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => selectAnswer(option)}
                  disabled={answered}
                >
                  {option}
                </button>
              )
            })}

          </div>

          {answered && (
            <div className="explanation">
              <strong>
                {selectedAnswer === question.answer
                  ? 'Correct! 🎉'
                  : 'Not quite.'}
              </strong>

              <p>{question.explanation}</p>
            </div>
          )}

          {answered && (
            <button
              className="next-question"
              onClick={nextQuestion}
            >
              {currentQuestion ===
              data.questions.length - 1
                ? 'Finish Practice'
                : 'Next Question →'}
            </button>
          )}

        </article>

      </section>

    </main>
  )
}

export default Practice
