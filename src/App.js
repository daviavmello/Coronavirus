import React from 'react';
import './App.css';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

// Hooks vs. Class-based. Decided to go for class-based for App.js only.
class App extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;