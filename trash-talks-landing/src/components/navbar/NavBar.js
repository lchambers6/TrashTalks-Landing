import React from 'react';
import "./Navbar.css";
import { Menu, Icon,Dropdown,Segment} from 'semantic-ui-react';

const dropdownChoices = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

var NavComponent = () => 


<Segment inverted>
  <Menu inverted pointing >

    <Menu.Item>

      <Icon.Group size='huge'> 
        <Icon name='trash' />
       
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

      <Menu.Item href="#">
        LinkRight1
      </Menu.Item>

      <Menu.Item href="#">
        LinkRight2
      </Menu.Item>

    </Menu.Menu>

  </Menu>
</Segment>

export default NavComponent;
      
