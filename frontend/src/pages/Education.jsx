function Education() {
  const levels = [
    {
      icon: '📘',
      title: '10th Standard',
      description: 'Subjects, notes, explanations and practice for SSLC students.',
    },
    {
      icon: '🎓',
      title: 'PUC',
      description: 'Science, Commerce and Arts study resources for PUC students.',
    },
    {
      icon: '📚',
      title: 'Diploma',
      description: 'Learning resources and technical subjects for diploma students.',
    },
    {
      icon: '🏫',
      title: 'Degree',
      description: 'Study material and knowledge resources for degree students.',
    },
    {
      icon: '💻',
      title: 'Engineering',
      description: 'Engineering subjects, concepts, technical knowledge and practice.',
    },
    {
      icon: '📝',
      title: 'Competitive Exams',
      description: 'Preparation resources for government and other competitive exams.',
    },
  ]

  return (
    <div className="page">
      <section className="page-hero">
        <p className="eyebrow">EDUCATION</p>

        <h2>Learn at your level.</h2>

        <p>
          AGS Knowledge Hub brings learning resources together for
          students from 10th standard to higher education.
        </p>
      </section>

      <section className="education-content">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CHOOSE YOUR LEVEL</p>
            <h3>What are you studying?</h3>
          </div>
        </div>

        <div className="education-grid">
          {levels.map((level) => (
            <article className="education-card" key={level.title}>
              <div className="education-icon">{level.icon}</div>

              <h4>{level.title}</h4>

              <p>{level.description}</p>

              <button>Explore →</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Education
