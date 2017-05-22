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

    inputSubmit(e) {
        e.preventDefault();
        services.postPoll(this.state.selectedData, 
                           this.state.title).then(() => {
                           this.props.history.push('/');
                          })
    }

    validation() {
        let inputTitle = this.state.title;
        let selectedMovie = this.state.selectedData;
        inputTitle = inputTitle.trim();

        if(inputTitle.length === 0) {
            alert('Please Fill the title');
        } else if (selectedMovie.length === 0){
            alert('Please Select movies');
        } else if (selectedMovies.length < 2) {
            alert('Please Select more than 2 movies');
        }

    }

    render(){
        // console.log('this.props: ',this.props)
        return (
            <section className="NewPoll MoviePolls__section">
                <h2>Make a New Poll</h2>

                <div className="NewPoll__Selection">
                <strong className="NewPoll__Selection__title">Please Select Movies for Making a New Poll</strong>
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
                                <strong>{i.title}</strong>
                            </article>
                        )
                    })}
                    </div>
                </div>
                <form onSubmit={(e) => this.inputSubmit(e)}>
                    <fieldset>
                        <p className="NewPoll__input__title">
                            <label htmlFor="input_title">Please Write a New Poll's title : </label>
                            <input id="input_title" type="text" placeholder="ex) Which movie have you seen recently in theater? "
                                   onChange={(event) => {
                                        this.setState({ title: event.target.value })
                                   }}/>
                        </p>
                    </fieldset>
                    <button className="button__register" type="submit">
                        Register
                    </button>
                </form>
            </section>
        )
    }
}

export default NewPoll;