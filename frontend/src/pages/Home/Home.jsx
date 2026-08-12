import { Link } from 'react-router-dom'

const ODS = [
  { num: '8',  cor: '#A21942', texto: 'Trabalho Decente e Crescimento Econômico' },
  { num: '10', cor: '#DD1367', texto: 'Redução das Desigualdades' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="badge bg-primary bg-opacity-25 text-primary mb-3 px-3 py-2">
                Programa Transforma Futuros
              </span>
              <h1 className="mb-4">
                Conecte-se a oportunidades reais 🚀
              </h1>
              <p className="lead mb-4" style={{ opacity: 0.85 }}>
                Uma plataforma que aproxima adultos em busca de emprego a vagas justas
                e cursos de capacitação gratuitos — porque talento não tem CEP.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/vagas" className="btn btn-light btn-lg fw-semibold">
                  <i className="bi bi-briefcase me-2"></i>Ver Vagas
                </Link>
                <Link to="/registro" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-person-plus me-2"></i>Cadastre-se Grátis
                </Link>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <div className="display-1">💼</div>
              <p className="mt-3 opacity-75">Conectando talentos ao mercado de trabalho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { icon: 'bi-briefcase-fill', val: 'Vagas', desc: 'Oportunidades de emprego', cor: 'text-primary' },
              { icon: 'bi-mortarboard-fill', val: 'Cursos', desc: 'Capacitações gratuitas', cor: 'text-success' },
              { icon: 'bi-people-fill', val: 'Conexões', desc: 'Candidatos e empresas', cor: 'text-warning' },
            ].map((s) => (
              <div key={s.val} className="col-md-4">
                <div className="card p-4">
                  <i className={`bi ${s.icon} fs-1 ${s.cor} mb-2`}></i>
                  <h5 className="fw-bold">{s.val}</h5>
                  <p className="text-muted small mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS */}
      <section className="py-5" style={{ background: '#f1f5f9' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-2">Nosso Impacto Social</h2>
          <p className="text-center text-muted mb-5">Alinhados às Metas Globais da ONU</p>
          <div className="row g-4 justify-content-center">
            {ODS.map((o) => (
              <div key={o.num} className="col-md-5">
                <div className="card p-4 text-center h-100">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: 72, height: 72, background: o.cor }}
                  >
                    <span className="text-white fw-bold fs-4">{o.num}</span>
                  </div>
                  <h6 className="fw-bold">ODS {o.num}</h6>
                  <p className="text-muted small mb-0">{o.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Comece agora</h2>
          <p className="lead mb-4 opacity-75">
            Seja candidato buscando uma nova oportunidade ou empresa em busca de talentos.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/registro" className="btn btn-light btn-lg fw-semibold">
              Criar conta
            </Link>
            <Link to="/cursos" className="btn btn-outline-light btn-lg">
              Explorar cursos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
