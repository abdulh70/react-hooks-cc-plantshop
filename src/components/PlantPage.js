import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [filteredPlants, setFilteredPlants] = useState([])
  const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch('https://react-hooks-cc-plantshop-0ltx.onrender.com/plants')
    .then(res => res.json())
    .then(data => {
      setPlants(data)
      setFilteredPlants(data)
    })
  },[])
  
  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search plants={plants} setFilteredPlants={setFilteredPlants}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
