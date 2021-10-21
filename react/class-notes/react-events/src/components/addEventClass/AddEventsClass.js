import React, { Component } from 'react';

export default class AddEventsClass extends Component {
  shoot() {
    alert('Great Shoot!');
  }

  render() {
    return (
      <div>
        <button onClick={this.shoot}>Take the shot!</button>
      </div>
    );
  }
}
