import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TableFunction from "./table-function";
// import { DndContext } from "@dnd-kit/core";

// import { Droppable } from "./Droppable";
// import { Draggable } from "./Draggable";

function App() {
  const dishesItems = [
    {
      name: "Kashke Bademjon",
      image: "/Kashke-Bademjan.png",
      textContent: "Hauptgericht",
      background: "linear-gradient(122deg, #6360e2 0%, #54fffd 100%)",
    },
    {
      name: "Qeyme",
      image: "/Geyme.png",
      textContent: "Hauptgericht",
      background: "linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%)",
    },
    {
      name: "Pizza",
      image: "/Pizza.png",
      textContent: "Hauptgericht",
      background: "linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%)",
    },
    {
      name: "Shiryach",
      image: "Shirjach 1.png",
      textContent: "Snaks",
      background: "linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%)",
    },
    {
      name: "Pasta",
      image: "Pasta 1.png",
      textContent: "Hauptgericht",
      background: "linear-gradient(302deg, #2CCFDA 0%, #95AD61 100%)",
    },
    {
      name: "Abghost",
      image: "abgoosht 1.png",
      textContent: "Hauptgericht",
      background: "linear-gradient(122deg, #FF007D 0%, #FFA800 100%)",
    },
  ];

  const dishesNumber = [
    {
      name: "Qorme sabsi",
      image: "ghormeh-sabzi 1.png",
      textContent: "Hauptgericht",
      background:
        "var(--Brown, linear-gradient(122deg, #797979 0%, #E3A973 100%))",
    },
    {
      name: "Qaboli",
      image: "Kabuli-Pulao 1.png",
      textContent: "Hauptgericht",
      background:
        "var(--Violet, linear-gradient(122deg, #EF32D9 0%, #89FFFD 100%))",
    },
    {
      name: "Manto",
      image: "Manto 1.png",
      textContent: "Hauptgericht",
      background: "linear-gradient(122deg, #FF6B95 0%, #FFC796 100%)",
    },
    {
      name: "Ashak",
      image: "Ashak 1.png",
      textContent: "Hauptgericht",
      background: "var(--Colors-Green, #34C759)",
    },
    {
      name: "Zereshk polo",
      image: "Zereshk polo 1.png",
      textContent: "Hauptgericht",
      background:
        "var(--Blau, linear-gradient(122deg, #6360E2 0%, #54FFFD 100%))",
    },
    {
      name: "Bolani",
      image: "Bolani 1.png",
      textContent: "Hauptgericht",
      background:
        "var(--Black, linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%))",
    },
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const meals = ["Breakfast", "Lunch", "Snaks", "Dinner"];

  const [cocktail, setCocktail] = useState([]);
  const [value, setValue] = useState("");
  const [columns, setColumns] = useState([
    { key: "first-list", items: dishesItems },
    { key: "second-list", items: dishesNumber },
    // { key: "third-list", items: dishesItems },
  ]);
  function handleClick() {
    const newItem = {
      name: value,
      background: generateRandomBackground(),
      textContent: "Hauptgericht",
      image: "Bolani 1.png",
    };

    setColumns(
      columns.map((list) => {
        if (list.key === "first-list") {
          return {
            key: list.key,
            items: [...list.items, newItem],
          };
        } else {
          return list;
        }
      })
    );
  }
  // function appendItemToThirdList({ name, image, textContent, background }) {
  //   const newItem = {
  //     name: name,
  //     background: background,
  //     textContent: textContent,
  //     image: image,
  //   };

  //   setColumns(
  //     columns.map((list) => {
  //       if (list.key === "third-list") {
  //         return {
  //           key: list.key,
  //           items: [newItem],
  //         };
  //       } else {
  //         return list;
  //       }
  //     })
  //   );
  // }

  // // console.log(columns);

  // async function getData() {
  //   const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }

  //     const cocktail = await response.json();

  //     appendItemToThirdList({
  //       name: cocktail.drinks[0].strDrink,
  //       image: cocktail.drinks[0].strDrinkThumb,
  //       background: dishesNumber[2].background,
  //       textContent: "Cocktail",
  //     });
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  const generateRandomBackground = () => {
    const colors = [
      "#6360e2",
      "#54fffd",
      "#2CCFDA",
      "#95AD61",
      "#7B7168",
      "#B4DBFF",
      "#FF007D",
      "#34C759",
      "#EF32D9",
      "#E3A973",
      "#FFC796",
    ];
    const randomIndex1 = Math.floor(Math.random() * colors.length);
    const randomIndex2 = Math.floor(Math.random() * colors.length);
    return `linear-gradient(122deg, ${colors[randomIndex1]} 0%, ${colors[randomIndex2]} 100%)`;
  };

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

  return (
    <div className="container">
      <section className="left-side">
        <div className="scrollable">
          <div className="list">
            {columns.map((list) => (
              <ul key={list.key} className={list.key}>
                {list.items.map((item) => (
                  <li key={item.name}>
                    <div
                      className="card"
                      style={{ background: generateRandomBackground() }}
                    >
                      <div className="play">
                        <div className="main">{item.textContent}</div>
                        <div className="name">{item.name}</div>
                      </div>
                      <div className="photo">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
            <ul className="third-list">
              {cocktail.map((cocktails) => (
                <li key={Math.random()}>
                  <div
                    className="card"
                    style={{ background: cocktails.background }}
                  >
                    <div className="play">
                      <div className="main">{cocktails.textContent}</div>
                      <div className="name">{cocktails.name}</div>
                    </div>
                    <div className="photo">
                      <img src={cocktails.image} alt={cocktails.name} />
                    </div>
                    {/* <h3>{cocktails.name}</h3>
                    <img src={cocktails.image} alt={cocktails.name} />
                    <p>{cocktails.textContent}</p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="input">
          <div id="new-element"></div>
          <input
            type="text"
            id="input"
            placeholder="Your text here"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button id="button" onClick={handleClick}>
            Click here
          </button>
          <button className="reloadButton" onClick={fetchCocktails}>
            lass dich überraschen
          </button>
        </div>
      </section>
      <div className="table">
        <TableFunction days={days} meals={meals} />
      </div>
    </div>
  );
}

export default App;
