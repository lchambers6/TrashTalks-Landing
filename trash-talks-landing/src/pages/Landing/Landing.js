import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import {Segment, Image,Grid,Container} from "semantic-ui-react";
import Founders from "../../components/Founders";
import PersonCard from "../../components/PersonCard";
import "./Landing.css"
class LandingPage extends Component {


	render() {
		return(
			<div>
			<Container id="about">
				<Segment.Group>
					<Segment inverted color="teal" className="landingTitle">
				  		<h1>TrashTalks - We Listen!</h1>
					</Segment>
					<Segment className="landingWords"> 
						<p>
						TrashTalks has a mission to change the way that people think about their waste. 
						Through data analytics, consulting services, and innovative technology we educate 
						people and businesses to create a world where trash is no longer viewed as a waste, 
						but instead a resource. We believe that a circular economy is possible and we want 
						to do our part in creating it. TrashTalks is honored to begin as part of the Georgia 
						Tech CREATE-X accelerator, where we are excited to grow and blossom.
						<br/><br/>
						Keep a look out in your local app store for the TrashTalks app which coming soon!
						</p>
					</Segment>
				</Segment.Group>
			</Container>

			<Container id="founders">	
				<Founders
					titleHeading="Meet the Founders"
				>
						<Grid.Column >
							<PersonCard
								imageLink="https://media.licdn.com/dms/image/C4D03AQHQRSCSXG12oQ/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=1iPK7E-jkRxgejW1gj9y-rJ2I4601fZeqj-BikRW8tU"
								personName = "Luke Chamers"
								personTitle="Founder"
								personDescription="Luke was trained as an Environmental Engineer at Georgia Tech and has worked in the waste industry for 4 years and as a programmer for two."
								iconTypeName = "comment"
								funFact = "Luke has been interested in trash since he was 10 years old."
							/>
						</Grid.Column>
						<Grid.Column>
							<PersonCard
								imageLink="https://media.licdn.com/dms/image/C5603AQGl34s5xlSYzw/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=r8lq55ictMWCz6Jc_QWBRkEDTe-RqBNmX9c9YolLLAo"
								personName = "Jacqueline Alexander"
								personTitle="Founder - CEO"
								personDescription="Jackie is a current Economics student at Georgia Tech and has been running her own personal training business for 3 years."
								iconTypeName = "comment"
								funFact = "Jackie has a goal to live to 250 years old."
							/>
						</Grid.Column>
						<Grid.Column>
						
							<PersonCard
								imageLink="https://media.licdn.com/dms/image/C5103AQFhOgeXUwXDtA/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=CUpzB0uAbNmCK2SC94kZKPIx1CDRqbGq82VFLzLuxnY"
								personName = "Arturo Salmeron"
								personTitle="Founder"
								personDescription="Arturo has a Materials Science degree from Georgia Tech and skills in software development."
								iconTypeName = "comment"
								funFact = "Arturo loves to cook, rock climb, and sing in the car."
							/>
						</Grid.Column>
						
				</Founders>
			</Container>

			</div>
	    )
	}
}

export default LandingPage;
