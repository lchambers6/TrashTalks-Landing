import React, {Component} from 'react'
import "./PersonCard.css"
import {Image, Icon, Card} from 'semantic-ui-react'


var personCard = props =>

	<Card centered className="personCard">
    <Image src={props.imageLink} />

    <Card.Content>
      <Card.Header>{props.personName}</Card.Header>
      <Card.Meta>{props.personTitle}</Card.Meta>
      <Card.Description>{props.personDescription}</Card.Description>
    </Card.Content>

    <Card.Content extra>
      <a>
        <Icon name={props.iconTypeName} />
        {props.funFact}
      </a>
    </Card.Content>

  </Card>

export default personCard;