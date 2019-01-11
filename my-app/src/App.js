import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1> Hello, world </h1>
        <SayFullName name = "Ivan" surname = "Kashpirovskiy" link = "vk.com" />
        <SayFullName name = "Evgeniy" surname = "Ponasenko" link = "cool.international" />
        <SayFullName name = "Egor" surname = "Vasilyev" link = "facebook.com" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1> моё имя {props.name}, фамилия {props.surname} </h1>
      <a href="{props.link}"> ссылка на мой профиль </a>
    </div>
    )
}
export default App;
