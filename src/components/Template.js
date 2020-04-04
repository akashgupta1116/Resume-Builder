import React, { Component } from 'react';
import './template.css'
import Modal from './Modal'
import ExperienceDetails from './ExperienceDetails.js'
import Skills from './Skills.js'
import Education from './Education.js'
import {validator} from './validator.js'


class template extends Component {
    constructor(){
        super()
        this.state={
            experience:null,
            closeBtn:true,
            profile:'',
            title:"TITLE",
            titleFlag:true,
            titleInput:false,
            phoneNo:999999999,
            email:'xxxxxxx@gmail.com',
            linkedin:'xxxxxxxxxxx',
            showPhnoneText:true,
            hidePhoneText:false,
            showEmmailText:true,
            hideEmailText:false,
            showLinkedInText:true,
            hideLinkedInText:false,
            address:'',
            showAddress:true,
            hideAddress:false,
            showAddText:false,
            showLang:true,
            lang:'',
            hideLang:false,
            showLangText:false,
            skills:[],
            education:null,
            phoneNoerror:false,
            emailError:false,
        }
    }
    handleExperienceSubmit=(experienceData)=>{
        // console.log(experienceData)
        var data=experienceData;
        // console.log(data)
        this.setState({
            experience:data,
            closeBtn:false
        }, ()=>{

            console.log(this.state.experience);
        });
    }
    modalSubmit=(inputText)=>{
        this.setState({
            profile:inputText
        })
    }
    titleHandler=(event)=>{
        this.setState({
            title:event.target.value
        })
    }
    titleEdit=()=>{
        this.setState({
            titleFlag:false,
            titleInput:true,
        })
    }
    editText=(event)=>{
        if(event.key==='Enter' && this.state.title){
            this.setState({
                titleFlag:true,
                titleInput:false,
            })
        }
    }
    openPhoneEdit=()=>{
        this.setState({
            showPhnoneText:false,
            hidePhoneText:true
        })
    }
    phoneHandler=(event)=>{
        this.setState({
            phoneNo:event.target.value
        })
    }
    editPhoneNo=(event)=>{
        if(event.key==='Enter' && validator.isNumeric(this.state.phoneNo)){
            this.setState({
                showPhnoneText:true,    
                hidePhoneText:false
            })
        }
    }
    openEmailEdit=()=>{
        this.setState({
            showEmmailText:false,
            hideEmailText:true,
        })
    }
    emailHandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    editEmail=(event)=>{
        if(event.key==='Enter' && this.state.email){
            this.setState({
                showEmmailText:true,
                hideEmailText:false,
            })
        }
    }
    openLinkedinEdit=()=>{
        this.setState({
            showLinkedInText:false,
            hideLinkedInText:true,
        })
    }
    LinkedinHandler=(event)=>{
        this.setState({
            linkedin:event.target.value
        })
    }
    editLinkedin=(event)=>{
        if(event.key==='Enter' && this.state.linkedin){
            this.setState({
                showLinkedInText:true,
                hideLinkedInText:false,    
            })
        }
    }
    openAddressEdit=()=>{
        this.setState({
            showAddress:false,
            hideAddress:true,
            showAddText:false,
        })
    }
    addressHandler=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    editAddress=(event)=>{
        if(event.key==='Enter'&& this.state.address){
            this.setState({
                showAddText:true,
                hideAddress:false
            })
        }
    }
    openLangEdit=()=>{
        this.setState({
            showLang:false,
            hideLang:true,
            showLangText:false,
        })
    }
    langHandler=(event)=>{
        this.setState({
            lang:event.target.value
        })
    }
    editLang=(event)=>{
        if(event.key==='Enter' && this.state.lang){
            this.setState({
                showLangText:true,
                hideLang:false
            })
        }
    }
    skillHandler=(skillData)=>{
        console.log(skillData)
        this.setState({
            skills:skillData
        })
    }
    handleEducationSubmit=(educationData)=>{
        this.setState({
            education:educationData
        })
    }
    blurTitle=()=>{
        console.log('blur');
        this.setState({
            titleFlag:true,
            titleInput:false,
        })
    }
    checkPhoneNo=()=>{
        if(!validator.isNumeric(this.state.phoneNo)){
            this.setState({
                phoneNoerror:true
            })
        }
        else{
            this.setState({
                phoneNoerror:false
            })
        }
    }
    checkEmail=()=>{
        if(validator.isEmailUserName(this.state.email)){
            this.setState({
                emailError:true
            })
        }
        else{
            this.setState({
                emailError:false
            })
        }
    }
    
