import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import {Jumbotron, Image,Grid,Row,Col} from "react-bootstrap";

class LandingPage extends Component {


	render() {
		return(
			<div>
				<Jumbotron>
				  <h1>TrahsTalks - We Listen!</h1>
					  <p>
					    This text can be filled in by Jackie or Luke. Going to type a few sentences
					    just to fill in the space and  to get a feel for how the Jumbotron will look.
					    Going to add founders' pics below.
					    Maybe use popups.
					    Or just circle images.
					   	<br/><br/>
					   	I don't like the Jumbotron 
					   	<br/><br/>
					   	Leaning towards not using react-bootstrap due to limited documentation, limited modals, no cards, icon library needs to be imported, still need to use mediaQueries
					  </p>
					  
				</Jumbotron>;
				
				<Grid>
					<Row>
						<Col xs={6} md={4}>
							<Image src="https://media.licdn.com/dms/image/C4D03AQHQRSCSXG12oQ/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=1iPK7E-jkRxgejW1gj9y-rJ2I4601fZeqj-BikRW8tU" thumbnail />
							<p> Testing the text for these images. Cant find good doc. </p>
						</Col>
						<Col xs={6} md={4}>
							<Image src="https://media.licdn.com/dms/image/C5603AQGl34s5xlSYzw/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=r8lq55ictMWCz6Jc_QWBRkEDTe-RqBNmX9c9YolLLAo" thumbnail />
						</Col>
						<Col xs={6} md={4}>
							<Image src="https://media.licdn.com/dms/image/C5103AQFhOgeXUwXDtA/profile-displayphoto-shrink_200_200/0?e=1531958400&v=beta&t=HNTcez0aADtQuYGLclEY5rk-v-e2dl2RCmdxv8fCRBU" thumbnail />
						</Col>
					</Row>
				</Grid>;

			</div>
	    )
	}
}

export default LandingPage;
