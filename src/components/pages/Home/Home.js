import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES'
        });
    }

    render() {
        const movieArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td><img alt="movie poster" src={item.poster}></img></td>
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