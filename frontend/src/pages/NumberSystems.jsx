import { Link } from "react-router-dom";

function NumberSystems() {
  return (
    <main className="page">

      <section className="page-hero">
        <div className="eyebrow">
          10TH STANDARD • MATHEMATICS • REAL NUMBERS
        </div>

        <h2>Number Systems</h2>

        <p>
          Understand the different types of numbers and how
          they are classified on the number line.
        </p>
      </section>

      <section className="chapter-content">

        <article className="lesson-card">
          <h3>📚 What is a Number System?</h3>

          <p>
            A number system is a way of classifying and
            representing numbers. In mathematics, numbers
            are grouped into different types based on their
            properties.
          </p>

          <div className="concept-box">
            <strong>
              The main number groups are:
            </strong>

            <p>
              Natural Numbers → Whole Numbers → Integers
              → Rational Numbers → Real Numbers
            </p>
          </div>
        </article>

        <article className="lesson-card">
          <h3>1️⃣ Natural Numbers</h3>

          <p>
            Natural numbers are the counting numbers that
            start from 1.
          </p>

          <div className="example-box">
            <strong>Examples:</strong>

            <p>
              1, 2, 3, 4, 5, 6, 7, ...
            </p>
          </div>

          <p>
            The set of natural numbers is commonly written as:
          </p>

          <div className="concept-box">
            <strong>
              N = {"{1, 2, 3, 4, 5, ...}"}
            </strong>
          </div>
        </article>

        <article className="lesson-card">
          <h3>0️⃣ Whole Numbers</h3>

          <p>
            Whole numbers include all natural numbers along
            with zero.
          </p>

          <div className="example-box">
            <strong>Examples:</strong>

            <p>
              0, 1, 2, 3, 4, 5, ...
            </p>
          </div>
        </article>

        <article className="lesson-card">
          <h3>➕➖ Integers</h3>

          <p>
            Integers include positive numbers, negative
            numbers and zero.
          </p>

          <div className="example-box">
            <strong>Examples:</strong>

            <p>
              ..., -3, -2, -1, 0, 1, 2, 3, ...
            </p>
          </div>
        </article>

        <article className="lesson-card">
          <h3>🔢 Rational Numbers</h3>

          <p>
            A rational number is a number that can be written
            in the form:
          </p>

          <div className="concept-box">
            <strong>
              p / q
            </strong>

            <p>
              where p and q are integers and q is not equal
              to zero.
            </p>
          </div>

          <p>
            Examples include:
          </p>

          <div className="example-box">
            <p>
              2, -5, 3/4, 7/2, 0.5
            </p>
          </div>
        </article>

        <article className="lesson-card">
          <h3>√ Irrational Numbers</h3>

          <p>
            Irrational numbers cannot be written in the form
            p/q, where p and q are integers and q is not zero.
          </p>

          <div className="example-box">
            <strong>Examples:</strong>

            <p>
              √2, √3, √5, π
            </p>
          </div>

          <p>
            Their decimal expansions are non-terminating and
            non-repeating.
          </p>
        </article>

        <article className="lesson-card">
          <h3>🌍 Real Numbers</h3>

          <p>
            Real numbers consist of both rational and
            irrational numbers.
          </p>

          <div className="concept-box">
            <strong>
              Real Numbers = Rational Numbers + Irrational Numbers
            </strong>
          </div>

          <p>
            Every real number can be represented on the
            number line.
          </p>
        </article>

        <article className="lesson-card">
          <h3>🧠 Remember This</h3>

          <ul className="concept-list">
            <li>
              Natural numbers start from 1.
            </li>

            <li>
              Whole numbers include 0.
            </li>

            <li>
              Integers include negative numbers, zero and
              positive numbers.
            </li>

            <li>
              Rational numbers can be written as p/q.
            </li>

            <li>
              Irrational numbers cannot be written as p/q.
            </li>

            <li>
              Rational and irrational numbers together form
              the real numbers.
            </li>
          </ul>
        </article>

        <article className="lesson-card">
          <h3>✏️ Quick Practice</h3>

          <div className="practice-question">
            <strong>
              1. Which of the following is a natural number?
            </strong>

            <div className="question-options">
              <button
                onClick={() =>
                  alert("Correct! 🎉")
                }
              >
                5
              </button>

              <button
                onClick={() =>
                  alert("Try again!")
                }
              >
                -2
              </button>

              <button
                onClick={() =>
                  alert("Try again!")
                }
              >
                √2
              </button>

              <button
                onClick={() =>
                  alert("Try again!")
                }
              >
                -7
              </button>
            </div>
          </div>

          <div className="practice-question">
            <strong>
              2. Which number is irrational?
            </strong>

            <div className="question-options">
              <button
                onClick={() =>
                  alert("Try again!")
                }
              >
                1/2
              </button>

              <button
                onClick={() =>
                  alert("Correct! 🎉")
                }
              >
                √3
              </button>

              <button
                onClick={() =>
                  alert("Try again!")
                }
              >
                4
              </button>

              <button
                onClick={() =>
                  alert("Try again!")
                }
              >
                0.25
              </button>
            </div>
          </div>
        </article>

        <div className="chapter-actions">

          <Link
            to="/education/10th-standard/mathematics/real-numbers"
            className="secondary-action"
          >
            ← Back to Real Numbers
          </Link>

          <button
            className="primary-action"
            onClick={() =>
              alert(
                "Number Systems test will be added next!"
              )
            }
          >
            Take Topic Test →
          </button>

        </div>

      </section>

    </main>
  );
}

export default NumberSystems;
