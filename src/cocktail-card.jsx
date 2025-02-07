import React from "react";

const CocktailCard = () => {
  return (
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
  );
};

export default CocktailCard;
