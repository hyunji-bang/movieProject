import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class ModalWrap extends Component { // 
    constructor(props) { // movieInfo, toggleModal, selectedData, sendVoteInfo
        super(props); 
        this.state = {
            name : "" // input에서 받은 name
        }
    }
    validation() {
        let inputName = this.state.name;
        inputName = inputName.trim();

        if(inputName.length === 0) {
            alert('Please Fill your name');
        }
    }
    render(){
        return (
                <div className="ModalWrap">
                    <div className="Modal">
                        <p className="Modal__title">
                            Would you vote for this movie? 
                            <strong>{this.props.selectedData.title}</strong>
                        </p>
                        <button className="Modal__close"
                                onClick={this.props.toggleModal}>X</button>

                        <p className="Modal__input__name">
                            <input id="input_name" type="text" placeholder="Please Input your name"
                                   onChange={(event) => { 
                                this.setState({ name: event.target.value });
                            }}/>
                        </p>

                        <div className="Modal__button">
                            <button className="Modal__button__confirm" type="submit" onClick={() => {
                                this.props.setVote(this.props.pollData.id, this.props.selectedData.id, this.state.name);
                                this.validation();
                            }}>
                                Vote
                            </button>
                            <button className="Modal__button__cancel"  type="reset" 
                                    onClick={this.props.toggleModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default ModalWrap;