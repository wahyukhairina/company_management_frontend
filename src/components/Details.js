import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOffice } from '../redux/actions/office'
import { getCompanyDetails } from '../redux/actions/company'
import { withRouter, Link } from 'react-router-dom'
import OfficeList from './OfficeList'
import "react-datepicker/dist/react-datepicker.css";
import querystring from "query-string";

class Details extends Component {

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

    async componentDidMount() {
        await this.getOffice()
    }

    async getOffice() {
        var q = this.props.location.state;
        const id = q.id
        await this.props.dispatch(getCompanyDetails(id))
        this.props.dispatch(getOffice(id))

    }





    render() {
        const { office, detail } = this.props;
        const officelist = office.map(item => (
            <OfficeList office={item}
                key={office.id} />
        ))
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className="card companies">
                            <div className="card-header">
                                <h5 className="card-title">{detail.name}</h5>
                            </div>
                            <div className="card-body">
                                <div className="detail">
                                    <label>Address</label>
                                    <p className="card-text">{detail.address}</p>
                                </div>
                                <div className="detail">
                                    <label>Revenue</label>
                                    <p className="card-text">{detail.revenue}</p>
                                </div>
                                <div className="detail">

                                    <label>Phone No:</label>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                            <p className="card-text">{detail.phone}</p>
                                        </div>
                                        <div className='col-md-4'><Link to="/"><button >Back to Overview</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='title'>Offices</div>
                    <div className='row'>
                        {officelist}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        office: state.office.office,
        detail: state.company.detail
    }
}

export default withRouter(connect(mapStateToProps)(Details))