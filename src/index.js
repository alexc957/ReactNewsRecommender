import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import NavBar from './components/NavBar';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import client from './client';
/*
const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:8000/graphql/'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    }
  }
});





const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  // cache: new InMemoryCache()
  uri: 'http://127.0.0.1:8000/graphql/',
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : ''
      }
    })
  }
});

console.log(client);

*/
ReactDOM.render(
  <React.Fragment>
    <ApolloProvider client = {client}>

      <App />
    </ApolloProvider>
    
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
