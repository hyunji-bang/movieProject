import React from 'react';
import { Route, Link } from 'react-router-dom';

const NewPoll = () => {
    return (
        <section className="NewPoll MoviePolls__section">
            <h2>Make a New Poll</h2>
            <form>
                <fieldset>
                    <p className="NewPoll__input__title">
                        <label htmlFor="input_title">Input New Poll's title : </label>
                        <input id="input_title" type="text"/>
                    </p>
                </fieldset>
                <Link to="/result"><button type="submit">Register</button></Link>
            </form>
        </section>
    )
}

export default NewPoll;