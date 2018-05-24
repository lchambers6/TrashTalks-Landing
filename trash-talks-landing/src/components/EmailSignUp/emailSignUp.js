//-------------- Imports ----------------------//
	import React from "react";
	import { Modal, Container,Button,Grid, Form,Message} from 'semantic-ui-react';

//--------------------------------------------//

//-------------- Sign-up Log-In MODAL with the form -----------------//
var EmailSignUp = props =>
<Modal trigger={<Button content = "standard" size= 'medium'> Sign Up For Our Mailing List </Button>}>
	<Modal.Header> Get place on our mailing list for updates! </Modal.Header>
	<Modal.Content>
		<Modal.Description>
			<Container>
				<Grid stackable >
					<Grid.Row verticalAlign='middle' vertstretched container>

						<Grid.Column mobile={15} tablet={8} computer={8} largeScreen={8} wideScreen={8}>
							<Form>
								<h3>Sign Up for our Mailing List </h3>

								<Form.Field required>
									<label> Name: </label>
					                <Form.Input
					                  className = "form-control"
					                  placeholder = "Preferred-First-Name Last-Name"
					                  id = "signUpName"
					                  type = "text"
					                  value = {props.signUpName}
					                  onChange = {props.handleNameChange}
					                />
					            </Form.Field>

								<Form.Field required>
									<label> Email: </label>
					                <Form.Input
					                  className = "form-control"
					                  placeholder = "Email Address Here"
					                  id = "signUpEmail"
					                  type = "email"
					                  value = {props.signUpEmail}
					                  onChange = {props.handleEmailChange}
					                />
					            </Form.Field>

					            <Message
							      className={props.msgType}
							      header={props.msgHeader}
							      content={props.msgContent}
							    />
					            <Button type = "submit" onClick = {props.addEmailToDB}>
		              				Sign Up

		              			</Button>
				            </Form>
				        </Grid.Column>
				    </Grid.Row>
			    </Grid>
		    </Container>
	    </Modal.Description>
    </Modal.Content>
</Modal>

export default EmailSignUp;