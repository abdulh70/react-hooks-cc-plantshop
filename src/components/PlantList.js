import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map(index => <PlantCard key={index.id} plant={index}/>)}</ul>
  );
}

export default PlantList;
