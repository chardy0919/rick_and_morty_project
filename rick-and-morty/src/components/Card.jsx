import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chars from '../pages/CharactersPage';
import React from 'react';

function charCard(props) {
  return (
        <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Species: {props.species}<br/>Status: {props.status}<br/>Gender: {props.gender}
            </Card.Text>
            <Button variant="primary">Do sum</Button>
        </Card.Body>
        </Card>
  );
}

export default charCard;