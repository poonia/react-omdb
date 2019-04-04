import React, { Component } from 'react';
import { Search } from '../Search';
import './style.scss';
import logo from '/assets/img/logos/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header id="header">
          <img src={logo} className="logo" alt="logo" />
           <Search></Search>

       {/*
          <div className="nav-bar">
            <a href="#" className="nav-item">
                <span className="icon-back-arrow"></span>
            </a>
          </div>
       */}
       
      </header>
    );
  }
}
