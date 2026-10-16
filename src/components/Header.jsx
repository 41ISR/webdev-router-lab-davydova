import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/search?q=" + encodeURIComponent(e.target.query.value.trim()))


  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="main-nav">
          <NavLink className="nav-link" to="/">Главная</NavLink>
          <NavLink className="nav-link" to="movie">Фильмы</NavLink>
          <NavLink className="nav-link" to="about">О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value="query"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}



