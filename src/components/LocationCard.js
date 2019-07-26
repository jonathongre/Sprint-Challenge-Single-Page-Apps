import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function LocationCard (props) {
  console.log("LocationCard props", props.data);
    if (!props.data) {
    return <h1 className="hide">Loading...</h1>;
  }
  
  return (
    <Card style={{ color: '#fff', backgroundColor: '#000', borderRadius: '20px', width: '80%', margin: '2rem', boxShadow: '1px 1px 15px #044b0c' }}>
      <CardBody>
        <CardTitle>Name : {props.data.name}</CardTitle>
        <CardSubtitle>
          Type : {props.data.type} Dimension : {props.data.dimension}
        </CardSubtitle>
        <CardSubtitle>
          Dimension : {props.data.dimension}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
