import React, { Component } from 'react';
import './modal.css'


class ModalSearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchBar:""
        }
    }
    addElement=()=>{
        if(this.state.searchBar){
        const addText=this.state.searchBar;
        this.props.searchHandler(addText);
        this.setState({
            searchBar:""
        });}
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
         this.addElement();
        }
      }
      

    render() {
        return (
            <div>
                 <input className="search-bar"type="text" placeHolder="Add Element to Card"  onKeyPress={this.handleKeyPress} onChange={(event)=>{this.setState({searchBar:event.target.value})}} value={this.state.searchBar}/>
                 <button onClick={this.addElement}>Add</button>
                
            </div>
        );
    }
}

export default ModalSearchBar;