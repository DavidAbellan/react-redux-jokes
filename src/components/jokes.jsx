import React from 'react';
import BotJoke from './btnJoke';
import {connect} from 'react-redux';
import store from '../store'

const joke = (props) => {
    if(props.jokes !== undefined) {  
    const length = props.jokes.length
 
    return (
        <div>
            <BotJoke/>
            <h1>{JSON.stringify(props.jokes[length-1])}</h1> 
        </div>    )
    } else {
        return (
            <div>
                <BotJoke/>
                <h1>NO JOKES</h1> 
            </div>    )
    }
            }


function mapStateToProps (state) {
    console.log('STorE', store.getState());
    return {
        jokes : state.joke.jokes
    }
    
}

let connection = connect(mapStateToProps)(joke);
export default connection;