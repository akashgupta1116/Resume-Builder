import React, { Component } from 'react';
import './education.css';
import {validator} from './validator.js'


class Education extends Component {
    constructor(props){
        super(props);
        this.state={
            closeFlag:true,
            hideModal: true,
            courseName:'',
            courseStatus:'',
            collegeName:'',
            universityName:'',
            courseNameError:false,
            collegeNameError:false,
            universityError:false,
            courseStatusError:false
        }
    }
    openModal=()=>{
        this.setState({
          closeFlag:false,
          hideModal: false
      })
      }
    closeModal=()=>{
        this.setState({
          notAddFlag:false,
          closeFlag:true,
      }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
    }
    courseNameHandler=(event)=>{
        this.setState({
            courseName:event.target.value,
            courseNameError:false
        })
    }
    collegeNameHandler=(event)=>{
        this.setState({
            collegeName:event.target.value,
            collegeNameError:false                
            
        })
    }
    universityNameHandler=(event)=>{
        this.setState({
            universityName:event.target.value,
            universityError:false
        })
    }
    statusHandler=(event)=>{
        this.setState({
            courseStatus:event.target.value,
            courseStatusError:false
        })
    }
    submitHandler=()=>{
        const educationData={
            courseStatus:this.state.courseStatus,
            courseName:this.state.courseName,
            collegeName:this.state.collegeName,
            universityName:this.state.universityName
        }
        if(this.state.courseName && this.state.courseStatus && this.state.collegeName && this.state.universityName){
            this.props.educationSubmit(educationData)
            this.setState({
                notAddFlag:false,
                closeFlag:true,
            }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
        }
    }
    checkCourseName=(event)=>{

        if(validator.isEmpty(this.state.courseName)){
            console.log("empty");
            this.setState({
                courseNameError:true
            })
        }
        else{
            this.setState({
                courseNameError:false
            })
        }
    }
    checkCollegeName=()=>{
        if(validator.isEmpty(this.state.collegeName)){
            this.setState({
                collegeNameError:true
            })
        }
        else{
            this.setState({
                collegeNameError:false                
            })
        }
    }
    checkUniversity=()=>{
        if(validator.isEmpty(this.state.universityName)){
        this.setState({
            universityError:true
        })
     }
     else{
         this.setState({
             universityError:false
         })
     }
    }
    checkCourseStatus=()=>{
        if(validator.isEmpty(this.state.courseStatus)){
            this.setState({
                courseStatusError:true
            }) }
        else{
            this.setState({
                courseStatusError:false
            })
        }    
    }

    render() {
        return (
            <div>
                    <button onClick={this.openModal}   className="modal-btn">+</button>

                    <div  className={this.state.closeFlag?this.state.hideModal?'Education-displayNone':'close-Educationmodal':"open-Educationmodal" }>
                        <div className={this.state.closeFlag?"close-skill-Educationmodal-content":"Educationmodal-content"}>
                            <header className="header"> 
                                <span onClick={this.closeModal} className="Educationclose-btn">&times;</span>
                                <h2>Education Details</h2>
                                <hr/>
                            </header>
                            <div className="education-middle">
                            <select  className={this.state.courseStatusError?"course-status-error":'course-status'} onChange={this.statusHandler} onBlur={this.checkCourseStatus}>
                                       <option hidden selected >Course status</option>
                                       <option value="1 year">1 year</option>
                                       <option value="2 year">2 year</option>
                                       <option value="3 year">3 year</option>
                               </select>
                               <input className={this.state.courseNameError?"courseNameError":"course-name"} type='text' placeHolder="Course Name" onChange={this.courseNameHandler} onBlur={this.checkCourseName}/>
                               <input className={this.state.collegeNameError?"college-nameError":"college-name"} type='text' placeHolder="School/College Name" onChange={this.collegeNameHandler} onBlur={this.checkCollegeName}/>
                               <input className={this.state.universityError?"college-nameError":"college-name"} type='text' placeHolder="University Board Name" onChange={this.universityNameHandler} onBlur={this.checkUniversity}/>
                            </div>
                            <hr className='line2'/>
                            <footer className="Skill-footerDiv">
                                <div>
                                <button className="footer-cancel-btn"> Cancel</button>
                                <button onClick={this.submitHandler} className="footer-save-btn">Submit</button>
                                </div>
                            </footer>
                        </div> 
                    </div>
            </div>

        );
    }
}

export default Education;