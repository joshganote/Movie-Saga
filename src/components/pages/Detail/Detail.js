import React, { Component } from 'react';
import { connect } from 'react-redux';
import StateToProps from '../../redux/StateToProps';

class Detail extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_GENRES'
        });


    }

    goBack = (event) => {
        this.props.history.push('/');
    }

    goToDetail = (event) => {
        this.props.history.push('/edit');
    }

    render() {
        const genresArray = this.props.store.genres.map((item, index) => {
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
                <tbody>{genresArray}</tbody>

            </table>

        )
    }
}

export default connect(StateToProps)(Detail);