import "./App.css";
import { useEffect, useState } from "react";

import Admin from "./pages/Admin";
import ApiTest from "./pages/ApiTest";
import Ask from "./pages/Ask";
import ChapterTest from "./pages/ChapterTest";
import Education from "./pages/Education";
import GovernmentExams from "./pages/GovernmentExams";
import Mathematics from "./pages/Mathematics";
import MockTests from "./pages/MockTests";
import NumberSystems from "./pages/NumberSystems";
import Progress from "./pages/Progress";
import RealNumbers from "./pages/RealNumbers";
import Search from "./pages/Search";
import TopicPage from "./pages/TopicPage";

const API_URL = "http://localhost:5000";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand">
          <div className="brand-logo">A</div>
          <div>
            <div className="brand-name">AGS Knowledge Hub</div>
            <div className="brand-tagline">Learn • Search • Ask • Grow</div>
          </div>
        </a>

        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/education">Education</a>
          <a href="/exams">Exams</a>
          <a href="/tests">Tests</a>
          <a href="/search">Search</a>
          <a href="/ask">Ask AGS</a>
          <a href="/progress">Progress</a>
          <a href="/admin">Admin</a>
        </nav>

        <button className="sign-in-button" type="button">
          Sign In
        </button>
      </div>
    </header>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">AGS KNOWLEDGE ENGINE</p>
        <h1>Learn smarter.<br />Grow stronger.</h1>
        <p className="hero-description">
          One place to learn, search, practice and understand knowledge that matters.
        </p>
        <div className="hero-actions">
          <a href="/search" className="primary-button">🔎 Search Knowledge</a>
          <a href="/ask" className="secondary-button">🤖 Ask AGS</a>
          <a href="/progress" className="secondary-button">📊 My Progress</a>
        </div>
      </section>

      <section className="explore-section">
        <p className="eyebrow">EXPLORE</p>
        <h2>Knowledge for everyone</h2>
        <div className="explore-grid">
          <a href="/education" className="explore-card"><div className="explore-icon">📚</div><h3>Education</h3><p>Explore education knowledge.</p></a>
          <a href="/exams" className="explore-card"><div className="explore-icon">🎓</div><h3>Government Exams</h3><p>Prepare with structured exam knowledge.</p></a>
          <a href="/tests" className="explore-card"><div className="explore-icon">📝</div><h3>Tests</h3><p>Practice and test your understanding.</p></a>
          <a href="/search" className="explore-card"><div className="explore-icon">🔎</div><h3>Search</h3><p>Find knowledge quickly.</p></a>
        </div>
      </section>
    </main>
  );
}

function TopicRoute() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadTopic() {
      try {
        const slug = window.location.pathname.split("/").filter(Boolean).pop() || "";
        const response = await fetch(`${API_URL}/api/admin/content`);
        if (!response.ok) throw new Error("Unable to load knowledge.");

        const data = await response.json();
        const items = Array.isArray(data.content) ? data.content : [];
        const normalizedSlug = decodeURIComponent(slug).toLowerCase().replace(/-/g, " ").trim();

        const found = items.find((item) => {
          const id = String(item.id || "").toLowerCase().trim();
          const title = String(item.title || "").toLowerCase().trim();
          return id === slug.toLowerCase() || title === normalizedSlug;
        });

        if (!found) {
          setContent(null);
          return;
        }

        const c = found.content || {};
        setContent({
          id: found.id,
          title: found.title,
          level: found.classification?.level || "10th Standard",
          subject: found.classification?.subject || "Mathematics",
          overview: c.description || c.overview || `Learn about ${found.title}.`,
          learningGoals: c.learningGoals || [],
          prerequisites: c.prerequisites || [],
          topics: c.topics || [],
          revision: c.revision || [],
          examTips: c.examTips || [],
          commonMistakes: c.commonMistakes || [],
          test: c.test || [],
          sources: c.sources || [],
        });
      } catch (err) {
        console.error(err);
        setError("Unable to connect to AGS Knowledge Engine.");
      } finally {
        setLoading(false);
      }
    }
    loadTopic();
  }, []);

  if (loading) return <main className="page"><section className="page-hero"><p className="eyebrow">AGS KNOWLEDGE ENGINE</p><h2>Loading knowledge...</h2></section></main>;
  if (error) return <main className="page"><section className="page-hero"><h2>Unable to load knowledge</h2><p>{error}</p><a href="/search" className="primary-action">← Back to Search</a></section></main>;

  return <TopicPage content={content} />;
}

function NotFound() {
  return <main className="not-found"><p className="eyebrow">AGS KNOWLEDGE HUB</p><h1>Page not found</h1><p>The page you're looking for doesn't exist.</p><a href="/" className="primary-button">Go Home</a></main>;
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  let page;

  if (path.startsWith("/topic/")) page = <TopicRoute />;
  else {
    switch (path) {
      case "/": page = <Home />; break;
      case "/education": page = <Education />; break;
      case "/exams":
      case "/government-exams": page = <GovernmentExams />; break;
      case "/tests": page = <MockTests />; break;
      case "/search": page = <Search />; break;
      case "/ask": page = <Ask />; break;
      case "/progress": page = <Progress />; break;
      case "/admin": page = <Admin />; break;
      case "/mathematics": page = <Mathematics />; break;
      case "/number-systems": page = <NumberSystems />; break;
      case "/real-numbers": page = <RealNumbers />; break;
      case "/chapter-test": page = <ChapterTest />; break;
      case "/api-test": page = <ApiTest />; break;
      case "/topic": page = <TopicPage />; break;
      default: page = <NotFound />; break;
    }
  }

  return <><Header />{page}</>;
}

export default App;
