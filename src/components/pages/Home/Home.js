import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateToProps from '../../redux/StateToProps';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES'
        });
    }

    clickEvent = (event, id) => {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: id,
        })
        this.props.history.push('/detail');
    }

    render() {
        const movieArray = this.props.store.movies.map((item, index) => {
            return (
                <tr key={index}>
                    <td onClick={(event) => this.clickEvent(event, item.name)}>
                        <img alt="movie poster" src={item.poster}></img>
                    </td>
                    <td>
                        <h2>{item.title}</h2>
                        {item.description}
                    </td>
                </tr>
            )
        })

        return (
            <table className="App">
                <tbody>{movieArray}</tbody>
            </table>

        )
    }
}

export default connect(StateToProps)(Home);