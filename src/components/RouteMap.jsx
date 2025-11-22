import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";

export default function RouteMap({ points }) {
  if (!points || points.length === 0) {
    return <p>Nenhuma rota calculada.</p>;
  }

  const center = [points[0].lat, points[0].lng];
  const polyline = points.map((p) => [p.lat, p.lng]);

  return (
    <div style={{ height: "350px", marginTop: "20px" }}>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />

        <Polyline positions={polyline} />

        {points.map((p, index) => (
          <Marker key={index} position={[p.lat, p.lng]}>
            <Popup>
              <b>{index + 1}. {p.name}</b>
              <br />
              {p.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
