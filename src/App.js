import React, { Component } from 'react';
import './styles/main.css';

import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div>
            <h3>List of participants</h3>
          </div>
        {/* Render the form to add new employee*/}
        <Form/>

        {/* Render the table contain all employee*/}
        <Table />
        
        </div>
      </div>
    );
  }
}

export default App;
