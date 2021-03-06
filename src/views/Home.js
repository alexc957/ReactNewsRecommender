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
    const [shouldHide, setShouldHIde] = useState(false)
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
      //console.log(e)
      setOnSearch(search);
      setShouldHIde(true)

    }

    const handleClick = (pageNumber) => {
               setOffSet(pageNumber)

    }

    return (
        <div>
            <NavBar />
            <Container  style={{marginBottom: '30px', marginTop: '30px'}}>
                <form noValidate onSubmit={onSearchFunction}>
                    <div style={{display: 'flex'}}>
                        
                    <TextField
                        variant="filled"
                        autoFocus={true}
                        margin = "normal"
                        id = "search"
                        label = "Search"
                        name="search"
                        value = {search}
                        fullWidth={true}

                        onChange ={(event) => setSearch(event.target.value)}
                    />
                    <span style={{marginTop: "25px", marginLeft: '10px'}}>
                        <Button

                            type="submit"

                            variant="contained"
                            color="primary"
                            size="medium"


                        >
                            Search
                        </Button>
                    </span>

                    </div>
                    
                </form>
            </Container>
            {shouldHide? '' : (
                        <Container>


                        <Typography variant="h4">
                          Recent Articles
                        </Typography> 
                        <br />
            
                      
            
                      <RecentArticles />
            
                      <br />
            
                      <Divider style={{height: '3px'}} />
            
                      <br />
                          <Typography variant="h4">
                              Most Voted
                          </Typography>
                            <br/>
                         
            
                          <MostVoted />
                          <br/>
                          <Divider style={{height: '3px'}} />
                      <br />
            
            
            
            
            
                      {token? <Recommendations /> : ''}
            
                      <br />
            
            
            
            
            
            
            
            
            
            
            
            
                     
              
            
                     
            
            
                      </Container>
            )}
         
           
         
            
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