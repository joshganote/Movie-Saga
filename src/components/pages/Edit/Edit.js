import React, { Component} from 'react';
import { connect } from 'react-redux';
import StateToProps from '../../redux/StateToProps';

class Edit extends Component {

    state = {
        name: '',
        description: ''
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAILS'
        });
}

handleChange = (event, inputKey) => {
    this.setState({
        
        [inputKey]: event.target.value
    })
}

goBack = (event) => {
    this.props.history.push('/detail');
}

   

    render(){
        const genresArray = this.props.store.genres.map((item, index) => {
            return <tr key={index}>
                <td>
                    <td>{item.description}</td>
                    <h4>{item.name}</h4>
                </td>
            </tr>
        })
        return(
            <div>
            <div>EDIT</div>
            <button onClick={this.goBack}>Back</button>
            <button>Cancel</button>
            <button onSubmit={this.handleSubmit}>Save </button>
            <br/>
            <input
                    type="text"
                    placeholder="Genre"
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event, 'name')}
                />
                <br/>
                 <input
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={(event) => this.handleChange(event, 'description')}
                    required
                />
            {genresArray}
            </div>
    
        )
    }
}

export default connect(StateToProps)(Edit);