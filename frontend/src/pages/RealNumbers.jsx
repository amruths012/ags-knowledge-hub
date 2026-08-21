import { Link } from "react-router-dom";

const topics = [
  {
    number: "01",
    title: "Number Systems",
    description:
      "Natural numbers, whole numbers, integers, rational numbers, irrational numbers and real numbers.",
    path: "/education/10th-standard/mathematics/real-numbers/number-systems",
  },
  {
    number: "02",
    title: "Euclid's Division Lemma",
    description:
      "Learn Euclid's division algorithm and how it is used to find HCF.",
  },
  {
    number: "03",
    title: "Fundamental Theorem of Arithmetic",
    description:
      "Understand prime factorisation, HCF, LCM and important results.",
  },
  {
    number: "04",
    title: "Irrational Numbers",
    description:
      "Understand irrational numbers and learn how to identify them.",
  },
  {
    number: "05",
    title: "Decimal Expansions",
    description:
      "Learn terminating and non-terminating decimal expansions.",
  },
  {
    number: "06",
    title: "Important Results",
    description:
      "Important formulas, properties and results to remember for exams.",
  },
  {
    number: "07",
    title: "Solved Examples",
    description:
      "Step-by-step examples covering important Real Numbers concepts.",
  },
  {
    number: "08",
    title: "Practice Questions",
    description:
      "Test your understanding with chapter-wise practice questions.",
  },
  {
    number: "09",
    title: "Previous Year Questions",
    description:
      "Practice questions based on previous examination patterns.",
  },
  {
    number: "10",
    title: "Chapter Test",
    description:
      "Take a complete Real Numbers test and check your score.",
  },
];

function RealNumbers() {
  return (
    <main className="page">

      <section className="page-hero">
        <div className="eyebrow">
          10TH STANDARD • MATHEMATICS
        </div>

        <h2>Real Numbers</h2>

        <p>
          Learn the complete Real Numbers chapter
          topic by topic with simple explanations,
          examples and practice.
        </p>
      </section>

      <section className="education-grid">

        {topics.map((topic) => (
          <article
            className="education-card"
            key={topic.number}
          >

            <div className="education-icon">
              {topic.number}
            </div>

            <h3>
              {topic.title}
            </h3>

            <p>
              {topic.description}
            </p>

            <div className="subject-list">
              <span>Learn</span>
              <span>Examples</span>
              <span>Practice</span>
            </div>

            {topic.path ? (

              <Link
                to={topic.path}
                className="primary-action"
              >
                Open Topic →
              </Link>

            ) : (

              <button
                className="primary-action"
                onClick={() =>
                  alert(
                    `${topic.title} will be added next!`
                  )
                }
              >
                Open Topic →
              </button>

            )}

          </article>
        ))}

      </section>

      <section className="mock-start-card">

        <div className="mock-icon">
          🧠
        </div>

        <h3>
          Ready to test yourself?
        </h3>

        <p>
          Complete the topics first, then take the
          Real Numbers chapter test.
        </p>

        <button
          className="primary-action"
          onClick={() =>
            alert(
              "Chapter test will be added next!"
            )
          }
        >
          Start Chapter Test →
        </button>

      </section>

    </main>
  );
}

export default RealNumbers;
