import React, { Component } from 'react';
import { Grid, Button, Menu } from 'semantic-ui-react';
export default class Goran extends Component {
  state = { activeItem: 'Anasayfa' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <div className="goran-back">
        <div className="mainEllips"></div>
        <div className="mainEllips mainEllips1"></div>
        <div className="mainEllips mainEllips2"></div>
        <div className="mainEllips mainEllips3"></div>
        <div className="mainEllips mainEllips4"></div>
        <div className="mainEllips mainEllips5"></div>
        <div className="mainEllips mainEllips6"></div>
        <div className="mainEllips mainEllips7"></div>
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column styled={{ marginTop: '200px' }}>
              <div className="Lorem-ipsum">
                Lorem ipsum Dolor Sit Amet, Lorem
              </div>

              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button secondary>Secondary</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ marginTop: '100px', fontSize:"24px" }}>
              <Menu text>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}
