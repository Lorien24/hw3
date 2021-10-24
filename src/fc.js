import "./App.css";

function Achievements({stars, wins}){
  return(
    <div>
      <p>Stars: {stars}</p>
      <p>Wins: {wins}</p>
    </div>
  )
}
function Player({players}){
  return(
    <div className="players">
      <p>Player 1: {players[0]}</p>
      <p>Player 2: {players[1]}</p>
      <p>Player 3: {players[2]}</p>
      <p>Player 4: {players[3]}</p>
      <p>Player 5: {players[4]}</p>
    </div>
  )
}

function FootballClub({ clubsName, country, logo, goal, stars, wins, players }) {
 
  return (
    <>
      <div>
        <p>Name of Club: {clubsName}</p>
        <p>Country: {country}</p>
        <p className="goals">Goals: {goal}</p>
      </div>
      <img src={logo} />
      <Achievements stars={stars} wins={wins}/>
      <Player players={players}/>
    </>
  );
}

export default FootballClub;