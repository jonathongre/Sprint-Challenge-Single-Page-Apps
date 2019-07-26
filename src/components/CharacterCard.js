import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


export default function CharacterCard (props) {
//    console.log("Character data: ", props.data);
  return (
      <Card style={{ color: '#fff', backgroundColor: '#000', borderRadius: '20px', width: '20%', margin: '2rem', boxShadow: '1px 1px 15px #044b0c' }}>
        <CardImg style={{ borderRadius: '20px' }}
          top
          width="100%"
          src={props.data.image}
          alt={props.data.name}
        />
        <CardBody>
          <CardTitle>Name: {props.data.name}</CardTitle>
          <CardSubtitle>Gender: {props.data.gender}</CardSubtitle>
          <CardSubtitle>Species: {props.data.species}</CardSubtitle>
          <CardText>Status: {props.data.status}</CardText>
        </CardBody>
      </Card>  
  );
}
