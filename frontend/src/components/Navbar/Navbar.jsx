import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const getDashboardPath = () => {
    if (!user) return '/login'
    if (user.tipoUsuario === 'ADMIN')    return '/admin'
    if (user.tipoUsuario === 'EMPRESA')  return '/empresa'
    return '/candidato'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-link-45deg me-1"></i>
          Conecta Oportunidades
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/vagas">
                <i className="bi bi-briefcase me-1"></i>Vagas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                <i className="bi bi-mortarboard me-1"></i>Capacitações
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold text-primary" to={getDashboardPath()}>
                    <i className="bi bi-speedometer2 me-1"></i>
                    {user.nome.split(' ')[0]}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-1"></i>Sair
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Entrar</Link>
                </li>
                <li className="nav-item ms-2">
                  <Link className="btn btn-primary btn-sm" to="/registro">Cadastrar</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
