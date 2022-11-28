import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';

import Header from './components/header/Header'
import { spoonacular } from './components/utilities/Utilities';
import Query from './components/query/Query';


const App = () =>{

  //results will hold the response from the Api
  const[results, setResults] = useState([]);
  //searched recipe
  const[query, setQuery] = useState('');

  //execute each time the word changes
  useEffect(() => {
    async function fetchData (){
// check that the word is not empty, 
if (query !== ''){
//then send a request to API and store response.
const outcome = await spoonacular('query', 'cuisine', 'diet', setResults);

if(outcome){
  setResults([...outcome]);
}
}
//then open the result and it will have the query I have entered, so I will use my set Results to store the value locally in my meaning vaiable

    }
fetchData ();
  }, [query]);

   return(
  <div style={{height: '100vh', backgroundColor: '#696969', color: 'white'}}>
    <Container maxWidth='md' style={{ height: '100vh', display:'flex', flexDirection: 'row',}}>
   
    <Header word={query} setWord={setQuery}/>
    {results && <Query word={query} results={results}/>}

    </Container>
    </div>

  );
    
};
  export default App;


