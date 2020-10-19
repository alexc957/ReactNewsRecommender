import React from 'react'
import { Fab } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { gql } from 'apollo-boost';
import {useMutation, useQuery} from '@apollo/react-hooks';
import SnackBarMessage from "./SnackBarMessage";

const CREATE_VOTE = gql`
mutation CreateVote($articleId: Int) {
    createVote(articleId: $articleId){
        
        user {
            username
        }
        article {
            title
        
        }

        liked        
    }
}`

const GET_VOTE =  gql`
    query Vote($articleId: Int!){
        vote(articleId: $articleId) {
            liked
        }
    }
`
const ThumbsUp = ({ articleId }) => {

    const [createVote, {data, loading, error}] = useMutation(CREATE_VOTE);
    let color = "inherit";
    const vote = useQuery(GET_VOTE,{
        variables: {
            articleId,
        }
    } )
    /*
    if (vote.loading) {
        console.log('loading voted')
    } */
    /* if (vote.error) {
       // console.log('error',vote.error);

        // return  <SnackBarMessage message={"there was an error while creating a vote"} openFlag={true} />
    } */
    if (vote.data) {
        // console.log('vote data',vote.data)
        if(vote.data.vote){
            color = vote.data.vote.liked? "primary" : "inherit";
        }
    }
    if (data) {
        // console.log('data', data);
        color = data.createVote.liked? "primary" : "inherit";



    }
<<<<<<< HEAD
    /*
    if (loading) {
        console.log('loading');

    }*/

    //if (error) {
       // console.log(error);
        // return  <SnackBarMessage message={"there was an error while fetching  data"} openFlag={true} />
    // }

    const createVoteEvent = (event)=> {
        console.log(event)
=======


    const createVoteEvent = (event)=> {

>>>>>>> desarrollo
        createVote({ variables: { articleId } })

    }

    return (
        <div>
            <Fab   color={color} onClick={createVoteEvent}>

                          <ThumbUpIcon />
            </Fab>
            { vote.error || error ? (
                <SnackBarMessage message={"there was an error while creating a vote"} openFlag={true} />
            ) : '' }
        </div>
    );
}

export default ThumbsUp;