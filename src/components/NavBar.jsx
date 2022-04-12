import React, { Component } from 'react';
import { AuthContext } from '../context/AuthContext';
import {ThemeContext} from '../context/ThemeContext'
import { ThemeToggle } from './ThemeToggle'


const NavBar = () => {
  //the static is the way to consume context api from class components
 // static contextType = ThemeContext
   // console.log(this.context)
   // the obj this includes context, ref, props ... v17 //destructuring const names for each contxt obj properties
     /*const { isLightTheme, light, dark} = this.context
    const theme = isLightTheme ? light : dark;
    let mode = isLightTheme ? 'Light': 'Dark'
     */
//Functional Components:

    return ( 
      <AuthContext.Consumer>{(authContext) => {
        return (
      <ThemeContext.Consumer>{(context) => {
        const { isAuthenticated, setAuth } = authContext;
        const { isLightTheme, light, dark} = context;
        const theme = isLightTheme ? light : dark; 
        return( 
          <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Book List App</h1>
            <div>
              <button onClick={setAuth}>{isAuthenticated ? 'logged in' : 'logged out'}</button>
              
            </div>
            <div>
            <ThemeToggle/>
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}</ThemeContext.Consumer>
        )}}</AuthContext.Consumer>
    );
  }

 
export {NavBar};