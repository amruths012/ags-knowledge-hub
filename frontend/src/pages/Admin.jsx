import { useEffect, useState } from "react";

const API = "http://localhost:5000/api";

function Admin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    category: "Education",
    level: "10th Standard",
    subject: "Mathematics",
    title: "",
    description: "",
    sourceUrl: "",
  });

  async function loadKnowledge() {
    try {
      setLoading(true);

      const response = await fetch(`${API}/admin/content`);
      const data = await response.json();

      if (data.success) {
        setItems(data.content || []);
      }
    } catch (error) {
      setMessage("Unable to connect to AGS Knowledge Engine.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadKnowledge();
  }, []);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!form.title.trim()) {
      setMessage("Please enter a topic or chapter name.");
      return;
    }

    try {
      const response = await fetch(`${API}/admin/content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Unable to save knowledge.");
        return;
      }

      setMessage(`"${form.title}" added successfully as a draft.`);

      setForm({
        category: form.category,
        level: form.level,
        subject: form.subject,
        title: "",
        description: "",
        sourceUrl: "",
      });

      await loadKnowledge();
    } catch (error) {
      setMessage("Network error. Make sure the backend is running.");
    }
  }

  function clearForm() {
    setForm({
      category: "Education",
      level: "10th Standard",
      subject: "Mathematics",
      title: "",
      description: "",
      sourceUrl: "",
    });

    setMessage("");
  }

  return (
    <main className="admin-page">
      <section className="admin-hero">
        <p className="eyebrow">AGS KNOWLEDGE ENGINE</p>

        <h1>Knowledge Manager</h1>

        <p>
          Add, organise and publish knowledge without writing new website code.
        </p>
      </section>

      <section className="admin-grid">
        <div className="admin-card">
          <h2>➕ Add New Knowledge</h2>

          <p className="muted">
            Create a topic, chapter or knowledge item.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Category
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <option>Education</option>
                  <option>Government Exams</option>
                  <option>Careers</option>
                  <option>Technology</option>
                  <option>Science</option>
                  <option>Current Affairs</option>
                  <option>General Knowledge</option>
                </select>
              </label>

              <label>
                Level
                <input
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  placeholder="10th Standard"
                />
              </label>

              <label>
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Mathematics"
                />
              </label>

              <label>
                Topic / Chapter
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Example: Quadratic Equations"
                  required
                />
              </label>
            </div>

            <label>
              Description
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="What is this knowledge about?"
                rows="6"
              />
            </label>

            <label>
              Trusted Source URL
              <input
                name="sourceUrl"
                value={form.sourceUrl}
                onChange={handleChange}
                placeholder="https://example.com/source"
              />
            </label>

            <div className="button-row">
              <button type="button" onClick={clearForm}>
                Clear
              </button>

              <button type="submit" className="primary">
                💾 Save Knowledge
              </button>
            </div>
          </form>

          {message && (
            <div className="admin-message">
              {message}
            </div>
          )}
        </div>

        <div className="admin-card">
          <div className="library-header">
            <div>
              <h2>📚 Knowledge Library</h2>
              <p className="muted">
                Everything stored in the AGS Knowledge Engine.
              </p>
            </div>

            <span className="count">
              {items.length} items
            </span>
          </div>

          {loading ? (
            <div className="empty-state">
              Loading knowledge...
            </div>
          ) : items.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🧠</div>
              <h3>Nothing added yet</h3>
              <p>Add your first knowledge item.</p>
            </div>
          ) : (
            <div className="knowledge-list">
              {items.map((item) => (
                <article className="knowledge-item" key={item.id}>
                  <div>
                    <h3>{item.title}</h3>

                    <div className="tags">
                      <span>{item.classification?.category}</span>
                      <span>{item.classification?.level}</span>
                      <span>{item.classification?.subject}</span>
                    </div>

                    {item.content?.description && (
                      <p>{item.content.description}</p>
                    )}
                  </div>

                  <div className="status">
                    {item.content?.status || "draft"}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Admin;
