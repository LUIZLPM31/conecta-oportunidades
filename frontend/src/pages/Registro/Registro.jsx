import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { authService } from '../../services/services'

export default function Registro() {
  const [form, setForm] = useState({
    nome: '', email: '', senha: '', tipoUsuario: 'CANDIDATO', telefone: '', cidade: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await authService.registro(form)
      toast.success('Conta criada com sucesso! Faça login.')
      navigate('/login')
    } catch (err) {
      const erros = err.response?.data?.erros
      if (erros) {
        Object.values(erros).forEach((msg) => toast.error(msg))
      } else {
        toast.error(err.response?.data?.erro || 'Erro ao criar conta.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-vh-100 d-flex align-items-center py-5" style={{ background: '#f1f5f9' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <div className="text-center mb-4">
                <span className="fs-1">👤</span>
                <h2 className="fw-bold mt-2">Criar conta</h2>
                <p className="text-muted">Junte-se à plataforma</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fw-semibold">Nome completo</label>
                    <input
                      type="text" id="reg-nome" name="nome"
                      className="form-control" placeholder="Seu nome"
                      value={form.nome} onChange={handleChange} required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">E-mail</label>
                    <input
                      type="email" id="reg-email" name="email"
                      className="form-control" placeholder="seu@email.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Senha</label>
                    <input
                      type="password" id="reg-senha" name="senha"
                      className="form-control" placeholder="Mínimo 6 caracteres"
                      value={form.senha} onChange={handleChange} required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Tipo de conta</label>
                    <select
                      id="reg-tipo" name="tipoUsuario"
                      className="form-select"
                      value={form.tipoUsuario} onChange={handleChange}
                    >
                      <option value="CANDIDATO">👤 Candidato (busco emprego)</option>
                      <option value="EMPRESA">🏢 Empresa (contrato talentos)</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Telefone</label>
                    <input
                      type="tel" id="reg-telefone" name="telefone"
                      className="form-control" placeholder="(11) 99999-0000"
                      value={form.telefone} onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Cidade</label>
                    <input
                      type="text" id="reg-cidade" name="cidade"
                      className="form-control" placeholder="São Paulo"
                      value={form.cidade} onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mt-2">
                    <button
                      type="submit" id="btn-registro"
                      className="btn btn-primary w-100 fw-semibold"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="spinner-border spinner-border-sm me-2"></span>
                      ) : (
                        <i className="bi bi-person-check me-2"></i>
                      )}
                      Criar conta
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-center mt-3 mb-0 small">
                Já tem conta?{' '}
                <Link to="/login" className="text-primary fw-semibold">Entrar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
