import React, { Component } from 'react';
import { Search } from '../Search';
import './style.scss';
import logo from '/assets/img/logos/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header id="header">
          <img src={logo} className="logo" alt="logo" />
      </header>
    );
  }
}
