import React, {Component} from 'react'
import "./Founders.css"
import {Grid,Container,Segment} from 'semantic-ui-react'


var Founders = props =>


			<Segment.Group >

				<Segment inverted color="teal" className="foundersTitle">
					<h2>{props.titleHeading}</h2>
				</Segment>

				<Segment>

				<Container>
				<Grid centered columns = "equal" stackable>
					{props.children}
				</Grid>
				</Container>
				</Segment>

			</Segment.Group>


export default Founders;