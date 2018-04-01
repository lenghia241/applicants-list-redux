import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name:'',
            email:'',
            phone:'',
        }
    }

    // Handle change for add new form
    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    };

    // Button click dispath saveEmployee action to Redux
    handleClick = (event) => {
        event.preventDefault();
        this.props.onSaveEmployee(this.state);
        this.setState({name:'', email:'', phone:''});
    }
    
    render() {
        const {name, email, phone}= this.state;
        return (
            <div>
                <form className="formStyle">
                    <input type="text" className="textInput" value={this.state.name} name="name" placeholder="Full name" onChange={this.onChange} required/>
                    <input type="email" className="textInput textInput-email" value={this.state.email} name="email" placeholder="E-mail address" onChange={this.onChange} required/>
                    <input type="tel" className="textInput" value={this.state.phone} name="phone" placeholder="Phone number" onChange={this.onChange} required/>
                    <button 
                        type="submit"
                        //button turn blue if you type smt in the input box
                        className={(name||email||phone) ? "buttonDefault buttonDefault-blue" : "buttonDefault"}
                        onClick={this.handleClick}
                        >Add new</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveEmployee : (employee) => {
            dispatch(actions.saveEmployee(employee));
        } 
    }
};

export default connect(null, mapDispatchToProps)(Form);