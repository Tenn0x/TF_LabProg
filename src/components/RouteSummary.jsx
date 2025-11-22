export default function RouteSummary({ summary }) {
  if (!summary) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Resumo da Rota</h3>
      <p><b>Distância Total:</b> {summary.distance} km</p>
      <p><b>Tempo Estimado:</b> {summary.time} min</p>
      <p><b>Pegada de Carbono:</b> {summary.carbon} kg CO₂</p>
    </div>
  );
}
