import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import axios from 'axios';

class App extends React.Component{
        onTermSubmit=async (term)=>{
            const APIKEY = 'AIzaSyAQpXGoCMfxA2RPAQoz5Qqa5qYhpxBYsI0';

        try{
            const response=await axios.get('https://www.googleapis.com/youtube/v3/search',{
                params:{
                    q:term,
                    part:'snippet',
                    maxResults:5,
                    key:APIKEY
                }
            });
            console.log(response)
        }catch(err){
            console.error(err.message);
        }
        
     }
     
    render(){
        return(
        <div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit}/></div>
    );
    }
    
}

export default App;