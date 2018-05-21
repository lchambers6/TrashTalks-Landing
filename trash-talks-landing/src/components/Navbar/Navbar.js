import React from 'react';
import "./Navbar.css";
import { Menu, Icon,Dropdown,Sidebar,Segment,Responsive,Container} from 'semantic-ui-react';

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

];

const sideItems = [
  { as: "a", content: "About", key: "about" },
  { as: "a", content: "Founders", key: "founders" }
];

var NavComponent = (props) => 
<div>
  <Responsive minWidth = {Responsive.onlyTablet.minWidth}>
    <Menu borderless pointing >
      <Menu.Item>

        <Icon.Group size='huge'> 
          <Icon name='trash' color="teal"/>
        </Icon.Group>

        <h2>TrashTalks</h2>

      </Menu.Item>
     
        
        {leftMenuItems.map( item => <Menu.Item href={item.link}><h3>{item.word}</h3></Menu.Item>)}
        
        <Menu.Menu position = "right">
          {rightMenuItems.map( item => <Menu.Item href={item.link} target="_blank" rel="noopener noreferrer"><h3>{item.word}</h3><Icon disabled name={item.iconName} size='big' color='teal '/></Menu.Item>)}
        </Menu.Menu>
    </Menu>
  </Responsive>

  <Responsive {...Responsive.onlyMobile}>
    <Sidebar.Pushable>
      <Sidebar as={Menu} onClick={props.toggleMenu} animation="overlay" icon = "labeled " vertical visible = {props.visible}>
        {leftMenuItems.map( item => <Menu.Item href={item.link}><h3>{item.word}</h3></Menu.Item>)}
        {rightMenuItems.map( item => <Menu.Item href={item.link} target="_blank" rel="noopener noreferrer"><h3>{item.word}</h3><Icon disabled name={item.iconName} size='big' color='teal '/></Menu.Item>)}

      </Sidebar>

      <Sidebar.Pusher onClick={props.toggleMenu} dimmed={props.visible} style={{ minHeight: "100%" }}
>

        <Menu borderless>

          <Menu.Item >
              <Icon.Group size='huge'> 
               <Icon name='trash' color="teal"/>
              </Icon.Group>

              <h2>TrashTalks</h2>
          </Menu.Item>

          <Menu.Item onClick={props.toggleMenu}><Icon name="sidebar" position='right'/></Menu.Item>
        </Menu>

      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Responsive>
</div>



export default NavComponent;
      
