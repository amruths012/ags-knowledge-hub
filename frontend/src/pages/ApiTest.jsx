import { useEffect, useState } from "react";
import { getHealth, getTopics } from "../api/knowledgeApi";

function ApiTest() {
  const [status, setStatus] = useState("Connecting...");
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function connectToEngine() {
      try {
        setStatus("Connecting to AGS Knowledge Engine...");
        setError("");

        const health = await getHealth();
        const topicData = await getTopics();

        if (health.success && health.status === "online") {
          setStatus("AGS Knowledge Engine is online");
        } else {
          setStatus("Knowledge Engine responded, but status is unknown");
        }

        setTopics(topicData.topics || []);
      } catch (err) {
        console.error(err);

        setStatus("Connection failed");
        setError(
          "Make sure the backend is running on port 5000."
        );
      }
    }

    connectToEngine();
  }, []);

  return (
    <main className="page">

      <section className="page-hero">

        <div className="eyebrow">
          AGS KNOWLEDGE ENGINE
        </div>

        <h2>
          Backend Connection Test
        </h2>

        <p>
          {status}
        </p>

        {error && (
          <p>
            {error}
          </p>
        )}

      </section>

      {topics.length > 0 && (
        <section className="education-grid">

          {topics.map((topic) => (
            <article
              className="education-card"
              key={topic.id}
            >

              <div className="education-icon">
                📚
              </div>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.level}
                {" • "}
                {topic.subject}
              </p>

              <span>
                API data received ✓
              </span>

            </article>
          ))}

        </section>
      )}

      {!error && topics.length === 0 && (
        <section className="mock-start-card">

          <div className="mock-icon">
            🔄
          </div>

          <h3>
            Loading Knowledge Data
          </h3>

          <p>
            Waiting for the AGS Knowledge Engine
            to return topic data.
          </p>

        </section>
      )}

    </main>
  );
}

export default ApiTest;
