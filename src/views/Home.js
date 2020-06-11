import React, {useState} from 'react'

import ArticleList from '../components/ArticlesList';
import NavBar from '../components/NavBar';
// import Recommendations from '../components/Recommendations'
import { Divider, Container, TextField, Button, Typography, Card } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import RecentArticles from '../components/RecentArticles'
import Recommendations from '../components/Recommendations';
import MostVoted from '../components/MostVoted';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import SnackBarMessage from "../components/SnackBarMessage";
import Loading from "../components/Loading";


const TOTAL_PAGES =  gql`
query {
    totalPages
}`
/*const Recommendations = () => (
  <Container>
     <Divider/>
     <p>My Recommendations</p>
  </Container> 
) */

const theme = createMuiTheme()
const Home = () => {

    const [search,setSearch] = useState('')
    const [onSearch, setOnSearch] = useState('')
    const [offSet, setOffSet] = useState(0);
    //onst [articles, setArticles] = useState([])
    const {loading,error,data} = useQuery(TOTAL_PAGES)
    const token = localStorage.getItem('token')
    // console.log(token)

    if (error)  {
        console.log(error)
        return  <SnackBarMessage message={"there was an error while fetching data"} openFlag={true} />
    }
    

    
   

   

   // setArticles(data.articles)
    //if (data) {
      //setArticles(data.articles)
     // articles = data.articles
    // } 
    // console.log(data);

    const onSearchFunction = (e) => {
      e.preventDefault()
      console.log(e)
      setOnSearch(search);

    }

    const handleClick = (pageNumber) => {
        console.log(`active page is  ${pageNumber}`)
        setOffSet(pageNumber)

    }

    return (
        <div>
          <Container>

            <br /> 

            <Typography variant="h4">
              Recent Articles
            </Typography> 

          <Divider />

          <RecentArticles />

          <br />

          <Divider />

          <br />
              <Typography variant="h4">
                  Most Voted
              </Typography>
                <br/>
              <Divider />

              <MostVoted />
              <br/>
              <Divider />
          <br />





          {token? <Recommendations /> : ''}

          <br />












          <form noValidate onSubmit={onSearchFunction}>
                <TextField 
                  variant="outlined"
                  margin = "normal"
                  id = "search"
                  label = "Search"
                  name="search"
                  value = {search}
                  
                  onChange ={(event) => setSearch(event.target.value)}
                />
                <br />
                <Button
                type="submit"
                
                variant="contained"
                color="primary"
                

              >
                Search
              </Button>
          </form>    
  

         


          </Container>
         
           
         
            
            <ArticleList search={onSearch}  page = {offSet}/>

            <Card>
                {!loading ?  (
                    <Container style={{maxWidth: "500px",alignContent: "center"}} >
                        <MuiThemeProvider theme={theme} >
                            <CssBaseline />
                            <Pagination
                                limit = {10}
                                offset ={offSet}
                                total = {data.totalPages}
                                onClick = {(e,offset) => handleClick((offset))}
                                size = {'large'}
                            />
                        </MuiThemeProvider>

                    </Container>
                ): (
                    <Loading />
                )}
            </Card>








           
        </div>
    )
}

export default Home;