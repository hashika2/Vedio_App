import  React from 'react';

class SearchBar extends React.Component{
    state={
        term:''
    }
    OnchangeInput=(event)=>{
        this.setState({term:event.target.value});
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        
        //todo:make sure we call
        //callback from parent component
    }
    render(){
        return(
            <div className="search-bar ui segment">
                {/* when ever you submit on search bar */}
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label> Video Search</label>
                        <input type="text" value={this.state.term}
                        onChange={this.OnchangeInput}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar; 