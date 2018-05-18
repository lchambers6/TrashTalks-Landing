import React from 'react';
import "./Navbar.css";
import { Menu, Icon,Dropdown,Sidebar,Segment} from 'semantic-ui-react';

const dropdownChoices = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

const leftMenuItems = [
  {word:"About",link:"#about"},
  {word:"Founders",link:"#founders"}
]

const rightMenuItems = [
  {iconName:"instagram",link:"https://www.instagram.com/trashtalksinc"},
  {iconName:"twitter",link:"https://twitter.com/trashtalksinc"}

]

var NavComponent = (props) => 

    <Menu borderless pointing>
      <Menu.Item onClick={props.handleToggle}>

        <Icon.Group size='huge'> 
          <Icon name='trash' color="teal"/>
        </Icon.Group>

        <h2>TrashTalks</h2>

      </Menu.Item>

      <Menu.Menu>
        {leftMenuItems.map( item => <Menu.Item href={item.link}><h3>{item.word}</h3></Menu.Item>)}
        {rightMenuItems.map( item => <Menu.Item href={item.link} target="_blank" rel="noopener noreferrer">
        <Icon disabled name={item.iconName} size='big' color='teal '/></Menu.Item>)}
      </Menu.Menu>

      </Menu>



export default NavComponent;
      
