import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Texfield from '@material-ui/core/TextField';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ArticleCard from '../components/ArticleCard';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import NavBar from './NavBar';
import SnackBarMessage from "./SnackBarMessage";
import Loading from "./Loading";
const SPACE_ID = '';
const ACCESS_TOKEN = ''

export const GET_ARTICLES  = gql`
  query Articles ($search: String,$first: Int, $skip: Int) {
      articles(search: $search,first: $first, skip: $skip){
        id
        title 
      }
      
      
      
    }
  
`


const ArticleList = ({ search, page }) => {


    
    // let articles = []

   /* getCourses() {

    } */

    const {loading, error, data} = useQuery(GET_ARTICLES, {
        variables: {
          search: search,
          first: 10,
          skip: page
        }
      });
    
      if (loading) return <Loading/>
      if (error) {
        //console.log(error)
        return  <SnackBarMessage message={"there was an error while fetching data"} openFlag={true} />
      } 
    


        return (
            <div>
                   
           
                    <Container>
                    <Grid container spacing ={2} >
                        { data.articles.map(article => (
                            <Grid item xs={12} sm={6} lg={4} xl ={3} key ={article.id} >
                                <ArticleCard title={article.title}  articleId={article.id} />
                            </Grid>
                        ))}
                    </Grid>

                    </Container>
                   


            </div>
        )
    }



export default ArticleList;