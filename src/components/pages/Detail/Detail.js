import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAILS'
        });
    }

    render() {
        const movieArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td>
                <h2>{item.title}</h2>
                {item.description}
                {item.movies_id}
                {item.genres_id}
                {item.name}
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

export default connect(mapReduxStateToProps)(Detail);