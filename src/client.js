import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag'
import { setContext } from 'apollo-link-context'


const link = new createHttpLink({uri: 'http://localhost:8000/graphql/'})

const cache = new InMemoryCache()

const authLink = setContext((_,{headers})=> {
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : ''
        }
    }

})

const client = new ApolloClient({
    link: authLink.concat(link),
    cache,
})


export default client;