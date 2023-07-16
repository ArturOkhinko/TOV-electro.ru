import React from "react";
import "./Select.Style/Select.css";
export default function Select({ options, defaultValue, value, sort }) {
  return (
    <select value={value} onChange={(event) => sort(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((element) => (
        <option key={element.value} value={element.value}>
          {element.sort}
        </option>
      ))}
    </select>
  );
}
