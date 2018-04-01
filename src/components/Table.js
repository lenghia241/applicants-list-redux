import React, { Component } from 'react';
import Employee from './Employee';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Table extends Component {

    // dispatch type of sort to redux
    handleClick = (by) => {
        this.props.onSort(by);
    }

    render() {
        var { employees, sort } = this.props;

        // Sort handle function using the sort.by is the column  name 
        if (sort.by === 'name') {
            employees.sort((a, b) => {
                if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
                else if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
                else return 0;
            });
        } else if (sort.by === 'email') {
            employees.sort((a, b) => {
                if (a.email.toUpperCase() > b.email.toUpperCase()) return 1;
                else if (a.email.toUpperCase() < b.email.toUpperCase()) return -1;
                else return 0;
            });
        } else {
            employees.sort((a, b) => {
                if (a.phone > b.phone) return 1;
                else if (a.phone < b.phone) return -1;
                else return 0;
            });
        }

        // render each employee by mapping state took from redux
        var elmEmployee = employees.map((employee, index) => {
            return (
                <Employee
                    key={index}
                    employee={employee}
                />
            )
        });


        return (
            <div className="tableStyle">
                <table  className="table-hover">
                    <thead>
                        <tr>
                            {/*Table header when clicked will dispatch the sort base on the header name, 
                            in the same time change style of the header to more bold text and add an arrow*/}
                            <th 
                                onClick={() => this.handleClick('name')}
                                style={(this.props.sort.by === 'name') ? {fontWeight: 'bold'} : {fontWeight: '500'}}
                            >Name &nbsp;
                                {(this.props.sort.by === 'name') ? <i className="fa fa-arrow-down" /> : ''}
                            </th>

                            <th 
                                onClick={() => this.handleClick('email')}
                                style={(this.props.sort.by === 'email') ? {fontWeight: 'bold'} : {fontWeight: '500'}}
                            >E-mail address &nbsp;
                                {(this.props.sort.by === 'email') ? <i className="fa fa-arrow-down" /> : ''}
                            </th>

                            <th 
                                onClick={() => this.handleClick('phone')}
                                style={(this.props.sort.by === 'phone') ? {fontWeight: 'bold'} : {fontWeight: '500'}}
                            >Phone number &nbsp;
                                {(this.props.sort.by === 'phone') ? <i className="fa fa-arrow-down" /> : ''}
                            </th>
                            <th />
                        </tr>
                    </thead>

                    {elmEmployee}

                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        sort: state.sort
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortEmployee(sort));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);