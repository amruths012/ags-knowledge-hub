import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000";

export default function Search() {
  const [knowledge, setKnowledge] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadKnowledge();
  }, []);

  async function loadKnowledge() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/admin/content`);

      if (!response.ok) {
        throw new Error("Unable to load knowledge.");
      }

      const data = await response.json();

      setKnowledge(Array.isArray(data.content) ? data.content : []);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to AGS Knowledge Engine.");
    } finally {
      setLoading(false);
    }
  }

  const searchText = query.trim().toLowerCase();

  const results = knowledge.filter((item) => {
    if (!searchText) return true;

    return (
      item.title?.toLowerCase().includes(searchText) ||
      item.classification?.category
        ?.toLowerCase()
        .includes(searchText) ||
      item.classification?.level
        ?.toLowerCase()
        .includes(searchText) ||
      item.classification?.subject
        ?.toLowerCase()
        .includes(searchText) ||
      item.content?.description
        ?.toLowerCase()
        .includes(searchText)
    );
  });

  function openTopic(item) {
    const topicId = item.id || item.title;

    window.location.href = `/topic/${encodeURIComponent(topicId)}`;
  }

  return (
    <main className="search-page">
      <section className="page-hero">
        <p className="eyebrow">AGS KNOWLEDGE ENGINE</p>

        <h1>Search Knowledge</h1>

        <p>
          Find trusted knowledge across the AGS Knowledge Hub.
        </p>
      </section>

      <section className="search-section">
        <div className="search-box">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics, subjects, levels..."
          />

          <button type="button" onClick={loadKnowledge}>
            Search
          </button>
        </div>

        {loading && (
          <div className="search-message">
            Loading knowledge...
          </div>
        )}

        {!loading && error && (
          <div className="search-error">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="search-results-header">
              <h2>Knowledge Library</h2>

              <span>
                {results.length}{" "}
                {results.length === 1 ? "result" : "results"}
              </span>
            </div>

            {results.length === 0 ? (
              <div className="empty-results">
                <div className="empty-icon">🔎</div>

                <h3>No knowledge found</h3>

                <p>
                  Try searching for another topic, subject or level.
                </p>
              </div>
            ) : (
              <div className="knowledge-grid">
                {results.map((item) => (
                  <article
                    className="knowledge-card"
                    key={item.id || item.title}
                    onClick={() => openTopic(item)}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        openTopic(item);
                      }
                    }}
                  >
                    <div className="card-top">
                      <span className="status">
                        {item.content?.status ||
                          item.status ||
                          "DRAFT"}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <div className="tags">
                      {item.classification?.category && (
                        <span>
                          {item.classification.category}
                        </span>
                      )}

                      {item.classification?.level && (
                        <span>
                          {item.classification.level}
                        </span>
                      )}

                      {item.classification?.subject && (
                        <span>
                          {item.classification.subject}
                        </span>
                      )}
                    </div>

                    {item.content?.description && (
                      <p className="description">
                        {item.content.description}
                      </p>
                    )}

                    {item.description && (
                      <p className="description">
                        {item.description}
                      </p>
                    )}

                    <div className="card-footer">
                      Open knowledge →
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
