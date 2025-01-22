import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TableFunction from "./table-function";

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

  const [cocktail, setCocktail] = useState();
  const [value, setValue] = useState("");
  const [columns, setColumns] = useState([
    { key: "first-list", items: dishesItems },
    { key: "second-list", items: dishesNumber },
    { key: "third-list", items: dishesItems },
  ]);
  function appendItemToThirdList({ name, image, textContent, background }) {
    const newItem = {
      name: name,
      background: background,
      textContent: textContent,
      image: image,
    };

    setColumns(
      columns.map((list) => {
        if (list.key === "third-list") {
          return {
            key: list.key,
            items: [newItem],
          };
        } else {
          return list;
        }
      })
    );
  }

  // console.log(columns);

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

  async function getData() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const cocktail = await response.json();

      // setColumns(
      //   columns.map((list) => {
      //     if (list.key === "third-list") {
      //       return {
      //         key: list.key,
      //         items: [{
      //           name: cocktail.drinks[0].strDrink,
      //           image: cocktail.drinks[0].strDrinkThumb,
      //           background: dishesNumber[2].background,
      //           textContent: "Cocktail",
      //         }],
      //       };
      //     } else {
      //       return list;
      //     }
      //   })
      // );

      appendItemToThirdList({
        name: cocktail.drinks[0].strDrink,
        image: cocktail.drinks[0].strDrinkThumb,
        background: dishesNumber[2].background,
        textContent: "Cocktail",
      });
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
                      style={{ background: item.background }}
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

            {/* <ul className="third-list">
              {cocktail.map((cocktail, index) => (
                <li key={index}>
                  <div
                    className="card"
                    style={{ background: cocktail.background }}
                  >
                    <h3>{cocktail.name}</h3>
                    <img src={cocktail.image} alt={cocktail.name} />
                    <p>{cocktail.textContent}</p>
                  </div>
                </li>
              ))}
            </ul> */}
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
          <button
            id="button"
            onClick={() => {
              const newItem = {
                name: value,
                background:
                  "var(--Black, linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%))",
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
            }}
          >
            Click here
          </button>
          <button className="reloadButton" onClick={getData}>
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
