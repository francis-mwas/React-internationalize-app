// Context with class based components
// import React, { Component, createContext } from 'react';

// export const LanguageContext = createContext();

// export class LanguageContextProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { language: 'french' };
//     this.onLanguageChange = this.onLanguageChange.bind(this);
//   }
//   onLanguageChange(e) {
//     this.setState({
//       language: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <LanguageContext.Provider
//         value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
//       >
//         {this.props.children}
//       </LanguageContext.Provider>
//     );
//   }
// }

// export const withLanguageContext = (Component) => (props) =>
//   (
//     <LanguageContext.Consumer>
//       {(value) => <Component languageContext={value} {...props} />}
//     </LanguageContext.Consumer>
//   );

// with hooks

import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageContextProvider(props) {
  const [language, setLanguage] = useState('french');

  const onLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <LanguageContext.Provider value={{ language, onLanguageChange }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
