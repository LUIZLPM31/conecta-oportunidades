export default function Badge({ tipo, valor }) {
  const labels = {
    // Modalidade
    PRESENCIAL: '🏢 Presencial',
    REMOTO:     '💻 Remoto',
    HIBRIDO:    '🔀 Híbrido',
    // Status de Vaga
    ATIVA:      '✅ Ativa',
    ENCERRADA:  '🔴 Encerrada',
    // Status de Candidatura
    PENDENTE:   '⏳ Pendente',
    APROVADO:   '✅ Aprovado',
    REJEITADO:  '❌ Rejeitado',
    // Tipos de Usuário
    CANDIDATO:  '👤 Candidato',
    EMPRESA:    '🏢 Empresa',
    ADMIN:      '⚡ Admin',
  }

  // Identifica a classe correta de estilo para garantir contraste perfeito no tema escuro
  const getBadgeClass = () => {
    const val = String(valor || '').toUpperCase()
    if (['CANDIDATO', 'EMPRESA', 'ADMIN'].includes(val)) {
      return `badge-usuario-${val}`
    }
    if (['PENDENTE', 'APROVADO', 'REJEITADO'].includes(val)) {
      return `badge-cand-${val}`
    }
    if (['ATIVA', 'ENCERRADA'].includes(val)) {
      return `badge-status-${val}`
    }
    if (['PRESENCIAL', 'REMOTO', 'HIBRIDO'].includes(val)) {
      return `badge-modalidade-${val}`
    }
    return `badge-${tipo}-${valor}`
  }

  const cls = `badge rounded-pill px-3 py-1 fw-semibold ${getBadgeClass()}`
  return <span className={cls}>{labels[valor] ?? valor}</span>
}
