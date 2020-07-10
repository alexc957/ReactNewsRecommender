import ArticleCard from "../components/ArticleCard";
import {createRenderer} from "react-dom/test-utils";
import { render } from '@testing-library/react';
import client from "../client";
import { ApolloProvider } from '@apollo/react-hooks';
import renderer from 'react-test-renderer';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import ArticleList, {GET_ARTICLES} from "../components/ArticlesList";
it('should test articleCard', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <ArticleCard title={"test title "} articleId={5} />

        </ApolloProvider>,
    );

});

const articlesMocks = [
    {
        request: {
            query: GET_ARTICLES,
            variables: {
                search: "trump",
                first: 2,
                skip: 0

            }
        },
        result: {
            data:   [
                {
                    id: 1,
                    title: "trump first article"
                },
                {
                    id: 2,
                    title: "trump second article"
                }

                    ],

        },
    },
];

it('should render article list without error', function () {
    renderer.create(
        <ApolloProvider client={client}>
            <ArticleList search={"trump"} page={0}/>

        </ApolloProvider>,

    )
});