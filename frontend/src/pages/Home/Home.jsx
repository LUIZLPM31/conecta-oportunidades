import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero_illustration.png'
import './Home.css'

const ODS = [
  { num: '8',  cor: '#A21942', texto: 'Trabalho Decente e Crescimento Econômico' },
  { num: '10', cor: '#DD1367', texto: 'Redução das Desigualdades' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glass-section">
        <div className="container hero-content">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge glass-badge px-3 py-2 mb-3">
                ✨ Programa Transforma Futuros
              </span>
              <h1 className="display-4 fw-bolder mb-4">
                Conecte-se a <span className="text-gradient">oportunidades reais</span> 🚀
              </h1>
              <p className="lead mb-5" style={{ opacity: 0.85, maxWidth: '600px' }}>
                Uma plataforma que aproxima adultos em busca de emprego a vagas justas
                e cursos de capacitação gratuitos — porque talento não tem CEP.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                <Link to="/vagas" className="btn btn-glow btn-lg px-4 py-3 fw-semibold rounded-pill">
                  <i className="bi bi-briefcase me-2"></i>Ver Vagas
                </Link>
                <Link to="/registro" className="btn btn-glass btn-lg px-4 py-3 rounded-pill">
                  <i className="bi bi-person-plus me-2"></i>Cadastre-se Grátis
                </Link>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img 
                src={heroImage} 
                alt="Ilustração 3D Maleta e Foguete" 
                className="img-fluid hero-illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 bg-white" style={{ marginTop: '-40px', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div className="row g-4 text-center justify-content-center">
            {[
              { icon: 'bi-briefcase-fill', val: 'Vagas', desc: 'Oportunidades de emprego', cor: 'text-primary' },
              { icon: 'bi-mortarboard-fill', val: 'Cursos', desc: 'Capacitações gratuitas', cor: 'text-success' },
              { icon: 'bi-people-fill', val: 'Conexões', desc: 'Candidatos e empresas', cor: 'text-warning' },
            ].map((s) => (
              <div key={s.val} className="col-md-4 col-lg-3">
                <div className="card ods-card p-4 h-100 border-0 shadow-sm rounded-4">
                  <i className={`bi ${s.icon} fs-1 ${s.cor} mb-3`}></i>
                  <h5 className="fw-bold">{s.val}</h5>
                  <p className="text-muted small mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS */}
      <section className="py-5" style={{ background: '#f8fafc' }}>
        <div className="container py-4">
          <h2 className="text-center fw-bolder mb-2">Nosso Impacto Social</h2>
          <p className="text-center text-muted mb-5">Alinhados às Metas Globais da ONU</p>
          <div className="row g-4 justify-content-center">
            {ODS.map((o) => (
              <div key={o.num} className="col-md-5 col-lg-4">
                <div className="card ods-card p-4 text-center h-100 rounded-4 border-0 shadow-sm">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{ width: 80, height: 80, background: o.cor }}
                  >
                    <span className="text-white fw-bold fs-3">{o.num}</span>
                  </div>
                  <h5 className="fw-bold mb-3">ODS {o.num}</h5>
                  <p className="text-muted small mb-0">{o.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: '#0f172a' }}>
        <div className="container py-5 text-center position-relative" style={{ zIndex: 1 }}>
          <h2 className="fw-bolder text-white mb-3">Pronto para dar o próximo passo?</h2>
          <p className="lead text-white-50 mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Seja candidato buscando uma nova oportunidade ou empresa em busca de talentos.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/registro" className="btn btn-glow btn-lg px-5 py-3 fw-semibold rounded-pill">
              Criar conta gratuita
            </Link>
            <Link to="/cursos" className="btn btn-glass btn-lg px-5 py-3 rounded-pill">
              Explorar cursos
            </Link>
          </div>
        </div>
        {/* Glow effect for CTA */}
        <div 
          className="position-absolute top-50 start-50 translate-middle" 
          style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }}>
        </div>
      </section>
    </>
  )
}
