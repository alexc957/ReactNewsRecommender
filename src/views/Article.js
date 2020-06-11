import React from 'react'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Container, Divider, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import ThumbsUp from '../components/ThumbsUp';
import SnackBarMessage from "../components/SnackBarMessage";
import SimilarArticles from "../components/SimilarArticles";
import Loading from "../components/Loading";

const GET_ARTICLE  = gql`
query Article($articleId: Int!) {
    article(articleId: $articleId) {
        title 
        summary 
        lang
        similarArticles {
            relatedArticle {
                 title
            }
        } 
        
    }
}
`

const Article = ({ articleId }) => {

    const {loading, error, data } = useQuery(GET_ARTICLE, {
        variables: { articleId },
    });

    if (loading) return <Loading/>
    if (error) {
       console.log(error)
       return  <SnackBarMessage message={"there was an error while fetching data"} openFlag={true} />
    }



    console.log(data);
    const token = localStorage.getItem('token')
    console.log(token)
    return (
        <Container >


            <br />

            <Card>
                <CardContent>
                    <Typography variant = 'h5' component = "h2">
                        {data.article.title}
                    </Typography>

                    <br/>
                    <Divider />

                    <br />


                    <Typography variant="body2" component = "p" align="justify">
                        {data.article.summary}

                    </Typography>
                </CardContent>

                <Divider />    
                <CardActions>
                {token?  (
                    <div>
                        <p>this really help?</p> 
                        <br />
                        <ThumbsUp articleId = {articleId} />


                    </div>
                ) : ''}
                    
                </CardActions>
                

                

           

            </Card>

            <br/> 
            <br/> 
            <p>Similar Articles</p>
            <br/> 
           <SimilarArticles articleId={articleId}/>
        

            
        </Container>
    )
}

export default Article;