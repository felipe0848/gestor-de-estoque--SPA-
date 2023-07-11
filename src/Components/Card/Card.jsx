export default function Card({ label, qtd }) {
  return (
    <div className="card">
      <p>{label}</p>
      <p className="result">{qtd}</p>
    </div>
  );
}
