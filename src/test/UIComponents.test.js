import client from "../client";
import { ApolloProvider } from '@apollo/react-hooks';
import renderer from 'react-test-renderer';
import Loading from "../components/Loading";
import React from 'react'
import NavBar from "../components/NavBar";
import SingleLineGridList from "../components/SingleLineGridList";
import ThumbsUp from "../components/ThumbsUp";
it('should render Loading component', function () {

    renderer.create(
        <ApolloProvider client={client}>
            <Loading/>
        </ApolloProvider>
    )
    
});

it('should render NavBar ', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <NavBar/>
        </ApolloProvider>
    )
    
});

it('should render SingleLineGridList', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <SingleLineGridList articles={[]}/>
        </ApolloProvider>
    )

});

it('should render thumbsup', function () {

    renderer.create(
        <ApolloProvider client={client}>
           <ThumbsUp />
        </ApolloProvider>
    )
    
}); 