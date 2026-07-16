import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import Homepage from './pages/Homepage'
import Articles from './pages/Articles.tsx'
import ArticleDetail from './pages/ArticleDetail'
import './App.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="theme-toggle-container">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'default' ? 'pink' : 'default'} theme`}
      >
        {theme === 'default' ? '🌸 Pink Mode' : '🌙 Default Mode'}
      </button>
    </div>
  )
}

function AppContent() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Anna
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/articles" className="nav-link">
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ThemeToggle />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          <a
            href="https://www.flaticon.com/free-icons/flower"
            title="flower icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flower icons created by GOWI - Flaticon
          </a>
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  )
}

export default App

