import React from "react";
import { Droppable } from "./Droppable";

function TableFunction({ days, meals, drop }) {
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
            {meals.map((meal) => {
              const cellId = `${day}-${meal}`;
              return <Droppable key={cellId} id={cellId} drop={drop} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableFunction;
