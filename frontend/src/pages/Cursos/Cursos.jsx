import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GraduationCap, Sparkles } from 'lucide-react'
import CardCurso from '../../components/CardCurso/CardCurso'
import { capacitacaoService } from '../../services/services'

export default function Cursos() {
  const [cursos, setCursos]   = useState([])
  const [busca, setBusca]     = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    capacitacaoService.listar()
      .then(({ data }) => setCursos(data))
      .catch(() => toast.error('Erro ao carregar capacitações.'))
      .finally(() => setLoading(false))
  }, [])

  const filtrados = cursos.filter((c) =>
    c.tituloCurso.toLowerCase().includes(busca.toLowerCase()) ||
    (c.instituicaoParceira || '').toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3 page-header-animate">
        <div className="d-flex align-items-center gap-3">
          <div className="page-header-icon-box d-flex align-items-center justify-content-center rounded-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 p-3">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div>
            <div className="d-inline-flex align-items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 fw-semibold mb-1" style={{ fontSize: '0.75rem' }}>
              <Sparkles className="w-3.5 h-3.5" />
              Qualificação gratuita
            </div>
            <h1 className="fw-extrabold mb-1 tracking-tight" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)' }}>
              Capacitações <span className="page-title-highlight">Profissionais</span>
            </h1>
            <p className="mb-2 contrast-text opacity-90">
              Cursos gratuitos para impulsionar sua carreira
            </p>
            <div className="page-header-accent-bar"></div>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar curso ou instituição..."
          style={{ maxWidth: 280 }}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary"></div>
        </div>
      ) : (
        <div className="row g-4">
          {filtrados.map((curso) => (
            <div key={curso.id} className="col-md-6 col-lg-4">
              <CardCurso curso={curso} />
            </div>
          ))}
          {filtrados.length === 0 && (
            <div className="col-12 text-center py-5 text-muted">
              <i className="bi bi-mortarboard fs-1 d-block mb-2"></i>
              Nenhum curso encontrado.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
