import { useEffect, useState } from "react";

const STORAGE_KEY = "ags-progress";

export function getAGSProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveAGSProgress(entry) {
  const current = getAGSProgress();
  const filtered = current.filter(
    (item) => item.topicId !== entry.topicId
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([entry, ...filtered])
  );
}

export default function Progress() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getAGSProgress());
  }, []);

  const average = items.length
    ? Math.round(
        items.reduce((sum, item) => sum + item.percentage, 0) /
          items.length
      )
    : 0;

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">YOUR LEARNING</p>
        <h2>Progress</h2>
        <p>Track the chapter tests you have completed.</p>
      </section>

      <section className="explore-section">
        <div className="explore-grid">
          <article className="explore-card">
            <div className="explore-icon">📚</div>
            <h3>{items.length}</h3>
            <p>Chapters tested</p>
          </article>

          <article className="explore-card">
            <div className="explore-icon">📈</div>
            <h3>{average}%</h3>
            <p>Average score</p>
          </article>

          <article className="explore-card">
            <div className="explore-icon">🏆</div>
            <h3>
              {items.filter((item) => item.percentage >= 80).length}
            </h3>
            <p>Strong scores</p>
          </article>
        </div>

        <div style={{ marginTop: "32px" }}>
          {items.length === 0 ? (
            <article className="lesson-card">
              <h3>🚀 Your progress starts here</h3>
              <p>
                Complete a chapter test and your result will appear here
                automatically.
              </p>
              <a href="/mathematics" className="primary-action">
                Start Learning →
              </a>
            </article>
          ) : (
            items.map((item) => (
              <article
                className="lesson-card"
                key={item.topicId}
                style={{ marginBottom: "18px" }}
              >
                <div className="eyebrow">COMPLETED</div>
                <h3>{item.title}</h3>
                <p>
                  Score: <strong>{item.score}/{item.total}</strong>{" "}
                  ({item.percentage}%)
                </p>
                <p>
                  Completed:{" "}
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <a
                  href={`/topic/${encodeURIComponent(item.topicId)}`}
                  className="primary-action"
                >
                  Review Chapter →
                </a>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
