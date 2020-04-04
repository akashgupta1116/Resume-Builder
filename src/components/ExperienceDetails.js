import React, { Component } from 'react';
import './experiencedetails .css' ;
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FaBold} from 'react-icons/fa';
import {FaItalic} from 'react-icons/fa';
import {FaUnderline} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';




class ExperienceDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            companyName:"",
            startDate:new Date(),
            designation:"",
            endDate:new Date(),
            description:"",
            errorCss:true,
            closeFlag:true,
            hideModal: true
        }
    }
    ExperienceDetailsopenModal=()=>{
        // document.getElementsByClassName('ExperienceDetailsmodal')[0].style.display = "block";
        this.setState({
            closeFlag:false,
            hideModal: false
        })
      }
      ExperienceDetailscloseModal=()=>{
        // document.getElementsByClassName('ExperienceDetailsmodal')[0].style.display="none";
        this.setState({
            notAddFlag:false,
            closeFlag:true,
        }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
      }
    companyNameHandler=(event)=>{
        this.setState({
            companyName:event.target.value,
            errorCss:true
        })
    }
    designationHandler=(event)=>{
        this.setState({
            designation:event.target.value
        })
    }
    descriptionHandler=(event)=>{
        this.setState({
            description:event.target.value
        })
    }
    startDateHandler=(date)=>{
        this.setState({
            startDate :date
        })
    }
    endDateHandler=(date)=>{
        this.setState({
            endDate:date
        })
    }
    submitHandler=()=>{
        const experienceData={
            companyName:this.state.companyName,
            designation:this.state.designation,
            description:this.state.description

        };
        // console.log(experienceData);
        if(experienceData.companyName && experienceData.designation && experienceData.description ){
            this.props.handleSubmit(experienceData);
            this.setState({
                notAddFlag:false,
                closeFlag:true,
            }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
        }    
    }
    check=(event)=>{
        // console.log(propertyname)
        if(event.target.value===''){
            this.setState({
                errorCss:false
            })
        }
        else{
            this.setState({
                errorCss:true
            })
        }
    }
   

    render() {
        return (
            <div>
                  <button onClick={this.ExperienceDetailsopenModal}   className="ExperienceDetailsmodal-btn">+</button>

                <div  className={this.state.closeFlag?this.state.hideModal?'displayNone':'close-ExperienceDetail-modal':"open-ExperienceDetailsmodal" } >
                    <div className={this.state.closeFlag?"close-skill-ExperienceDetailsmodal-content":"ExperienceDetailsmodal-content"}>
                        <header className="header"> 
                            <span onClick={this.ExperienceDetailscloseModal} className="close-btn">&times;</span>
                            <h2>ExperienceDetails</h2>
                            <hr/>   
                        </header>
                        <div className="skills-middle">
                            <div className="skills-middle-left">
                                <input onBlur={(event)=>this.check(event,'companyName')} className={this.state.errorCss?"upper-inputs":"experience-error-message"} type="text" placeHolder="Company Name" value={this.state.companyName} onChange={this.companyNameHandler} />
                                <DatePicker className="date-div" placeholderText="Start Date" selected={this.state.startDate} onChange={this.startDateHandler}/>
                                </div>
                            <div className="skills-middle-right">
                                <input className="upper-inputs" type="text" placeHolder="Designation" value={this.state.designation} onChange={this.designationHandler}/>
                                <DatePicker className="date-div"  placeholderText="End Date" selected={this.state.endDate} onChange={this.endDateHandler}/><br/>
                                <input className="checkbox" type="checkbox"/>
                                <label className="checbox-label">Are you presently working here</label>
                            </div>
                        </div>
                        <div className="bottom">    
                            <div className="button-div">
                                <button className="style-btn"><FaBold/></button>
                                <button className="style-btn"><FaItalic/></button>
                                <button className="style-btn"><FaUnderline/></button>
                                <button className="style-btn"><FaBars/></button>
                            </div>
                            <div className="description">
                                <span>Description</span>
                                <textarea type="text" rows="5" cols="60" value={this.state.description} onChange={this.descriptionHandler}/>
                                
                            </div>
                            <hr/>
                        </div>
                        <footer className="footer-div">
                            <div className="footer-btn">
                            <button className="footer-cancel-btn"> Cancel</button>
                            <button className="footer-save-btn">Save and More</button>
                            <button className="submit" onClick={this.submitHandler}>Submit</button>
                            </div>
                        </footer>
                     </div> 
                </div>
            </div>
        );
    }
}

export default ExperienceDetails;