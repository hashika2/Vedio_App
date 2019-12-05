import React from 'react';
import SearchBar from './SearchBar';
//import youtube from '../api/youtube';
import VedioList from './vedioList';
import axios from 'axios';

class App extends React.Component{

    state={
        vedios:[]
    }
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
            this.setState({vedios:response.data.items});
            //console.log(this.state.vedios)
        }catch(err){
            console.error(err.message);
        }
     }
    render(){
        return(
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            I have {this.state.vedios.length} vedios
            <VedioList vedios={this.state.vedios}/>
            </div>
    );
    }
    
}

export default App;