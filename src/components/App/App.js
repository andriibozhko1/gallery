import React, { Component } from "react";
import RouterOutlet from "../../services/RouterOutlet";
import { ContextProvider } from '../../Context/Context';
import "normalize.css";

import routes from "../../routes/routes"

export default class App extends Component { 
  render() {
    return (
      <>
        <ContextProvider>
          <RouterOutlet routes={routes} />
        </ContextProvider>
      </>
    );
  }
}

