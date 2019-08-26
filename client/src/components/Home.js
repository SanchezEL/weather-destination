import React, { Component } from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import SignUp from '../containers/SignUp'
import Login from '../containers/Login'
import Nav from '../components/Nav'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

class Home extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <div>
        <Nav/>
        <Wrapper>
        <Card>
          <CardHeader
            title="Weather Destination"
            subheader="Login"
          />
          <CardContent>
            <Login />
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <span>Sign Up</span>
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <SignUp />
            </CardContent>
          </Collapse>
        </Card>
      </Wrapper>
      </div>
      
    );
  }
}

export default Home;