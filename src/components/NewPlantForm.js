import React, { useState } from "react";

function NewPlantForm({setPlants}) {
  const [formObj, setFormObj] = useState({
    name: '',
    image: '',
    price: ''
  })
  function handleChange(event){
    setFormObj({...formObj, [event.target.name]: event.target.value})
  }
  function handleSubmit(event){
    event.preventDefault()
    fetch('http://localhost:6001/plants',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formObj)
    })
    .then(res => res.json())
    .then(data => setPlants(plants => [...plants, data]))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" value={formObj.name}/>
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formObj.image}/>
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" value={formObj.price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
