import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='founders'
          active={activeItem === 'founders'}
          onClick={this.handleItemClick}
        >
          Founders
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='services'
          active={activeItem === 'services'}
          onClick={this.handleItemClick}
        >
          Services
        </Menu.Item>
      </Menu>
    )
  }
}
