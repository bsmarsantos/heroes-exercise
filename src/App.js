import React, { useState, useEffect } from "react";

const data = () => {
  return {
    title: "Super Heroes Almanac",
    subtitle: "The ultimate guide",
    heroes: [
      {
        avatar: "https://i.ibb.co/xjLzhxr/ex1-Artboard-1.jpg",
        heroName: "Captain America",
        secretIdentity: "Steve Rogers",
        description:
          "America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.",
      },
      {
        avatar: "https://i.ibb.co/M93zQ17/ex1-Artboard-3.jpg",
        heroName: "Iron Man",
        secretIdentity: "Tony Stark",
        description:
          "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
      },
      {
        avatar: "https://i.ibb.co/D1v60km/ex1-Artboard-2.jpg",
        heroName: "Thor",
        secretIdentity: "Hot guy",
        description:
          "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
      },
    ],
  };
};

const App = () => {
  const [heroesAlmanac, setHeroesAlmanac] = useState(null);

  useEffect(() => {
    const response = data();

    setHeroesAlmanac(response);
  }, []);

  if (heroesAlmanac === null) {
    return <p>Loading...</p>;
  }

  return (
    <div id="app" className="heroes-almanac-container">
      {/* <!--1. write title and subtitle receiving the info from HeroesAlmanac --> */}
      <h1>{heroesAlmanac.title}</h1>
      <h2>{heroesAlmanac.subtitle}</h2>

      {/* <!--2. create a section to display the heroes' array from  HeroesAlmanac.heroes --> */}
      <div className="cards">
        {heroesAlmanac.heroes.map((hero, i) => (
          <div className="card">
            <img src={hero.avatar} alt="hero photography" />
            <h3>{hero.heroName}</h3>
            <h4>{hero.secretIdentity}</h4>
            <p>{hero.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
