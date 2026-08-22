import { useEffect, useMemo, useState } from "react";

const API_URL = "http://localhost:5000";

export default function Search() {
  const [knowledge, setKnowledge] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadKnowledge();
  }, []);

  async function loadKnowledge() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/admin/content`);
      if (!response.ok) throw new Error("Unable to load knowledge.");

      const data = await response.json();
      setKnowledge(Array.isArray(data.content) ? data.content : []);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to AGS Knowledge Engine.");
    } finally {
      setLoading(false);
    }
  }

  const localResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return knowledge;

    return knowledge.filter((item) => {
      const text = [
        item.title,
        item.classification?.category,
        item.classification?.level,
        item.classification?.subject,
        item.content?.description,
        item.content?.overview,
        item.content?.summary,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return text.includes(q);
    });
  }, [knowledge, query]);

  async function runSearch() {
    const q = query.trim();
    if (!q) {
      loadKnowledge();
      return;
    }

    try {
      setSearching(true);
      setError("");

      const response = await fetch(
        `${API_URL}/api/search?q=${encodeURIComponent(q)}`
      );

      if (!response.ok) throw new Error("Search failed.");

      const data = await response.json();

      const results = Array.isArray(data.results) ? data.results : [];

      if (results.length > 0) {
        setKnowledge(
          results.map((item) => ({
            id: item.id,
            title: item.title,
            classification: {
              category: item.category || "",
              level: item.level || "",
              subject: item.subject || "",
            },
            content: {
              description:
                item.description ||
                "Knowledge available in the AGS Knowledge Engine.",
            },
            status: item.status || "active",
          }))
        );
      } else {
        setKnowledge([]);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to search the AGS Knowledge Engine.");
    } finally {
      setSearching(false);
    }
  }

  function openTopic(item) {
    const id = item.id || item.title;
    window.location.href = `/topic/${encodeURIComponent(id)}`;
  }

  const results = query.trim() ? localResults : knowledge;

  return (
    <main className="search-page">
      <section className="page-hero">
        <p className="eyebrow">AGS KNOWLEDGE ENGINE</p>
        <h1>Search Knowledge</h1>
        <p>Find topics, subjects, levels and learning resources quickly.</p>
      </section>

      <section className="search-section">
        <div className="search-box">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") runSearch();
            }}
            placeholder="Search topics, subjects, levels..."
            aria-label="Search knowledge"
          />
          <button type="button" onClick={runSearch} disabled={searching}>
            {searching ? "Searching..." : "Search"}
          </button>
        </div>

        {loading && (
          <div className="search-message">Loading knowledge...</div>
        )}

        {!loading && error && <div className="search-error">{error}</div>}

        {!loading && !error && (
          <>
            <div className="search-results-header">
              <h2>{query.trim() ? "Search Results" : "Knowledge Library"}</h2>
              <span>
                {results.length} {results.length === 1 ? "result" : "results"}
              </span>
            </div>

            {results.length === 0 ? (
              <div className="empty-results">
                <div className="empty-icon">🔎</div>
                <h3>No knowledge found</h3>
                <p>Try another topic, subject or level.</p>
              </div>
            ) : (
              <div className="knowledge-grid">
                {results.map((item) => (
                  <article
                    className="knowledge-card"
                    key={item.id || item.title}
                    onClick={() => openTopic(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openTopic(item);
                      }
                    }}
                  >
                    <div className="card-top">
                      <span className="status">
                        {item.status || "ACTIVE"}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <div className="tags">
                      {item.classification?.category && (
                        <span>{item.classification.category}</span>
                      )}
                      {item.classification?.level && (
                        <span>{item.classification.level}</span>
                      )}
                      {item.classification?.subject && (
                        <span>{item.classification.subject}</span>
                      )}
                    </div>

                    <p className="description">
                      {item.content?.description ||
                        item.content?.overview ||
                        "Open this topic to explore the full knowledge."}
                    </p>

                    <div className="card-footer">Open knowledge →</div>
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
