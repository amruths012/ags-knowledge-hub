const chapters = [
  {
    number: "01",
    title: "Real Numbers",
    description:
      "Learn number systems, Euclid's division algorithm, HCF and LCM.",
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
    path: "/topic/quadratic-equations",
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
        <div className="eyebrow">10TH STANDARD • MATHEMATICS</div>

        <h2>Mathematics</h2>

        <p>
          Learn mathematics chapter by chapter with simple explanations,
          examples, practice questions and tests.
        </p>
      </section>

      <section className="explore-section">
        <div className="explore-grid">
          {chapters.map((chapter) => (
            <article className="explore-card" key={chapter.number}>
              <div
                style={{
                  marginBottom: "14px",
                  color: "#3155d9",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                }}
              >
                CHAPTER {chapter.number}
              </div>

              <h3>{chapter.title}</h3>

              <p>{chapter.description}</p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "18px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "#edf2ff",
                    color: "#3155d9",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  Notes
                </span>

                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "#edf2ff",
                    color: "#3155d9",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  Practice
                </span>

                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "#edf2ff",
                    color: "#3155d9",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                >
                  Test
                </span>
              </div>

              {chapter.path ? (
                <a
                  href={chapter.path}
                  className="primary-button"
                  style={{ width: "100%" }}
                >
                  Open Chapter →
                </a>
              ) : (
                <span
                  className="secondary-button"
                  style={{
                    width: "100%",
                    opacity: 0.7,
                    cursor: "default",
                  }}
                >
                  Coming Soon
                </span>
              )}
            </article>
          ))}
        </div>

        <section className="mock-start-card">
          <div className="mock-icon">🧠</div>

          <h3>Need help with Mathematics?</h3>

          <p>
            Ask AGS to explain a mathematical concept in simple language
            and work through problems step by step.
          </p>

          <a href="/" className="primary-button">
            Ask AGS →
          </a>
        </section>
      </section>
    </main>
  );
}

export default Mathematics;
