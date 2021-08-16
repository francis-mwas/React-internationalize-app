import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

const userData = [
  {
    id: 1,
    name: 'francis',
    email: 'mwas@gmail.com',
    job: 'Java developer',
  },
  {
    id: 1,
    name: 'John doe',
    email: 'doe@gmail.com',
    job: 'Frontend developer',
  },

  {
    id: 1,
    name: 'Jane doe',
    email: 'jane@gmail.com',
    job: 'Fullstack developer',
  },
];

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
