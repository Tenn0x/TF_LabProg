export default function History({ history, onSelect }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Histórico de Rotas</h3>

      {history.length === 0 && <p>Nenhuma rota salva.</p>}

      <ul>
        {history.map((route, index) => (
          <li key={index}>
            <button onClick={() => onSelect(route)}>
              Rota #{index + 1} — {route.date}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
