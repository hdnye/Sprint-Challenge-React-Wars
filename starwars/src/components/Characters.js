import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';


export default function Characters() {

   const [chars, setChars] = useState([]);

    useEffect(() => {

        axios.get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response);
                setChars=(response.data);
            })
            .catch(error => {
                console.log(`Error Message Here`, error);

            });

    }, []);

    return (
        <div className='char'>
        {chars.map(char => {
            return <CharacterCards key={char.id}
            films={char.films}
            name={char.name}
            homeworld={char.planets}
            species={char.species}
            startships={char.startships}
            vehicles={char.vehicles}
         />
        })}
    </div>
    )
}
