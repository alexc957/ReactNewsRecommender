import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from '@material-ui/core/Container'
import ArticleCard from './ArticleCard';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));


  const SingleLineGridList = ({articles}) => {
       const classes  = useStyles();
       
/*
      const {loading, error, data} = useQuery(GET_RECS);
      if (loading) {
          
          
          return (<p>loading</p>)
          
      } 
      if (error) {
          console.log('error',error);
          return (<p>Error</p>)
          
      } 
*/   // console.log('inside this components ', articles[1].id)
      return (
       <Container>   
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5} >
            {articles.map((rec) => (
              <GridListTile key={rec.id} style={{ minWidth: "350px"}}>
               
               <ArticleCard  
                                id={rec.id}
                            
                                title={rec.title}  
                                dateUploaded={rec.dateUploaded} 
                                category={rec.category} />
                
              </GridListTile>
            ))}
          </GridList>
        </div>
        </Container>
      );
  }

  export default SingleLineGridList