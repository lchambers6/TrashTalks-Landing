import React, {Component} from 'react'
import "./Founders.css"
import {Grid,Container,Segment} from 'semantic-ui-react'


var Founders = props =>

	
		<Container >

			<Segment.Group >

				<Segment inverted color="teal"> <h2 class="foundersSegment">{props.titleHeading}</h2>
				</Segment>

				<Segment>
				<Grid centered columns = {3}> 
					{props.children}
				</Grid>
				</Segment>

			</Segment.Group>

		</Container>

export default Founders;