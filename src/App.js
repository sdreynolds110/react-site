import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Pages
import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
            <Route path="/" component={Home} />
        </PageWrapper>
      </Router>
    );
  }
}


export default App;
