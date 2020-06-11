
import React from 'react'
import SingleLineGridList from "./SingleLineGridList";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SnackBarMessage from "./SnackBarMessage";
import Loading from "./Loading";

const SIMILAR_ARTICLES = gql`
    query SimilarArticles($articleId: Int!){
        similarArticles(articleId: $articleId) {

            relatedArticle {
                id
                title
                category
            }
        }
    }
`
const SimilarArticles = ({articleId}) => {
    const {loading,error, data} = useQuery(SIMILAR_ARTICLES, {
        variables: { articleId },
    })
    if (loading) {
        return <Loading />
    }
    if (error) {
        console.log(error)
        return  <SnackBarMessage message={"there was an error while fetching similar articles"} openFlag={true} />
    }
    return (
        <div>
        <SingleLineGridList articles={data.similarArticles.map((rec) => rec.relatedArticle)}/>

        </div>
    )
}

export  default SimilarArticles