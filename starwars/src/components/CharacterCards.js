import React from 'react';
import {  Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';

  

const CharacterCards = props => {

    return (
        <Col xs='6' sm='4'>
            <Card key={props.id}>
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
        </Col>
    );
};

export default CharacterCards;