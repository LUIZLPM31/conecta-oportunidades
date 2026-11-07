import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Briefcase, Sparkles } from 'lucide-react'
import CardVaga from '../../components/CardVaga/CardVaga'
import { vagaService, candidaturaService } from '../../services/services'
import { useAuth } from '../../context/AuthContext'

export default function Vagas() {
  const [vagas, setVagas]     = useState([])
  const [filtro, setFiltro]   = useState({ modalidade: '', busca: '' })
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    vagaService.listarAtivas()
      .then(({ data }) => setVagas(data))
      .catch(() => toast.error('Erro ao carregar vagas.'))
      .finally(() => setLoading(false))
  }, [])

  const handleCandidatar = async (vagaId) => {
    if (!user) return toast.warn('Faça login para se candidatar.')
    if (user.tipoUsuario !== 'CANDIDATO') return toast.warn('Apenas candidatos podem se candidatar.')
    try {
      await candidaturaService.candidatar(vagaId)
      toast.success('Candidatura enviada com sucesso! 🎉')
    } catch (err) {
      toast.error(err.response?.data?.erro || 'Erro ao enviar candidatura.')
    }
  }

  const vagasFiltradas = vagas.filter((v) => {
    const matchModal = !filtro.modalidade || v.modalidade === filtro.modalidade
    const matchBusca = !filtro.busca ||
      v.tituloVaga.toLowerCase().includes(filtro.busca.toLowerCase()) ||
      v.nomeEmpresa.toLowerCase().includes(filtro.busca.toLowerCase())
    return matchModal && matchBusca
  })

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3 page-header-animate">
        <div className="d-flex align-items-center gap-3">
          <div className="page-header-icon-box d-flex align-items-center justify-content-center rounded-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 p-3">
            <Briefcase className="w-8 h-8" />
          </div>
          <div>
            <div className="d-inline-flex align-items-center gap-1.5 px-2.5 py-0.5 rounded-pill bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 fw-semibold mb-1" style={{ fontSize: '0.75rem' }}>
              <Sparkles className="w-3.5 h-3.5" />
              Mercado de trabalho
            </div>
            <h1 className="fw-extrabold mb-1 tracking-tight" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)' }}>
              Vagas <span className="page-title-highlight">Disponíveis</span>
            </h1>
            <p className="mb-2 contrast-text opacity-90">
              {vagasFiltradas.length} oportunidade(s) encontrada(s) para o seu perfil
            </p>
            <div className="page-header-accent-bar"></div>
          </div>
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar vaga ou empresa..."
            style={{ minWidth: 220 }}
            value={filtro.busca}
            onChange={(e) => setFiltro({ ...filtro, busca: e.target.value })}
          />
          <select
            className="form-select"
            style={{ minWidth: 140 }}
            value={filtro.modalidade}
            onChange={(e) => setFiltro({ ...filtro, modalidade: e.target.value })}
          >
            <option value="">Todas</option>
            <option value="PRESENCIAL">Presencial</option>
            <option value="REMOTO">Remoto</option>
            <option value="HIBRIDO">Híbrido</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary"></div>
        </div>
      ) : (
        <div className="row g-4">
          {vagasFiltradas.map((vaga) => (
            <div key={vaga.id} className="col-md-6 col-lg-4">
              <CardVaga
                vaga={vaga}
                onCandidatar={handleCandidatar}
                mostrarBotao={!!user && user.tipoUsuario === 'CANDIDATO'}
              />
            </div>
          ))}
          {vagasFiltradas.length === 0 && (
            <div className="col-12 text-center py-5 text-muted">
              <i className="bi bi-search fs-1 d-block mb-2"></i>
              Nenhuma vaga encontrada para os filtros selecionados.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
