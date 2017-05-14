import React from 'react';

const ModalWrap = (props) => {

    return (
            <div className="ModalWrap">
                <div className="Modal">
                    <p className="Modal__title">
                        Do you want to vote this movie?
                        <strong> "Logan" </strong>
                    </p>
                    <button className="Modal__close" onClick={props.toggleModal}>X</button>

                    <div className="Modal__button">
                        <button className="Modal__button__confirm" type="submit">Vote</button>
                        <button className="Modal__button__cancel"  type="reset">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }

export default ModalWrap;