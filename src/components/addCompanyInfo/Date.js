import React, {Component} from 'react';
import {addCompanyInfo} from '../action/Action';
import {connect} from 'react-redux';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e) => {
        const { addCompanyInfo } = this.props;
        let callback = this.props.callback || function () {
        };
        const item = e.target.name;
        const value = e.target.value;
        console.log("printing event in handle check", e);
        callback({item, value});
        addCompanyInfo({[item]: value})

    }

    render() {
        const {company, name, label} = this.props;

        return (
            <div className="input-div">
                <label className="container">{label}
                    <input
                        name={name}
                        type="date"
                        onChange={this.handleChange}

                    />

                </label>


            </div>


        )


    }
}

const mapStateToProps = state => ({
    company: state.Company,
})

const mapDispatchToProps = dispatch => ({
    addCompanyInfo: (data) => dispatch(addCompanyInfo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Date);