import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';
import { Container, Row } from 'reactstrap';


export default function Characters() {

   const [chars, setChars] = useState([]);

    
    useEffect(() => {

        axios.get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response);
                console.log(response.data);
                //look at the results coming back to see where you need to call your data from//
                setChars(response.data.results);
            })
            .catch(error => {
                console.log(`Error Message Here`, error);

            });

    }, []);

    return (
        <Container>
            <Row>
             {chars.map(char => {
                return <CharacterCards key={char.id}
                    films={char.films}
                    name={char.name}
                    homeworld={char.planets}
                    species={char.species}
                    startships={char.starships}
                    vehicles={char.vehicles}/>
               })}
          </Row>
    </Container>
    )
}

