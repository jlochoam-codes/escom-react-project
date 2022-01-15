import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import components from 'container' folder below
import IndexContainer from '../containers/IndexContainer';
import NotFoundContainer from "../containers/NotFoundContainer";

const App = () => {
  // Use imported components inside each <Route></Route>
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexContainer />
        </Route>
        <Route>
          <NotFoundContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
