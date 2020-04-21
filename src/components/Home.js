import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCompany, postCompany } from '../redux/actions/company'
import { postOffice } from '../redux/actions/office'
import { withRouter } from 'react-router-dom'
import CompanyList from './CompanyList'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Home.css'
class Home extends Component {

    state = {
        name: '',
        address: '',
        revenue: '',
        phone: '',
        start: new Date(),
        id_company: '',
        latitude: '',
        longitude: '',
        office_name: '',
    }

    componentDidMount() {
        this.getCompany()
    }

    getCompany = () => {
        this.props.dispatch(getCompany())
    }

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onClickCalendar = (event) => {
        this.setState({ start: event })
        console.log(this.state.start, 'tanggal')
    };
    onSubmitOffice = async (event) => {
        event.preventDefault()
        event.target.reset()
        const data = {
            id_company : this.state.id_company,
            name : this.state.office_name,
            start_date : this.state.start,
            latitude : this.state.latitude,
            longitude : this.state.longitude,
        }
        await this.props.dispatch(postOffice(data))
    }

    onSubmitCompany = async (event) => {
        event.preventDefault()
        event.target.reset()
        const data = {
            name: this.state.name,
            address: this.state.address,
            revenue: this.state.revenue,
            phone: this.state.revenue
        }
        await this.props.dispatch(postCompany(data))
    }

    render() {
        const { company } = this.props;
        const companylist = company.map(item => (
            <CompanyList company={item}
                key={company.id} />
        ))
        return (
            <>
                <div className='container home'>
                    <div className='row'>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="title">Create Company</h5>
                                <form onSubmit={this.onSubmitCompany}>
                                    <div class="form-group">
                                        <label>Name :</label>
                                        <input type="text" class="form-control" id="name" name="name" placeholder="name" onChange={this.onChangeValue} />
                                    </div>
                                    <div class="form-group">
                                        <label>Address :</label>
                                        <input type="text" class="form-control" id="address" name="address" placeholder="address" onChange={this.onChangeValue} />
                                    </div>
                                    <div class="form-group">
                                        <label>Revenue :</label>
                                        <input type="text" class="form-control" id="revenue" name="revenue" placeholder="revenue" onChange={this.onChangeValue} />
                                    </div>
                                    <div class="form-group">
                                        <label>Phone No :</label>
                                        <input type="text" class="form-control" id="phone" name="phone" placeholder="phone" onChange={this.onChangeValue} />
                                    </div>
                                    <div className="form-button">
                                        <button type="submit" class="button create">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="title">Create Office</h5>
                                <form onSubmit={this.onSubmitOffice} >
                                    <div class="form-group">
                                        <label>Name :</label>
                                        <input type="text" class="form-control" id="office_name" name='office_name' placeholder="office name" onChange={this.onChangeValue}/>
                                    </div>
                                    <div class="form-group">
                                        <label>Location :</label>
                                        <div className='row'>
                                            <div className='col-md-6'><input type="text" class="form-control" id="longitude" name='longitude' placeholder="longitude" onChange={this.onChangeValue}/></div>
                                            <div className='col-md-6'><input type="text" class="form-control" id="latitude" name='latitude' placeholder="latitude" onChange={this.onChangeValue} /></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Office Start Date :</label>
                                        <DatePicker
                                        
                                        dateFormat="yyyy/MM/dd"
                                            selected={this.state.start}
                                            onChange={this.onClickCalendar}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Company :</label>
                                        <select class="form-control" id="exampleFormControlSelect1" name='id_company' onChange={this.onChangeValue}>
                                            {company.map((company, index) => (
                                                <option key={index} value={company.id}>
                                                    {company.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-button">
                                        <button type="submit" class="button create">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='title'>Companies :</div>
                    <div className='row'>
                        {companylist}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        company: state.company.company
    }
}

export default withRouter(connect(mapStateToProps)(Home))