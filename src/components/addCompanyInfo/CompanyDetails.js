import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import '../../mainstylesheet/mainstyle.css';

class CompanyDetails extends Component {
    constructor(props) {
        console.log("constructor called with props", props)
        super(props);
        this.state = {}
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const {addCompanyInfo} = this.props;
        console.log("Data after Input--> ", this.state);
        this.props.nextStep();
    }


    render() {
        const {company} = this.props;
        let {date, zipcode, phone} = this.state;

        return (
            <form className="form1" onSubmit={this.handleSubmit}>

                <div className="formwrapper">
                    <div className="company-info">


                        <Input
                            name="cname"

                        />


                    </div>


                    <h2>Account Information</h2>
                    <Select
                        name="Industry"
                    >
                        <option>Agro</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </Select>


                    <div className="container">
                        <button
                            type="button"
                            className="btn btn-secondary back-btn"
                            variant="primary"
                            onClick={this.props.backStep}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="next-btn"
                            variant="primary"
                        >
                            Next -->
                        </button>
                    </div>
                </div>
            </form>

    );
    }
    }
    export default CompanyDetails;