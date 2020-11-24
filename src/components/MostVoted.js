import React from "react";

import SingleLineGridList from "./SingleLineGridList";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import SnackBarMessage from "./SnackBarMessage";
import Loading from "./Loading";
const MOST_VOTED = gql`
    query {
        mostVoted {
            id
            title
            category
            dateUploaded
        }
    }
`
const MostVoted = () => {
    const {loading, error, data} = useQuery(MOST_VOTED)

    if(loading) {
        return <Loading/>
    }

    if (error) {
        // console.log(error)
        return  <SnackBarMessage message={"there was an error while creating a vote"} openFlag={true} />
    }

    return (
        <SingleLineGridList articles={data.mostVoted}/>
    )

}

export  default  MostVoted