import "./StatComp.scss";

export function StatComp({ icon, mesure, unite }) {
  return (
    <div className="statCompDiv">
      <img className="img" src={icon} alt="caloriIcon" />
      <div className="text">
        <div className="mesures">{mesure}</div>
        <div className="unites">{unite}</div>
      </div>
    </div>
  );
}
