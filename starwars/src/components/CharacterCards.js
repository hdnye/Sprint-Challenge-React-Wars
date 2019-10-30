import React from 'react';
import {  Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';
  

const CharacterCards = props => {

    return (
        <Col  xs='6'> 
            <Card key={props.id}>
                <CardBody>
                     <CardTitle>Character: {props.name}</CardTitle>
                          <CardText>
                           <p>Birth Year: {props.birth_year}</p>
                           <p>Mass: {props.mass}</p>
                           <p>Eye Color: {props.eye_color}</p>
                           <p>Hair Color: {props.hair_color}</p>
                     </CardText>
                   </CardBody>
            </Card>
        </Col>
    );
};

export default CharacterCards;