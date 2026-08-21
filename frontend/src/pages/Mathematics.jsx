import { Link } from "react-router-dom";

const chapters = [
  {
    number: "01",
    title: "Real Numbers",
    description:
      "Learn number systems, Euclid's division algorithm, HCF and LCM.",
    path: "/education/10th-standard/mathematics/real-numbers",
  },
  {
    number: "02",
    title: "Polynomials",
    description:
      "Understand polynomial expressions, zeros and relationships between roots.",
  },
  {
    number: "03",
    title: "Pair of Linear Equations",
    description:
      "Learn equations in two variables and methods to solve them.",
  },
  {
    number: "04",
    title: "Quadratic Equations",
    description:
      "Understand quadratic equations, roots and solving methods.",
  },
  {
    number: "05",
    title: "Arithmetic Progressions",
    description:
      "Learn sequences, common difference and the nth term.",
  },
  {
    number: "06",
    title: "Triangles",
    description:
      "Study similarity, congruence and important triangle theorems.",
  },
  {
    number: "07",
    title: "Coordinate Geometry",
    description:
      "Learn coordinates, distance formula and section formula.",
  },
  {
    number: "08",
    title: "Introduction to Trigonometry",
    description:
      "Understand trigonometric ratios and basic identities.",
  },
  {
    number: "09",
    title: "Statistics",
    description:
      "Learn mean, median, mode and interpretation of data.",
  },
  {
    number: "10",
    title: "Probability",
    description:
      "Understand basic probability concepts and calculations.",
  },
];

function Mathematics() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="eyebrow">
          10TH STANDARD • MATHEMATICS
        </div>

        <h2>Mathematics</h2>

        <p>
          Learn mathematics chapter by chapter with
          simple explanations, examples, practice
          questions and tests.
        </p>
      </section>

      <section className="education-grid">
        {chapters.map((chapter) => (
          <article
            className="education-card"
            key={chapter.number}
          >
            <div className="education-icon">
              {chapter.number}
            </div>

            <h3>{chapter.title}</h3>

            <p>{chapter.description}</p>

            <div className="subject-list">
              <span>Notes</span>
              <span>Practice</span>
              <span>Test</span>
            </div>

            {chapter.path ? (
              <Link
                to={chapter.path}
                className="primary-action"
              >
                Open Chapter →
              </Link>
            ) : (
              <button
                className="primary-action"
                onClick={() =>
                  alert(
                    `${chapter.title} chapter will be added next!`
                  )
                }
              >
                Open Chapter →
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
          Need help with Mathematics?
        </h3>

        <p>
          Ask AGS to explain a mathematical concept
          in simple language and work through problems
          step by step.
        </p>

        <Link
          to="/"
          className="primary-action"
        >
          Ask AGS →
        </Link>
      </section>
    </main>
  );
}

export default Mathematics;
