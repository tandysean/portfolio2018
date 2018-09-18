import React, {Component}from 'react';
import { VelocityComponent } from 'velocity-react';

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    }
    this.showAnimation = this.showAnimation.bind(this);
  }

  showAnimation() {
    setTimeout(() => this.setState({showContent: true}), 4000);
  }

  render() {
    this.showAnimation();
    return (
      <VelocityComponent
        animation={{ opacity: this.state.showContent ? 1 : 0 }} duration={200}>
        <div className="content">
          <h1>This is my first content</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </VelocityComponent>
    )
  }
}
