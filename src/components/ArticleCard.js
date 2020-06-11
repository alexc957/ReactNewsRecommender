import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import  CardContent  from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from '@reach/router';
import { Divider } from '@material-ui/core'
const ArticleCard = ({ title, articleId }) => {
    return (
        <Card  style = {{margin: 24, height: 140, minWidth: "200px"}}>
            <Typography variant ="subtitle1">
              {title}
            </Typography>
            <Divider />
            <CardContent>
            <Link to={`/article/${articleId}`} > See More </Link>
            </CardContent>           
        </Card>
    )

}

export default ArticleCard;