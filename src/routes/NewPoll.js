import React from 'react';

const NewPoll = () => {
    return (
        <section className="MoviePolls__NewPoll MoviePolls__section">
            <h2>Make a New Poll</h2>
            <form>
                <fieldset>
                    <p className="MoviePolls__NewPoll__input__title">
                        <label htmlFor="input_title">Input New Poll's title : </label>
                        <input id="input_title" type="text"/>
                    </p>
                </fieldset>
            </form>
        </section>
    )
}

export default NewPoll;