import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class NewPoll extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            title : "" // input에서 받은 title
        }
    }

    render(){
        // console.log('this.props: ',this.props)
        return (
            <section className="NewPoll MoviePolls__section">
                <h2>Make a New Poll</h2>
                <form>
                    <fieldset>
                        <p className="NewPoll__input__title">
                            <label htmlFor="input_title">Please Input New Poll's title : </label>
                            <input id="input_title" type="text" 
                                   onChange={(event) => {
                                        {/*console.log(event.target.value);*/}
                                        this.setState({ title: event.target.value });
                                   }}/>
                        </p>
                    </fieldset>
                    <Link to="/polllist">
                        <button type="submit" onClick={()=>{
                                this.props.sendPollInfo(2, [1,2,3], this.state.title);
                            }}>
                            Register
                        </button>
                    </Link>
                </form>
            </section>
        )
    }
}

export default NewPoll;