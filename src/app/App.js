import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../landing/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;