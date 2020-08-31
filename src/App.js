import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import LoginNew from "./LoginNew";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/*       <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>Chat Screen!!</h1>
              </Route>
            </Switch>
          </div>
        )}
      </Router> */}
      <LoginNew />
    </div>
  );
}

export default App;
