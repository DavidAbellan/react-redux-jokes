import store from '../store';
import axios from 'axios';

export default async function getJoke() {
    let jk = await axios.get('https://jokeapi.p.rapidapi.com/category/any' ,{ headers :{
        'x-rapidapi-host' :  'jokeapi.p.rapidapi.com',
        'x-rapidapi-key'  : "e1302c32d4msh235d8cf46358794p1b0804jsn8c743648faad" }} );

    console.log('DATA', jk.data  );  
    let joke;
    if(jk.data.type === 'single') {
        joke = jk.data.joke 
    }  else {
        joke = { setup : jk.data.setup,
                 delivery : jk.data.delivery}
    }
    console.log('BROMA',joke);

   let getjoke = {
       type : 'GETJOKE',
       joke
   } 
   store.dispatch(getjoke) ;   
}