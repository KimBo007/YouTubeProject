import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
   super(props);
    
   this.state={term:''};
  }
  
 render(){
   return (
     <div className="input">
       <input 
         placeholder="Search..."
         className="inputBox full" 
         onChange={event => this.onInputChange(event.target.value)} 
         />
     </div>
       );
     }
  
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

/*
function Hello () {
  return (
    <h1>Hello from React</h1> 
  )
}
*/
export default SearchBar