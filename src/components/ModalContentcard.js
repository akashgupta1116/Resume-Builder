import React, { Component } from 'react';
import './modal.css'

class ModalContentcard extends Component {

    plusBtn=()=>{
        console.log('hilld');
        this.props.onSelectLanguage();
    }
    render() {
        return (
            <div>
                    <div className="card">
                        <span>{this.props.content}</span>
                        <button onClick={this.plusBtn} className="plus-btn">+</button>
                    </div>
            </div>
        );
    }
}

export default ModalContentcard;
