import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TableFunction from "./table-function";

function App() {
  const dishesItems = [
    {
      name: "Kashke Bademjon",
      image: "public/Kashke-Bademjan.png",
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

  const [value, setValue] = useState("");
  const [columns, setColumns] = useState([
    { key: "first-list", items: dishesItems },
    { key: "second-list", items: dishesNumber },
    { key: "third-list", items: dishesNumber },
  ]);
  function handleClick(e) {
    // Take the value of "value" state property
    // add a new item to columns using the setColumn function
    const newItem = {
      name: value,
      background:
        "var(--Black, linear-gradient(122deg, #7B7168 0%, #B4DBFF 100%))",
      textContent: "Hauptgericht",
      image: "Bolani 1.png",
    }; // Add remaining properties
    // setColumns([
    //   ...columns,
    //   { key: columns[0].key, items: [...columns[0].items, newItem] },
    // ]);

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

  console.log(columns);

  function valueName(e) {
    setValue(e.target.value);
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
          </div>
        </div>
        <div className="input">
          <div id="new-element"></div>
          <input
            type="text"
            id="input"
            placeholder="Your text here"
            value={value}
            onChange={valueName}
          />
          <button id="button" onClick={handleClick}>
            Click here
          </button>
          <button className="reloadButton">lass dich überraschen</button>
        </div>
      </section>
      <div className="table">
        <TableFunction />
      </div>
    </div>
  );
}

export default App;
