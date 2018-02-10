import React, { Component } from 'react';
import WebFont from 'webfontloader';
import * as styles from './index.scss';

export default class App extends Component {
  componentDidMount() {
    WebFont.load({
      google: {
        families: ['Oxygen']
      },
      timeout: 2000,
    })
  }
  render() {
    return (
      <div>
        app
      </div>
    );
  }
}
