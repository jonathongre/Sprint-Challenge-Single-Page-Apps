import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function EpisodeCard (props) {
  if (!props.data) {
    return <h1 className="hide">Loading...</h1>;
  }
  return (
      <Card style={{ color: '#fff', backgroundColor: '#000', borderRadius: '20px', width: '100%', margin: '2rem', boxShadow: '1px 1px 15px #044b0c' }}>
        <CardBody>
          <CardTitle style={{ padding: '1rem' }}>Episode Name : {props.data.name}</CardTitle>
          <CardSubtitle style={{ padding: '1rem' }}>Episode : {props.data.episode}</CardSubtitle>
          <CardText style={{ padding: '1rem' }}>Air Date : {props.data.air_date}</CardText>
        </CardBody>
      </Card>
  );
}