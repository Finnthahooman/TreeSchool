import React from 'react';


const cities = ['Roma', 'Milano', 'Napoli','Torino'];
const StampaCitta = () =>{
    return (
    <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
    </ul>
    )
}

export default StampaCitta;