import { useState } from "react";

export default function PointForm({ onAddPoint }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !address) {
      alert("Preencha todos os campos.");
      return;
    }

    onAddPoint({ name, address });

    setName("");
    setAddress("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Cadastrar Ponto de Entrega</h3>

      <input
        type="text"
        placeholder="Nome do ponto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Endereço completo"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button type="submit">Adicionar Ponto</button>
    </form>
  );
}