function Education() {
  const levels = [
    {
      icon: "📘",
      title: "10th Standard",
      description:
        "Subjects, notes, explanations and practice for SSLC students.",
      path: "/mathematics",
      action: "Explore 10th Standard →",
    },
    {
      icon: "🎓",
      title: "PUC",
      description:
        "Science, Commerce and Arts study resources for PUC students.",
    },
    {
      icon: "📚",
      title: "Diploma",
      description:
        "Learning resources and technical subjects for diploma students.",
    },
    {
      icon: "🏫",
      title: "Degree",
      description:
        "Study material and knowledge resources for degree students.",
    },
    {
      icon: "💻",
      title: "Engineering",
      description:
        "Engineering subjects, concepts, technical knowledge and practice.",
    },
    {
      icon: "📝",
      title: "Competitive Exams",
      description:
        "Preparation resources for government and other competitive exams.",
    },
  ];

  return (
    <main className="page">
      <section className="page-hero">
        <p className="eyebrow">EDUCATION</p>

        <h2>Learn at your level.</h2>

        <p>
          AGS Knowledge Hub brings learning resources together for
          students from 10th standard to higher education.
        </p>
      </section>

      <section className="explore-section">
        <p className="eyebrow">CHOOSE YOUR LEVEL</p>

        <h2>What are you studying?</h2>

        <div className="explore-grid">
          {levels.map((level) => (
            <article className="explore-card" key={level.title}>
              <div className="explore-icon">{level.icon}</div>

              <h3>{level.title}</h3>

              <p>{level.description}</p>

              {level.path ? (
                <a
                  href={level.path}
                  className="primary-button"
                  style={{ marginTop: "20px" }}
                >
                  {level.action}
                </a>
              ) : (
                <span
                  className="secondary-button"
                  style={{
                    marginTop: "20px",
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
      </section>
    </main>
  );
}

export default Education;
