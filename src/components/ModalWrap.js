import React from 'react';

const ModalWrap = (props) => { // movieInfo, toggleModal, selectedData
    console.log(props);
    return (
            <div className="ModalWrap">
                <div className="Modal">
                    <p className="Modal__title">
                        Would you vote for this movie? 
                        <strong>{props.selectedData.title}</strong>
                    </p>
                    <button className="Modal__close"
                            onClick={props.toggleModal}>X</button>

                    <div className="Modal__button">
                        <button className="Modal__button__confirm" type="submit"
                                // 여러 함수를 실행시켜 주기 위해 onClick시 {()=>{}} 형태로 수정
                                onClick={()=>{props.sendVote(props.selectedData.pollId,
                                                             props.selectedData.movieId);
                                              props.toggleModal();}}>
                            Vote
                        </button>
                        <button className="Modal__button__cancel"  type="reset" 
                                onClick={props.toggleModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    }

export default ModalWrap;