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
					<Segment inverted color="teal">
				  		<h1>TrashTalks - We Listen!</h1></Segment>
					<Segment> 
						<h3>
							TrashTalks has a mission to change the way that people think about their waste. We hope to help educate people and businesses to create a world where trash is no longer viewed as a waste.
							<br/>
							One way we hope to achieve this is through the TrashTalks app which will be in app stores soon!
						</h3>
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
