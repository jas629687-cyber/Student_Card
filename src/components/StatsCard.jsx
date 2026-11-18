
function StatsCard({ title, value, icon: Icon, color, description }) {
  return (
    <div className="stats-card">
      <div className={`stats-icon ${color}`}>
        <Icon size={25} />
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default StatsCard;
