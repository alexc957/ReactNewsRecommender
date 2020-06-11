import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SingleLineGridList from '../components/SingleLineGridList'
import SnackBarMessage from "./SnackBarMessage";
import Loading from "./Loading";

const RECENT_ARTICLES  = gql`
query {
  recentArticles {
    id
    title
  }
}
`
const RecentArticles = () => {

    const {loading, error, data} = useQuery(RECENT_ARTICLES)

    if (loading) {
        return <Loading />
    }
    if (error) {
        // console.log(error);

        return  <SnackBarMessage message={"there was an error while fetching data"} openFlag={true} />
    }

    return (
        <SingleLineGridList articles={data.recentArticles} />
      
    )
}

export default RecentArticles