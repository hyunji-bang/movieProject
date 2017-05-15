import React from 'react';

const ModalWrap = (props) => {

    return (
            <div className="ModalWrap">
                <div className="Modal">
                    <p className="Modal__title">
                        Would you vote for this movie? 
                        <strong>{props.selectedData.title}</strong>
                    </p>
                    <button className="Modal__close" onClick={props.toggleModal}>X</button>

                    <div className="Modal__button">
                        <button className="Modal__button__confirm" type="submit">Vote</button>
                        <button className="Modal__button__cancel"  type="reset" onClick={props.toggleModal}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }

export default ModalWrap;