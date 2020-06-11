import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SingleLineGridList from './SingleLineGridList'
import {Container, Typography, Divider} from '@material-ui/core';
import SnackBarMessage from "./SnackBarMessage";
import Loading from "./Loading";
const GET_RECS = gql`
query {
    recommendations {
        
        article {
            id
            title
            
        } 
    }
}
`

const Recommendations = () => {

    const {loading, error, data} = useQuery(GET_RECS)

    if(loading) {
        return <Loading />
    }

    if (error) {
        // console.log(error)
        return  <SnackBarMessage message={"there was an error while fetching recommendations"} openFlag={true} />
    }
    console.log('data recs',data)
    
    return (
       <div>
           <Typography variant="h4">
               Recommendations
           </Typography>
           {data.recommendations.length > 0 ? <SingleLineGridList articles={data.recommendations.map(rec => rec.article)} />  :  <Typography variant="subtitle2" align="center">Start reading and liking articles</Typography>}
        <Divider />
       </div>
    )
}

export default Recommendations