import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import {Segment, Image,Grid,Container} from "semantic-ui-react";
import Founders from "../../components/Founders";
import PersonCard from "../../components/PersonCard";
class LandingPage extends Component {


	render() {
		return(
			<div>
			<Container>
				<Segment.Group>

					<Segment inverted color="blue">
				  		<h1>TrahsTalks - We Listen!</h1></Segment>
					<Segment> 
						  <p>
						    This text can be filled in by Jackie or Luke. Going to type a few sentences
						    just to fill in the space and  to get a feel for how the Jumbotron will look.
						    Going to add founders' pics below.
						    Maybe use popups.
						    Or just circle images.
						   	<br/><br/>
						   	The navbar is a "inverted black segment" 
						   	<br/><br/>
						   	The 'TrashTalks-WeListen' section is a "Container with an inverted blue segment" inside of it
						   	<br/><br/>
						   	The 'Meet The founders' section is also a "container with an inverte purple segment" inside of it
						   	<br/><br/> Containers stack with no margins. Segments expand the entire div they are in and come with top/bottom margins
						  </p>
					  </Segment>
				</Segment.Group>
			</Container>
				
				<Founders
					titleHeading="Meet the Founders"
				>
						<Grid.Column >
							<PersonCard
								imageLink="https://media.licdn.com/dms/image/C4D03AQHQRSCSXG12oQ/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=1iPK7E-jkRxgejW1gj9y-rJ2I4601fZeqj-BikRW8tU"
								personName = "Luke Chamers"
								personTitle="Founder"
								personDescription="A description of Luke Here. Longer bio will be in Modal Later"
								iconTypeName = "inbox"
								funFact = "Fun fact here. Using inbox icon for ease. Can customize it later"
							/>
						</Grid.Column>
						<Grid.Column>
							<PersonCard
								imageLink="https://media.licdn.com/dms/image/C5603AQGl34s5xlSYzw/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=r8lq55ictMWCz6Jc_QWBRkEDTe-RqBNmX9c9YolLLAo"
								personName = "Jacqueline Alexander"
								personTitle="Founder"
								personDescription="A description of Jackie Here. Longer bio will be in Modal Later"
								iconTypeName = "shop"
								funFact = "Fun fact here. Using shop icon for ease. Can customize it later"
							/>
						</Grid.Column>
						<Grid.Column>
						
							<PersonCard
								imageLink="https://media.licdn.com/dms/image/C5103AQFhOgeXUwXDtA/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=CUpzB0uAbNmCK2SC94kZKPIx1CDRqbGq82VFLzLuxnY"
								personName = "Arturo Salmeron"
								personTitle="Founder"
								personDescription="A description of Arturo Here. Longer bio will be in Modal Later"
								iconTypeName = "comment"
								funFact = "Fun fact here. Using comment icon for ease. Can customize it later"
							/>
						</Grid.Column>
						
				</Founders>

			</div>
	    )
	}
}

export default LandingPage;
