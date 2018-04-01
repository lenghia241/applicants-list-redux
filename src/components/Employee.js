import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state={
            itemEdit: '', // the edit form is closing or open by this
            id: this.props.employee.id,
            name: this.props.employee.name,
            email: this.props.employee.email,
            phone: this.props.employee.phone,
        }
    }

    // change value of the edit form to state
    onChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    };

    // cancel button click to close the form
    handleCancel = (event) => {
        event.preventDefault();
        this.setState({itemEdit:''});
    }

    // Save button click to dispatch the save action and close the edit form
    handleSave = (event) => {
        event.preventDefault();
        this.props.onSaveEmployee(this.state);
        this.setState({itemEdit:''});
        console.log(this.state);
    }

    render() {
        var {employee} = this.props;

        //function to decide which on is rendered edit form or employee row
        const renderItem = () => {
            // if there is an employee id in itemEdit the edit form will open instead of the normal row of employee
            if(this.state.itemEdit===employee.id) { 
                return (
                    <tr>
                        <td className="td-input">
                            <input type="text" className="textInput" value={this.state.name} name="name" placeholder="Full name" onChange={this.onChange}/>
                        </td>
                        <td className="td-input">
                            <input type="email" className="textInput textInput-email" value={this.state.email} name="email" placeholder="E-mail address" onChange={this.onChange}/>
                        </td>
                        <td className="td-input">
                            <input type="tel" className="textInput" value={this.state.phone} name="phone" placeholder="Phone number" onChange={this.onChange}/>
                        </td>
                        <td className="td-input">
                            <button type="submit" className="buttonDefault buttonDefault-cancel" onClick={this.handleCancel}>Cancel</button>
                            <button type="submit" className="buttonDefault buttonDefault-save" onClick={this.handleSave}>Save</button>
                        </td>
                    </tr>
                )   
            } else {
                return (
                    // normal row to show information of employee
                    <tr>
                        <td className="td-list">{employee.name}</td>
                        <td className="td-list">{employee.email}</td>
                        <td className="td-list">{employee.phone}</td>
                        <td className="td-list">
                            <div className="icon">
                {/*Click the pencil icon to set id for the itemEdit will cause the edit form to open*/}
                                <i className="fa fa-pencil" aria-hidden="true" onClick={() => this.setState({
                                    itemEdit:employee.id,
                                    id: this.props.employee.id,
                                    name: this.props.employee.name,
                                    email: this.props.employee.email,
                                    phone: this.props.employee.phone,
                                })}></i>
                {/*Click on trash bin icon to dispatch delete action in redux*/}
                                <i className="fa fa-trash fa-lg" onClick={() =>this.props.onDeleteEmployee(employee.id)}/>
                            </div>
                        </td>
                    </tr>
                )          
            }
        }
        
        return (
            <tbody>
        {/*Render each row of the table*/}
                {renderItem()}
            </tbody>   
        );
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteEmployee: (id) => {
            dispatch(actions.deleteEmployee(id));
        },
        onSaveEmployee : (employee) => {
            dispatch(actions.saveEmployee(employee));
        } 
    }
};

export default connect(null, mapDispatchToProps)(Employee);