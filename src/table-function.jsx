import React from "react";

function TableFunction() {
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

  return (
    <table>
      <thead>
        <tr>
          <th id="empty"></th>
          {meals.map((meal) => (
            <th key={meal} className="top">
              {meal}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {days.map((day) => (
          <tr key={day}>
            <th>{day}</th>
            {meals.map((meal) => (
              <td key={`${day}-${meal}`}>Data</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableFunction;
