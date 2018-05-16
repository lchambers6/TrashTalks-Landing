import React, {Component} from 'react';
import "./Founders.css";
import {Grid,Panel,Row} from "react-bootstrap";


var Founders = props =>

	<Grid>
		<Panel class = "founderPanel" bsStyle={props.bsStyleColor}>

			<Panel.Heading >
				<Panel.Title componentClass= {props.headerSize}> 
					{props.titleHeading}
				</Panel.Title>
			</Panel.Heading>


			<Panel.Body>	
				<Row>
					{props.children}
				</Row>
			</Panel.Body>

		</Panel>
	</Grid>;

export default Founders;