import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES'
        });
    }

    clickEvent = (event) => {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: this.state,
        })
        this.props.history.push('/detail');
    }

    render() {
        const movieArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td onClick={(event) => this.clickEvent(event, item.name)}>
                    <img alt="movie poster" src={item.poster}></img>
                </td>
                <td>
                    <h2>{item.title}</h2>
                    {item.description}
                </td>
            </tr>
        })

        return (
            <table className="App">
                <tbody>{movieArray}</tbody>
            </table>

        )
    }
}
// Makes our reducers available in our component
const mapReduxStateToProps = (store) => ({
    store
});

export default connect(mapReduxStateToProps)(Home);