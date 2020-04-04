import React, { Component } from 'react';
import ModalContentcard from './ModalContentcard';
import './modal.css'
import ModalSearchBar from './ModalSearchBar';
import {FaBold} from 'react-icons/fa';
import {FaItalic} from 'react-icons/fa';
import {FaUnderline} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardContent: [
        'This is one of the Objective Example',
        'This is two of the Objective Example',
        'This is three of the Objective Example',
        'This is four of the Objective Example',
        'This is five of the Objective Example',
        'This is six of the Objective Example',
      ],
      inputBox:"",
      searchBar:"",
      closeFlag:true,
      hideModal: true,
      makeBold:false,
      makeItalic:false,
    };
  }
    
    openModal=()=>{
      // document.getElementsByClassName('modal')[0].style.display = "block";
      this.setState({
        closeFlag:false,
        hideModal: false
    })
    }
    closeModal=()=>{
      // document.getElementsByClassName('modal')[0].style.display="none";
      this.setState({
        notAddFlag:false,
        closeFlag:true,
    }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
  }


    handleLanguage = (index) => {
      // console.log('ccall from child to parent', index);
      this.setState({
        inputBox:this.state.cardContent[index],
      })
     
    }
    makeBoldFn = ()=>{
    //  document.getElementsByTagName('textarea')[0].style.fontWeight="bold";
    //  document.getElementsByClassName('btn')[0].style.fontWeight="bold";
      this.setState({
        makeBold:!this.state.makeBold
      })

    }
    makeItalic = ()=>{
      // document.getElementsByTagName('textarea')[0].style.fontStyle="italic";
      // document.getElementsByClassName('btn')[1].style.fontWeight="bold";
      this.setState({
        makeItalic:!this.state.makeItalic
      })
     }
     makeUnderline = ()=>{
      document.getElementsByTagName('textarea')[0].style.textDecoration="underline";
      document.getElementsByClassName('btn')[2].style.fontWeight="bold";
     }
     changeHandler = (event)=>{
       this.setState({
         inputBox:event.target.value,
       })
     }
    //  searchHandler=(event)=>{
    //   this.setState({
    //     searchBar:event.target.value,

    //   }) 
    //  }
     addElement=(addText)=>{
       let newcardContent=this.state.cardContent;
       newcardContent.unshift(addText)
       this.setState({
         cardContent:newcardContent,
       });
       
     }
     saveHandler=()=>{
       if(this.state.inputBox){
         const inputText=this.state.inputBox;
         console.log(inputText);
         this.props.modalsaveHandler(inputText);
        //  document.getElementsByClassName('open-modal')[0].style.display="none";
        this.setState({
          notAddFlag:false,
          closeFlag:true,
      }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
    
       }
     }

    
    render() {
        
        return (
            <div>
                <button onClick={this.openModal}   className="modal-btn">+</button>

  <div  className={this.state.closeFlag?this.state.hideModal?'displayNone':'close-modal':"open-modal" }>
    <div className={this.state.closeFlag?"close-skill-modal-content":"modal-content"}>
      <header className="header"> 
        <span onClick={this.closeModal} className="close-btn">&times;</span>
        <h2>Profile Description</h2>
        <hr/>
      </header>
      <div className="middle">
        <div className="middle-left">
          <div className="btn-div">
            <button onClick={this.makeBoldFn} className="btn"> <FaBold/></button>
            <button onClick={this.makeItalic} className="btn"> <FaItalic/></button>
            <button onClick={this.makeUnderline} className="btn"><FaUnderline/></button>
            <button className="btn"><FaBars/></button>
          </div>
          <p>
            Description
          </p>
          <div>
            <textarea className={this.state.makeBold?'makeBold':''}  name="inputBox"rows="15" cols="50" value={this.state.inputBox} onChange={this.changeHandler} type = "text"/>
          </div>
        </div>
        <div className="middle-right">
          <div className="profile-div">

             {/* <span className="choose-profile"> Choose Profile </span>
             <div class="dropdown">
                <button class="dropbtn">&#9660;</button>
                <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
             </div> */}

             <ModalSearchBar searchHandler={this.addElement}/>

          </div>
          <div className="card-container">
            {this.state.cardContent.map((card, index) => {
              return <ModalContentcard content={card} onSelectLanguage={()=>this.handleLanguage(index)}/>
            })}
          </div>
        </div>
      </div>
      <hr/>
      <footer className="footerDiv">
        <div>
          <button className="footer-cancel-btn"> Cancel</button>
          <button onClick={this.saveHandler} className="footer-save-btn">Save</button>
        </div>
      </footer>
    </div> 
  </div>
            </div>
        );
    }
}

export default Modal;