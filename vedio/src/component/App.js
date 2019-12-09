import React from 'react';
import SearchBar from './SearchBar';
//import youtube from '../api/youtube';
import VedioList from './vedioList';
import axios from 'axios';
import VedioDetails from './vedioDetails';

class App extends React.Component{

    state={
        vedios:[],
        selectedVedio:null
    }
    componentDidMount(){
        this.onTermSubmit("children")
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
            this.setState({
                vedios:response.data.items,
                selectedVedio:response.data.items[0]
            });
            //console.log(this.state.vedios)
        }catch(err){
            console.error(err.message);
        }
     }
     onVedioSelected=vedio=>{
        //  console.log("form the App",vedio);
        this.setState({selectedVedio:vedio});
     }
    render(){
        return(
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            {/* I have {this.state.
            vedios.length} vedios */}
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                      <VedioDetails vedio={this.state.selectedVedio}/>
                    </div>
                    <div className="five wide column">
                      <VedioList onVedioSelected={this.onVedioSelected} vedios={this.state.vedios}/>
                      
                    </div>

                </div>
            
            </div>
           
           
            </div>
    );
    }
    
}

export default App;