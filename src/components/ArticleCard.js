import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import CardHeader from '@material-ui/core/CardHeader';
import {navigate} from '@reach/router';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    minWidth: 300,
    minHeight: 120,
    maxHeight: 220,
    height: 200,
  
   
  },
  media: {
    height: 140,
  },
});

export default function ArticleCard({id, title, dateUploaded, category}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

<CardHeader
        avatar={
          <Avatar aria-label="recipe">
            N
          </Avatar>
        }
        
        title={category}
        subheader={dateUploaded}
      />
      
      <CardActionArea onClick={()=>{navigate(`/article/${id}`)}}>

     
        <CardContent>
          <Typography  component="p">
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
