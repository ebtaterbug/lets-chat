import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost'
import Main from './containers/main/index'
import Navbar from './components/Navbar'
import Auth from './utils/auth';


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
  <ApolloProvider  client ={client}>
    <Router>
      <Route exact path={'/'} component={Auth.loggedIn() ? Main : Navbar}/>
    </Router>
  </ApolloProvider>
 
  );
}

export default App;