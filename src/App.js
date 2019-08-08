import React, { Component } from 'react'
import axios from 'axios'

import Volunteer from './pages/Volunteer'
import Header from './components/Header'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Volunteer/>
      </div>
    );
  }
}

