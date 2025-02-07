import React, { useState, useEffect } from "react";

const generateRandomBackground = () => {
  const colors = [
    "#6360e2",
    "#54fffd",
    "#2CCFDA",
    "#95AD61",
    "#7B7168",
    "#B4DBFF",
  ];
  const randomIndex1 = Math.floor(Math.random() * colors.length);
  const randomIndex2 = Math.floor(Math.random() * colors.length);
  return `linear-gradient(122deg, ${colors[randomIndex1]} 0%, ${colors[randomIndex2]} 100%)`;
};

const CocktailFunction = () => {
  const [cocktail, setCocktail] = useState([]);
  async function fetchCocktails() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    try {
      const cocktailItems = Array.from({ length: 6 }); // Placeholder for six cocktails
      const fetchedCocktails = [];
      for (const item of cocktailItems) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const newCocktail = {
          name: json.drinks[0].strDrink,
          image: json.drinks[0].strDrinkThumb,
          background: generateRandomBackground(), // Example background
          textContent: "Cocktail",
        };
        fetchedCocktails.push(newCocktail);
      }
      setCocktail(fetchedCocktails);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    async function fetchCocktails() {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      try {
        const cocktailItems = Array.from({ length: 6 }); // Placeholder for six cocktails
        const fetchedCocktails = [];
        for (const item of cocktailItems) {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json = await response.json();
          const newCocktail = {
            name: json.drinks[0].strDrink,
            image: json.drinks[0].strDrinkThumb,
            background: generateRandomBackground(), // Example background
            textContent: "Cocktail",
          };
          fetchedCocktails.push(newCocktail);
        }
        setCocktail(fetchedCocktails);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchCocktails();
  }, []);

  return (
    <>
      <ul className="third-list">
        {cocktail.map((cocktails) => (
          <li key={Math.random()}>
            <div className="card" style={{ background: cocktails.background }}>
              <div className="play">
                <div className="main">{cocktails.textContent}</div>
                <div className="name">{cocktails.name}</div>
              </div>
              <div className="photo">
                <img src={cocktails.image} alt={cocktails.name} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="reloadButton" onClick={fetchCocktails}>
        lass dich überraschen
      </button>
    </>
  );
};
export default CocktailFunction;
