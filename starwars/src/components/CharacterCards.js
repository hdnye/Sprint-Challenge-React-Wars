import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle } from 'reactstrap';
  

const CharacterCards = props => {

    return (
        <div key={props.id}>
            <Card>
                <CardBody>
                    <CardTitle>Character: {props.name}</CardTitle>
                         <CardText>
                            Films: {props.films}
                            Species: {props.species}
                            Homeworld: {props.planets}
                            Vehicles: {props.vehicles}
                            Starships: {props.starships}
                   </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default CharacterCards;