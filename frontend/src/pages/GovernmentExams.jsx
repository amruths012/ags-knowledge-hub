import { Link } from 'react-router-dom'

const examCategories = [
  {
    icon: '🏛️',
    title: 'KPSC',
    description:
      'Prepare for Karnataka Public Service Commission examinations.',
    path: '/practice/kpsc',
  },
  {
    icon: '👮',
    title: 'Police & Uniformed Services',
    description:
      'Practice resources for Karnataka police and uniformed-service recruitment.',
    path: '/practice/police',
  },
  {
    icon: '🏢',
    title: 'Karnataka Government Recruitment',
    description:
      'Preparation resources for Karnataka government recruitment exams.',
    path: '/practice/recruitment',
  },
  {
    icon: '📚',
    title: 'General Knowledge',
    description:
      'Karnataka, India and world general knowledge for competitive exams.',
    path: '/practice/general-knowledge',
  },
  {
    icon: '⚖️',
    title: 'Indian Polity',
    description:
      'Constitution, government, fundamental rights and political systems.',
    path: '/practice/polity',
  },
  {
    icon: '🌾',
    title: 'Karnataka History & Geography',
    description:
      'Learn Karnataka history, geography, culture and important places.',
    path: '/practice/karnataka',
  },
  {
    icon: '🔬',
    title: 'General Science',
    description:
      'Physics, chemistry, biology and everyday science concepts.',
    path: '/practice/science',
  },
  {
    icon: '🧮',
    title: 'Quantitative Aptitude',
    description:
      'Numbers, percentages, ratios, averages, time, work and more.',
    path: '/practice/aptitude',
  },
  {
    icon: '🧠',
    title: 'Reasoning',
    description:
      'Logical reasoning, analytical ability and problem-solving practice.',
    path: '/practice/reasoning',
  },
  {
    icon: '🗣️',
    title: 'Kannada & English',
    description:
      'Language skills, grammar, vocabulary and comprehension practice.',
    path: '/practice/languages',
  },
  {
    icon: '📰',
    title: 'Current Affairs',
    description:
      'Important national, international and Karnataka current affairs.',
    path: '/practice/current-affairs',
  },
  {
    icon: '📄',
    title: 'Previous Questions',
    description:
      'Practice questions based on previous competitive examination patterns.',
    path: '/practice/previous-questions',
  },
]

function GovernmentExams() {
  return (
    <main className="page">

      <section className="page-hero">
        <p className="eyebrow">
          KARNATAKA GOVERNMENT EXAMS
        </p>

        <h2>Prepare with confidence.</h2>

        <p>
          Build your preparation with structured subjects,
          practice questions, mock tests and performance tracking.
        </p>
      </section>

      <section className="exam-dashboard">

        <div className="exam-intro">

          <div>
            <p className="eyebrow">
              YOUR PREPARATION
            </p>

            <h3>
              Choose what you want to practice
            </h3>

            <p>
              Start with a subject, explore an exam category
              or take a mock test.
            </p>
          </div>

          <Link
            to="/mock-tests"
            className="primary-action"
          >
            Start Mock Test →
          </Link>

        </div>

        <div className="exam-grid">

          {examCategories.map((category) => (
            <article
              className="exam-card"
              key={category.title}
            >

              <div className="exam-icon">
                {category.icon}
              </div>

              <h4>
                {category.title}
              </h4>

              <p>
                {category.description}
              </p>

              <Link
                to={category.path}
                className="practice-link"
              >
                Practice →
              </Link>

            </article>
          ))}

        </div>

      </section>

    </main>
  )
}

export default GovernmentExams
