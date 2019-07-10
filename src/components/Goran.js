import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
export default class Goran extends Component {
  state = { activeItem: 'Anasayfa' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <div className="goran-back">
        <div className="goranbox">
              <div className="Lorem-ipsum">
                Lorem ipsum Dolor Sit Amet, Lorem
              </div>
          <br/>
              <Button secondary>Secondary</Button>
           
              <Menu text style={{marginTop:"126px"}}>
                <Menu.Item
                  style={{ color: 'white', fontStyle: 'normal' }}
                  name="Anasayfa"
                  active={activeItem === 'Anasayfa'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ color: 'white', fontStyle: 'normal' }}
                  name="hakkımızda"
                  active={activeItem === 'hakkımızda'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ color: 'white' }}
                  name="WeWantEd Lab"
                  active={activeItem === 'mostComments'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ color: 'white' }}
                  name="Etkinlikler"
                  active={activeItem === 'etkinlikler'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  style={{ color: 'white' }}
                  name="Blog"
                  active={activeItem === 'blog'}
                  onClick={this.handleItemClick}
                />
              </Menu>
        </div>
      </div>
    );
  }
}
