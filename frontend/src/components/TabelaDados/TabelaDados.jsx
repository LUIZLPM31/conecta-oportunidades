export default function TabelaDados({ colunas, dados, acoes }) {
  if (!dados || dados.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <i className="bi bi-inbox fs-1 d-block mb-2"></i>
        Nenhum registro encontrado.
      </div>
    )
  }

  return (
    <div className="table-responsive rounded-3 border border-secondary border-opacity-25 shadow-sm">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            {colunas.map((col) => (
              <th key={col.key} className="fw-bold small text-uppercase py-3">
                {col.label}
              </th>
            ))}
            {acoes && <th className="text-center fw-bold small text-uppercase py-3">Ações</th>}
          </tr>
        </thead>
        <tbody>
          {dados.map((row, i) => (
            <tr key={i}>
              {colunas.map((col) => (
                <td key={col.key} className="py-3">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              {acoes && (
                <td className="text-center py-3">
                  <div className="d-flex gap-2 justify-content-center">
                    {acoes(row)}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
