import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as services from '../services/post';
import update from 'react-addons-update';

class NewPoll extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            title : "", // input에서 받은 title
            selectedData: [],
            moviesData: []
        }
    }

    componentWillMount() {
        services.getMovie().then((res) => {
            this.setState({ moviesData: res.data });
        });
    }

    render(){
        // console.log('this.props: ',this.props)
        return (
            <section className="NewPoll MoviePolls__section">
                <h2>Make a New Poll</h2>

                <div className="NewPoll__Selection">
                <strong>Please Select Movies for Making a New Poll</strong>
                    <div className="NewPoll__MovieList">
                    {this.state.moviesData.map((i, key) => {
                        return (
                            <article className={`NewPoll__MovieList__item ${this.state.selectedData.indexOf(i.id) != -1 ? `NewPoll__MovieList__item--selected` : ``}`} 
                                    key={key} onClick={() => {
                                const data = Object.assign([], this.state.selectedData);
                                const idx = data.indexOf(i.id);
                                if (idx == -1) {
                                    data.push(i.id);
                                } else {
                                    data.splice(idx, 1);
                                }

                                this.setState({ selectedData: data });
                            }}>
                                <img src={i.imageUrl} />
                            </article>
                        )
                    })}
                    </div>
                </div>
                <form>
                    <fieldset>
                        <p className="NewPoll__input__title">
                            <label htmlFor="input_title">Please Input New Poll's title : </label>
                            <input id="input_title" type="text" 
                                   onChange={(event) => {
                                        this.setState({ title: event.target.value });
                                   }}/>
                        </p>
                    </fieldset>
                    <Link to="/polllist" className="button__register"
                        onClick={()=>{
                            services.postPoll(this.state.selectedData, this.state.title);
                        }}>
                        Register
                    </Link>
                </form>
            </section>
        )
    }
}

export default NewPoll;