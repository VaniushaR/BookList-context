import React, { Component } from 'react';
import {ThemeContext} from '../context/ThemeContext'

class BookList extends Component {
  static contextType = ThemeContext
  render() { 
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark
    return ( 
      <div className="book-list" style={{background:theme.bg, color:theme.syntax}}>
        <ul>
          <li style={{background: theme.ui}}>El arte de la Compasión</li>
          <li style={{background: theme.ui}}>El universo en un átomo</li>
          <li style={{background: theme.ui}}>Las cuatro nobles verdades</li>
        </ul>
      </div>
    );
  }
}
 
export {BookList};