import ArticleCard from "../components/ArticleCard";

import client from "../client";
import { ApolloProvider } from '@apollo/react-hooks';
import renderer from 'react-test-renderer';
import React from 'react';

import ArticleList from "../components/ArticlesList";
import RecentArticles from "../components/RecentArticles";
import SimilarArticles from "../components/SimilarArticles";
import Recommendations from "../components/Recommendations";
import MostVoted from "../components/MostVoted";
it('should test articleCard', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <ArticleCard title={"test title "} articleId={5} />

        </ApolloProvider>,
    );

});

it('should render article list without error', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <ArticleList search={"trump"} page={0}/>

        </ApolloProvider>,

    )
});


// test recent articles

it('should render recent articles', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <RecentArticles />
        </ApolloProvider>
    )

});


// test similar articles 

it('should render similar articles', function () {
    renderer.create(
        <ApolloProvider client = {client} >
            <SimilarArticles articleId={50}/>
        </ApolloProvider>
    )

});


// test recommendations
it('should render recommendations ', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <Recommendations/>
        </ApolloProvider>
    )

});

// test most voted components

it('should render most voted', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <MostVoted/>
        </ApolloProvider>
    )
});

