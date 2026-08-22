import { useState } from "react";

const API_URL = "http://localhost:5000";

export default function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function askAGS() {
    const q = question.trim();
    if (!q) return;

    try {
      setLoading(true);
      setError("");
      setAnswer(null);

      const response = await fetch(
        `${API_URL}/api/search?q=${encodeURIComponent(q)}`
      );

      if (!response.ok) throw new Error("Unable to query AGS.");

      const data = await response.json();
      const results = Array.isArray(data.results) ? data.results : [];

      if (results.length === 0) {
        setAnswer({
          title: "I couldn't find a matching topic",
          text:
            "Try asking with a chapter name, subject, level or specific topic that exists in the AGS Knowledge Hub.",
        });
      } else {
        const first = results[0];

        setAnswer({
          title: first.title,
          text:
            first.description ||
            `I found "${first.title}" in the AGS Knowledge Engine. Open the topic to study the complete explanation, examples and practice material.`,
          id: first.id,
        });
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to AGS Knowledge Engine.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="search-page">
      <section className="page-hero">
        <p className="eyebrow">ASK AGS</p>
        <h1>Ask AGS</h1>
        <p>
          Ask about something in the AGS Knowledge Hub and get a direct
          knowledge match.
        </p>
      </section>

      <section className="knowledge-card" style={{ maxWidth: "820px", margin: "0 auto 80px" }}>
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              askAGS();
            }
          }}
          placeholder="Example: What are quadratic equations?"
          rows={5}
          style={{
            width: "100%",
            resize: "vertical",
            padding: "16px",
            border: "1px solid #d8e1f0",
            borderRadius: "12px",
            outline: "none",
          }}
        />

        <button
          type="button"
          className="primary-button"
          onClick={askAGS}
          disabled={loading}
          style={{ marginTop: "16px" }}
        >
          {loading ? "Thinking..." : "Ask AGS →"}
        </button>

        {error && (
          <p style={{ color: "#c43d3d", marginTop: "18px" }}>{error}</p>
        )}

        {answer && (
          <div className="concept-box" style={{ marginTop: "24px" }}>
            <h3 style={{ marginTop: 0 }}>{answer.title}</h3>
            <p>{answer.text}</p>

            {answer.id && (
              <a
                href={`/topic/${encodeURIComponent(answer.id)}`}
                className="primary-action"
                style={{ marginTop: "12px" }}
              >
                Open Topic →
              </a>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
