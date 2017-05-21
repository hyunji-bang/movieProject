import React, { Component } from 'react';
import * as service from '../services/post';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultData: {},
            moivesData: []
        };
    }

    componentWillMount() {
        const pollId = this.props.match.params.id;
        // 현재 투표를 가지고와서, 어떤 영화를 투표했는지 movieIds로 filtering 후
        // 그 movie 정보 안에서, 현재 투표정보랑 match되는 투표결과를 가지고 오기
        service.getPoll(pollId).then((poll) => { 

            // params ['id=1', 'id=2', 'id=3'] => join('&') => id=1&id=2&id=3 => + '?' => ?id=1&id=2&id=3
            const param = '?' + poll.data.movieIds.map((i, key) => {
                return `id=${i}`;
            }).join('&');
            
            service.getMovie(param).then((movies) => {
                // 현재 투표의 영화 상세정보
                const data = movies.data;

                // 여기서 프로미스 객체를 한번에 map 으로 배열화
                const promises = data.map((j, key2) => {
                    return service.getVote(poll.data.id, j.id);
                });

                // 위에서 한번에 모은 프로미스 객체의 요청이 끝날때까지 기다림
                // Promise.all => Promise.all([req1, req2, req3]) 
                Promise.all(promises).then((res3) => {
                    res3.map((i, key) => {
                        data[key].votes = i.data;
                    });

                    this.setState({
                        moivesData: data
                    });
                });
            });
        });
    }

    render() {
        return (
            <section className="Result MoviePolls__section">
                <h2>Poll Result</h2>
                <div className="Result__MovieList">
                {this.state.moivesData.map((i, key) => {
                    return (
                        <article className="Result__MovieList__item" key={key}>
                            <strong className="Result__MovieList__item__title">{i.title} <span>({i.year})</span></strong>
                            <img src={i.imageUrl} alt={i.title}/>

                            {/* 투표한 사람들 목록 보여주기 */}
                            <dl className="Result__MovieList__item__voter">
                                <dt>Voters</dt>
                                {i.votes.map((i, key) => {
                                    return (
                                        <dd key={key}>{i.name}</dd>
                                    )
                                })}
                            </dl>
                        </article>
                    )
                })}
                </div>
            </section>
        )
    }
}

export default Result;