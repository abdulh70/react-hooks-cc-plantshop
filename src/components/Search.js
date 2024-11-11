import React from "react";

function Search({plants, setFilteredPlants}) {
  function handleChange(event){
    const filtered = event.target.value == '' ? plants : plants.filter(index => index.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredPlants(filtered)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
