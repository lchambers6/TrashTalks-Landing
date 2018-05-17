import React from 'react';
import "./Navbar.css";
import { Menu, Icon,Dropdown,Segment} from 'semantic-ui-react';

const dropdownChoices = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

var NavComponent = () => 


<Segment>
  <Menu pointing>

    <Menu.Item>

      <Icon.Group size='huge'> 
        <Icon name='trash' color="teal"/>
       
      </Icon.Group>

      <h2><a href="#brand">TrashTalks</a></h2>

    </Menu.Item>


    <Menu.Item href="#">
      LeftLink1
    </Menu.Item>

    <Menu.Item href="#">
      LeftLink2
    </Menu.Item>

    <Dropdown text = "TheDropDown" options = {dropdownChoices} simple item>
    </Dropdown>


    <Menu.Menu position = "right">

      <Menu.Item href="https://www.instagram.com/trashtalks_welisten" target="_blank" rel="noopener noreferrer">
        <Icon disabled name='instagram' size='big' color='teal '/>
      </Menu.Item>

      <Menu.Item href="https://twitter.com/trashtalksnow" target="_blank" rel="noopener noreferrer">
        <Icon disabled name='twitter' size='big' color='teal'/>
      </Menu.Item>

    </Menu.Menu>

  </Menu>
</Segment>

export default NavComponent;
      
