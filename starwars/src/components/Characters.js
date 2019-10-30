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
                    birth_year={char.birth_year}
                    name={char.name}
                    hair_color={char.hair_color}
                    mass={char.mass}
                    eye_color={char.eye_color}
                    hair_color={char.hair_color}/>
               })}
          </Row>
    </Container>
    )
}

