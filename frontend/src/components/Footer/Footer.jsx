export default function Footer() {
  return (
    <footer className="py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-1 small">
          <span className="fw-bold" style={{ color: 'var(--text-heading)' }}>Conecta Oportunidades</span>
          {' '}— Alinhado às ODS 8 e ODS 10 da ONU
        </p>
        <p className="mb-0 small text-muted">
          Programa Transforma Futuros • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
