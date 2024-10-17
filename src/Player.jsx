import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);
  const add = () => {
    // const newTeam = team + 1;
    setTeam(team + 1);
  };

  const remove = () => {
    setTeam(team - 1);
  };

  const teamStyle = {
    border: "2px solid blue",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={teamStyle}>
      <h2>Player: {team}</h2>

      <button onClick={add}>Add +</button>

      <button onClick={remove}>Remove -</button>
    </div>
  );
}
