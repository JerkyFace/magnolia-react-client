import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageLoader from './helpers/PageLoader';
import './App.css';
import { getRouterBasename } from './helpers/AppHelpers';

function App() {
  return (
    <BrowserRouter basename={getRouterBasename()}>
      <div className="container">
        <Switch>
          <Route path="/" component={PageLoader} />
        </Switch>
      </div>

      <footer>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        <br />
        Copyright © 2020
      </footer>
    </BrowserRouter>
  );
}

export default App;
