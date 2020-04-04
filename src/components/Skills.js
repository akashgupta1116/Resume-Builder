import React, { Component } from 'react';
import './skills.css';
import {FaTimes} from 'react-icons/fa';
import {FaPlus} from 'react-icons/fa';
import { FaExclamationCircle} from 'react-icons/fa';



class Skills extends Component {
    constructor(props){
        super(props);
        this.state={
            skillDropdown:'',
            addSkill:[{name:'', designation:'',errorCss : false}],
            notAddFlag:false,
            errorCss:true,
            closeFlag:true,
            hideModal: true
        }
    }
    SkillsopenModal=()=>{
        // document.getElementsByClassName('Skillsmodal')[0].style.display = "block";
        this.setState({
            closeFlag:false,
            hideModal: false
        })
      }
    SkillscloseModal=()=>{
        // document.getElementsByClassName('Skillsmodal')[0].style.display="none";
        
        this.setState({
            addSkill:[{name:'', designation:''}],
            notAddFlag:false,
            closeFlag:true,
        }, ()=>setTimeout(()=>{this.setState({hideModal:true})},400))
      }
    addSkillElement=(index)=>{
        if(this.state.addSkill.length<5){
            let addData=this.state.addSkill;
            addData.splice(index+1,0,{name:'', designation:''});
            this.setState({
                addSkill:addData,
            });
        } else {
            this.setState({
                notAddFlag:true
            });
        }
        
    }
    removeElement=(index)=>{
        if(this.state.addSkill.length>1){
            let removeData = [...this.state.addSkill];
            removeData.splice(index,1);
            this.setState({
                addSkill:removeData,
                notAddFlag:false
            });
        }
        
    }
    skillHandler=(event,index,propertyName)=>{
        var addSkill = {...this.state.addSkill};
        addSkill[index][propertyName] = event.target.value;
        this.setState({
            addSkill: addSkill
        });}
    check=(obj,index,e)=>{
         console.log(obj)
        if(e.target.value ===''){
            let addSkill = [...this.state.addSkill];
            addSkill[index].errorCss = true;
            // console.log('error')
            this.setState({
                addSkill:addSkill
            })
        }
        
        else{
            let addSkill = [...this.state.addSkill];
            addSkill[index].errorCss = false;
            this.setState({
                addSkill:addSkill 
            })
        }
    }
    empty=()=>{
        for(var i=0;i<this.state.addSkill.length;i++){
            if(!this.state.addSkill[i].name || !this.state.addSkill[i].designation ){
                return true
            }
            return false
        }
    }
    skillSubmitHandler=()=>{
        if(!this.empty() ){
        const skillData = this.state.addSkill;
        this.props.skillSubmit(skillData)
        
        this.setState({
            closeFlag:true
        },()=>setTimeout(()=>{this.setState({hideModal:true})},400))
     }
    }

    render() {
        return (
            <div>
                  <button onClick={this.SkillsopenModal} className="Skillsmodal-btn">+</button>

                <div className={this.state.closeFlag?this.state.hideModal?"displayNone":"closeSkillsmodal":'openSkillsmodal'} >
                    <div className={this.state.closeFlag?"close-skill-modal":'Skillsmodal-content'}>
                        <header className="header"> 
                            <span onClick={this.SkillscloseModal} className="Skillsclose-btn">&times;</span>
                            <h2>Skills</h2>
                            <hr/>   
                        </header>
                       
                        {this.state.addSkill.map((value,index)=>{
                            return <div className="Skills-middle">
                            <div className="Skills-middle-left">
                               <input onBlur={(e)=>this.check(value,index,e)} className={value.errorCss?'error-message':'Skills-lower-inputs'} type="text"onChange={(e)=>this.skillHandler(e, index, 'name')} placeHolder="Skills" value={value.name}/>
                            </div>
                            <div className="Skills-middle-right">
                               <select  className="Skills-lower-inputs" onChange={(e)=>this.skillHandler(e, index,'designation')}>
                                       <option hidden selected >Select</option>
                                       <option value="1 year">1 year</option>
                                       <option value="2 year">2 year</option>
                                       <option value="3 year">3 year</option>
                               </select>
                               <div className="addSkill" onClick={()=>this.addSkillElement(index)}>
                                   {/* <span className="add-btn">Add</span> */}
                                   <span className="add-btn"><FaPlus/></span>
                               </div>
                               <div className="remove-skill" onClick={()=>this.removeElement(index)}>
                                   {/* <span className="remove-btn">remove</span> */}
                                   <span className="remove-btn"><FaTimes/></span>
                               </div> 
                            </div>
                       </div>
                        })}
                          {this.state.notAddFlag ? <span className="no-more-add"><FaExclamationCircle/> You cannot add more </span>:''}
                        <footer className="Skills-footer-div">
                            <div className="Skills-footer-btn">
                            <button  onClick={this.SkillscloseModal}className="Skills-footer-cancel-btn"> Cancel</button>
                            <button className="Skills-submit" onClick={this.skillSubmitHandler}>Submit</button>
                            </div>
                        </footer>
                     </div> 
                </div>
            </div>
            
        );
    }
}

export default Skills;