    render() {
        const {companyName,designation,description} = this.state.experience || {};
        const {courseName,courseStatus,collegeName,universityName} =this.state.education ||{};
        return (
            <div className="container">
                <table cellSpacing='0px'>
                    <tr className="upper">
                        <td className="left">
                            <p className='photo-text'>Photo</p>
                             <input type='file' text='Photo' className="photo"/>
                        </td>
                        <td className="right">
                           <div className="title-container">
                                {this.state.titleFlag ? <span onClick={this.titleEdit} className="title">{this.state.title} </span>:''}
                                
                                {this.state.titleInput ? <input className="title-input" onBlur={this.blurTitle} value={this.state.title} onChange={this.titleHandler} autoFocus onKeyPress={this.editText}/>:''}
                            </div> 
                            <div className="contacts">
                                <div>
                                 <span> Phone No.-</span>
                                 {this.state.showPhnoneText ?<span className="contact-text" onClick={this.openPhoneEdit}>{this.state.phoneNo}</span>:''}
                                 {this.state.hidePhoneText ? <input className={this.state.phoneNoerror?'errorContacts':'contacts-input'} value={this.state.phoneNo} onChange={this.phoneHandler} onBlur={this.checkPhoneNo} autoFocus onKeyPress={this.editPhoneNo}/>:''}
                                </div>
                                <div>
                                 <span> Email -</span>
                                 {this.state.showEmmailText ? <span className="contact-text" onClick={this.openEmailEdit}>{this.state.email}</span>:''}
                                 {this.state.hideEmailText ? <input className={this.state.phoneNoerror?'errorContacts':'contacts-input'} value={this.state.email} onChange={this.emailHandler}onBlur={this.checkEmail} autoFocus onKeyPress={this.editEmail}/>:''}
                                </div>
                                <div>
                                 <span> Linked In -</span>
                                 {this.state.showLinkedInText ? <span className="contact-text" onClick={this.openLinkedinEdit}>{this.state.linkedin}</span>: ''}
                                 {this.state.hideLinkedInText ? <input className='contacts-input' value={this.state.linkedin} onChange={this.LinkedinHandler} autoFocus onKeyPress={this.editLinkedin}/>: ''}
                                </div>
                            </div>

                            
                        </td>
                     </tr>
                     <tr className="lower">
                         <td className="lower-left">
                                <p className='address' > Address</p>
                                <div className='adress-div'>
                                    {this.state.showAddress ?
                                    <span onClick={this.openAddressEdit} className="address-lang-plus">+</span>: ''}
                                    {this.state.showAddText ?<p className='address-para'onClick={this.openAddressEdit}>{this.state.address}</p>:''}
                                    
                                    {this.state.hideAddress ?<textarea onChange={this.addressHandler} onKeyPress={this.editAddress} className='address-input' placeHolder='Enter your address' value={this.state.address}/>:''}
                                </div>
                                <p className='languages'> Languages<br/> known </p>
                                <div className='lang-div'>
                                    {this.state.showLang ?
                                    <span onClick={this.openLangEdit} className="address-lang-plus">+</span>: ''}
                                    {this.state.showLangText ?<p className='lang-para'onClick={this.openLangEdit}>{this.state.lang}</p>:''}
                                    
                                    {this.state.hideLang ?<textarea onChange={this.langHandler} onKeyPress={this.editLang} className='lang-input' placeHolder='Enter Languages' value={this.state.lang}/>:''}
                                </div>
                             
                         </td> 
                         <td className="lower-right">
                            <span className="bottom-right-text"> Profile </span>
                            <h1>{this.state.profile}</h1>
                            <Modal modalsaveHandler={(inputText)=>this.modalSubmit(inputText)}/>
                            <hr className="line1"/>
                            <span className="bottom-right-text"> Experiences</span>
                             {/* {this.state.experience && this.state.experience.companyName?<h1>{this.state.experience.companyName}</h1> : null}  */}
                              {/* {this.state.experience && this.state.experience.designation?<h1>{this.state.experience.designation}</h1> : null}  */}
                             {/* {this.state.experience && this.state.experience.description?<h1>{this.state.experience.description}</h1> : null} */}
                             <h1>{companyName}</h1>
                             <h1>{designation}</h1>
                             <h1>{description}</h1>

                            <ExperienceDetails handleSubmit={(experienceData)=>this.handleExperienceSubmit(experienceData)}/>
                            <hr className=""/>
                            <span className="bottom-right-text">Skills</span>
                            <ul>
                            {this.state.skills.map((value,index)=>{
                                return <li className="skills-text">{value.name} , {value.designation}</li>
                            })}
                            </ul>
                            <Skills skillSubmit={(skillData)=>this.skillHandler(skillData)}/>
                            
                            <hr className=""/>
                            <span className="bottom-right-text">Education</span>
                                <p>{courseName}</p>
                                <p>{courseStatus}</p>
                                <p>{collegeName}</p>
                                <p>{universityName}</p>
                            <Education educationSubmit={(educationData)=>this.handleEducationSubmit(educationData)}/>
                            
                            <hr className="line1"/>
                         </td>

                     </tr>
                </table>
            </div>
        );
    }
}

export default template;
