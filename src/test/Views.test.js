import client from "../client";
import { ApolloProvider } from '@apollo/react-hooks';
import renderer from 'react-test-renderer';
import React from 'react';
import Article from "../views/Article";
import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import App from "../App";


it('should render Article view', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <Article articleId={61919}/>
        </ApolloProvider>
    )


});

it('should render Home view', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <Home/>
        </ApolloProvider>
    )

});

it('should render app', function () {
    renderer.create(
        <ApolloProvider client = {client}>
            <App/>
        </ApolloProvider>
    )

});



