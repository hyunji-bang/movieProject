import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class ModalWrap extends Component { // 
    constructor(props) { // movieInfo, toggleModal, selectedData, sendVoteInfo
        super(props); 
        this.state = {
            name : "" // input에서 받은 name
        }
    }

    render(){
        // console.log('this.props:',this.props);
        //console.log('this.props.selectedData.pollId:', this.props.selectedData.pollId)
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
                                //console.log(event.target.value); 
                                this.setState({ name: event.target.value });
                            }}/>
                        </p>

                        <div className="Modal__button">
                            <Link to="/result">
                                <button className="Modal__button__confirm" type="submit"
                                        // 여러 함수를 실행시켜 주기 위해 onClick시 {()=>{}} 형태로 수정
                                        onClick={()=>{this.props.sendVoteInfo(this.props.selectedData.pollId,
                                                                            this.props.selectedData.movieId);
                                                    this.props.toggleModal();}}>
                                    Vote
                                </button>
                            </Link>
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