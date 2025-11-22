import { useState } from "react";
import PointForm from "./components/PointForm";
import RouteMap from "./components/RouteMap";
import RouteSummary from "./components/RouteSummary";
import History from "./components/History";
import api from "./services/api";

export default function App() {
  const [points, setPoints] = useState([]);
  const [optimizedRoute, setOptimizedRoute] = useState(null);
  const [summary, setSummary] = useState(null);
  const [history, setHistory] = useState([]);

  function handleAddPoint(point) {
    setPoints([...points, point]);
  }

  async function handleCalculateRoute() {
    if (points.length < 2) {
      alert("Cadastre pelo menos dois pontos!");
      return;
    }

    try {
      const response = await api.post("/calcular_rota", { points });
      const data = response.data;

      setOptimizedRoute(data.route);
      setSummary(data.summary);

      const newHistory = {
        date: new Date().toLocaleString(),
        route: data.route,
        summary: data.summary,
      };

      setHistory([...history, newHistory]);
    } catch (error) {
      console.error(error);
      alert("Erro ao calcular a rota.");
    }
  }

  function handleSelectHistory(entry) {
    setOptimizedRoute(entry.route);
    setSummary(entry.summary);
  }

  return (
    <div className="app-container">
      <h1>Sistema de Otimização de Rotas</h1>

      <PointForm onAddPoint={handleAddPoint} />

      <button onClick={handleCalculateRoute}>
        Calcular Rota Otimizada
      </button>

      {/* Lista de pontos cadastrados */}
      <h3 style={{ marginTop: "25px" }}>Pontos cadastrados:</h3>

      {points.length === 0 && <p>Nenhum ponto cadastrado.</p>}

      <ul>
        {points.map((p, index) => (
          <li key={index}>
            {index + 1}. <b>{p.name}</b> — {p.address}
          </li>
        ))}
      </ul>

      {optimizedRoute && (
        <>
          <RouteMap points={optimizedRoute} />
          <RouteSummary summary={summary} />
        </>
      )}

      <History history={history} onSelect={handleSelectHistory} />
    </div>
  );
}
