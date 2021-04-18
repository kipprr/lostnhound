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
import PetDisplayOfficial from './PetDisplayOfficial'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import AddPet from './AddPet'
import PetPage from './PetPage'
import EnterSite from './SIgnupContainer'
import PrivateRoute from './PrivateRoute'
import RedirectRoute from './RedirectRoute'
import { AuthProvider } from "../context/AuthContext";
import LoginContainer from './LoginContainer'
import SignupContainer from './SIgnupContainer'


function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <RedirectRoute path="/" exact component={() => <Home />} />
            <PrivateRoute path="/addpet" exact component={() => <AddPet />} />
            <PrivateRoute path="/dashboard" component={PetPage} />
            <RedirectRoute path="/login" component={() => <LoginContainer />} />
            <RedirectRoute path="/signup" component={() => <SignupContainer />} />
            <Route path="/pet/:id" component={() =><PetDisplayOfficial  />} />

          </Switch>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;

// path="/" if logged in redirect to /:petid
// path="/signup" if logged in redirect to /:petid
// path="/login" if logged in redirect to /:petid
// path="/:petid" if logged into correct account, show sidebar & edit boxes
// path="/:petid" if logged into wrong account, show sidebar but no edit boxes
