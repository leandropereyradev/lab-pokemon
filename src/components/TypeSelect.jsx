import React from "react";

function TypeSelect({ pokemonType, onTypeSelected, setCurrentPage }) {
  const handleSelect = (e) => {
    onTypeSelected(e.target.value);
    setCurrentPage(1);
  };

  return (
    <select onChange={handleSelect}>
      <option value="all">See All Types</option>
      {pokemonType.map((type, i) => (
        <option value={type} key={i}>
          {type}
        </option>
      ))}
    </select>
  );
}

export default TypeSelect;
