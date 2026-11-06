import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { Link as LinkIcon, Briefcase, GraduationCap, LogIn, UserPlus, Menu, X, LayoutDashboard, LogOut, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <nav className="sticky top-0 z-50 w-full navbar-theme backdrop-blur-md shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group text-decoration-none">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110">
              <LinkIcon className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight" style={{ color: 'var(--text-title)' }}>
              Conecta<span className="text-emerald-600 dark:text-emerald-400">Oportunidades</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              to="/vagas" 
              className="flex items-center gap-2 font-medium hover:text-emerald-600 transition-colors text-decoration-none"
              style={{ color: 'var(--text-body)' }}
            >
              <Briefcase className="w-5 h-5 text-emerald-500" />
              Vagas
            </Link>
            <Link 
              to="/cursos" 
              className="flex items-center gap-2 font-medium hover:text-emerald-600 transition-colors text-decoration-none"
              style={{ color: 'var(--text-body)' }}
            >
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              Capacitações
            </Link>
          </div>

          {/* Desktop Auth & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Botão de Alternar Tema */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-center"
              style={{ 
                backgroundColor: 'var(--bg-card)', 
                borderColor: 'var(--border-color)',
                color: 'var(--text-title)'
              }}
              title={theme === 'dark' ? 'Mudar para tema Claro' : 'Mudar para tema Escuro'}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {user ? (
              <>
                <Link 
                  to={getDashboardPath()} 
                  className="flex items-center gap-2 text-emerald-600 font-semibold px-4 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors text-decoration-none"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  {user.nome.split(' ')[0]}
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-2 text-rose-600 font-medium px-4 py-2 rounded-lg border border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 font-semibold px-4 py-2 hover:text-emerald-600 transition-colors text-decoration-none"
                  style={{ color: 'var(--text-body)' }}
                >
                  <LogIn className="w-5 h-5" />
                  Entrar
                </Link>
                <Link 
                  to="/registro" 
                  className="flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all text-decoration-none"
                >
                  <UserPlus className="w-5 h-5" />
                  Cadastrar
                </Link>
              </>
            )}
          </div>

          {/* Mobile Right Controls (Theme + Hamburger) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border transition-colors cursor-pointer"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              title="Alternar tema"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors cursor-pointer"
              style={{ color: 'var(--text-title)' }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden border-t px-6 py-4 space-y-4 shadow-lg absolute w-full transition-colors"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <Link 
            to="/vagas" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="flex items-center gap-3 font-medium p-3 rounded-lg text-decoration-none"
            style={{ color: 'var(--text-body)' }}
          >
            <Briefcase className="w-5 h-5 text-emerald-600" />
            Vagas
          </Link>
          <Link 
            to="/cursos" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="flex items-center gap-3 font-medium p-3 rounded-lg text-decoration-none"
            style={{ color: 'var(--text-body)' }}
          >
            <GraduationCap className="w-5 h-5 text-emerald-600" />
            Capacitações
          </Link>
          
          <div className="border-t pt-4 mt-2" style={{ borderColor: 'var(--border-color)' }}>
            {user ? (
              <div className="space-y-3">
                <Link 
                  to={getDashboardPath()} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="flex items-center gap-3 text-emerald-600 font-semibold p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-decoration-none"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  Painel de {user.nome.split(' ')[0]}
                </Link>
                <button 
                  onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} 
                  className="w-full flex items-center gap-3 text-rose-600 font-medium p-3 rounded-lg border border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 cursor-pointer"
                >
                  <LogOut className="w-5 h-5" />
                  Sair da conta
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="flex items-center justify-center gap-2 font-semibold p-3 rounded-xl border text-decoration-none"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-title)' }}
                >
                  <LogIn className="w-5 h-5" />
                  Entrar
                </Link>
                <Link 
                  to="/registro" 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold p-3 rounded-xl shadow-md text-decoration-none"
                >
                  <UserPlus className="w-5 h-5" />
                  Cadastrar Grátis
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
