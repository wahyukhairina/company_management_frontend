import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCompany, postCompany } from '../redux/actions/company'
import { withRouter } from 'react-router-dom'
import CompanyList from './CompanyList'
import './Home.css'
class Home extends Component {

    state = {
        name: '',
        address: '',
        revenue: '',
        phone: ''
    }

    componentDidMount() {
        this.getCompany()
    }

    getCompany = async () => {
        await this.props.dispatch(getCompany())
    }

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = async (event) => {
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
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" id="name" name="name" placeholder="name" onChange={this.onChangeValue} />
                                    </div>
                                    <div class="form-group">
                                        <label>Address</label>
                                        <input type="text" class="form-control" id="address" name="address" placeholder="address" onChange={this.onChangeValue} />
                                    </div>
                                    <div class="form-group">
                                        <label>Revenue</label>
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
                                <form >
                                    <div class="form-group">
                                        <label>Name :</label>
                                        <input type="text" class="form-control" id="name" placeholder="name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Location :</label>
                                        <div className='row'>
                                            <div className='col-md-6'><input type="text" class="form-control" id="longitude" placeholder="longitude" /></div>
                                            <div className='col-md-6'><input type="text" class="form-control" id="latitude" placeholder="latitude" /></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Office Start Date :</label>
                                        <input type="text" class="form-control" id="revenue" placeholder="revenue" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Company</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
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
                    <div className='title'>Companies</div>
                    <div className='row'>
                        {companylist}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('iniiii', state)
    return {
        company: state.company.company
    }
}

export default withRouter(connect(mapStateToProps)(Home))