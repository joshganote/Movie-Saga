import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateToProps from '../../redux/StateToProps';

class Detail extends Component {
    // expected data type to be seen on page load
    componentDidMount(title, description, name) {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: {
                title,
                description,
                name,
            }
        });


    }

    goBack = (event) => {
        this.props.history.push('/');
    }

    goToDetail = (event) => {
        this.props.history.push('/edit');
    }

    render() {
        // mapping through data structure to get values needed
        const moviesArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td>
                    <td>
                        <h2>{item.title}</h2>
                        {item.description}
                    </td>
                    <h4>{item.name}</h4>
                </td>
            </tr>
        })

        return (
            <table className="App">
                <button onClick={this.goBack}>Go Back</button>
                <button onClick={this.goToDetail}>Edit</button>
                <tbody>{moviesArray}</tbody>

            </table>

        )
    }
}

export default connect(StateToProps)(Detail);