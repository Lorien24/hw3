import "./App.css";
import FootballClub from "./fc.js";
import logo from "./fc.png";
import MagicBall from "./magicBall.js";

function App() {
  return (
    <>
      <FootballClub
        clubsName="Manchester United F.C."
        country="England"
        logo={logo}
        goal={
          "Intercontinental Cup(1): 1999, FIFA Club World Cup(1): 2008, EFL Cup and UEFA Europa League (1): 2016–17"
        }
        stars="82"
        wins="746"
        players={[
          "Cristiano Ronaldo",
          "Mason Greenwood",
          "Hannibal Mejbri",
          "David de Gea",
          "Marcus Rashford",
        ]}
      />

      <MagicBall />
    </>
  );
}

export default App;
