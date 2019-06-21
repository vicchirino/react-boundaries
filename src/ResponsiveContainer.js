import React, { Component } from 'react';
import Hello from './Hello';
import MyError from './MyError';
import './ResponsiveContainer.css'


export default class ResponsiveContainer extends Component {
  render() {
    return (
      <div className="ResponsiveContainer">
        <Hello />
        <MyError />
      </div>
    )
  }
}