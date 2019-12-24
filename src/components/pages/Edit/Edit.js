import React, { Component} from 'react';
import { connect } from 'react-redux';
import StateToProps from '../../redux/StateToProps';

class Edit extends Component {

// the two key values to update on database
    state = {
        title: '',
        description: ''
    }

    // only loads the title and description on page load
    componentDidMount(title, description) {
        this.props.dispatch({
            type: 'GET_MOVIES',
            payload: {
                title,
                description,
            }
        });
}

handleChange = (event, inputKey) => {
    this.setState({
        
        [inputKey]: event.target.value
    })
}

cancelNewInput = (event) => {
     //clear inputs
     this.setState({
        title: '',
        description: ''
    })
}

handleSubmit = (event) => {
    this.props.dispatch({
        type: 'PUT_EDIT',
        payload: this.state
    })

    // takes user back to detail page after clicking save
    this.props.history.push('/detail');
}
   

    render(){
        // mapping through data to get title and description
        const moviesArray = this.props.store.movies.map((item, index) => {
            return <tr key={index}>
                <td>
                    <h4>{item.title}</h4>
                    <td>{item.description}</td>
                </td>
            </tr>
        })
        return(
            <div>
            <button onClick={this.cancelNewInput}>Cancel</button>
            <button onClick={this.handleSubmit}>Save </button>
            <br/>
            <input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(event) => this.handleChange(event, 'title')}
                />
                <br/>
                 <input
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={(event) => this.handleChange(event, 'description')}
                    required
                />
            {moviesArray}
            </div>
    
        )
    }
}

export default connect(StateToProps)(Edit);