import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import AddPet from './AddPet'
import PetPage from './PetPage'
import EnterSite from './EnterSite'
import { useAuth } from '../context/AuthContext'


function App() {

  const { currentUser } = useAuth()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/addpet" exact component={() => <AddPet />} />
          <Route path="/dashboard" exact component={() => <PetPage />} />
          <Route path="/" component={() => <EnterSite />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

// path="/" if logged in redirect to /:petid
// path="/signup" if logged in redirect to /:petid
// path="/login" if logged in redirect to /:petid
// path="/:petid" if logged into correct account, show sidebar & edit boxes
// path="/:petid" if logged into wrong account, show sidebar but no edit boxes
