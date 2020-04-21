import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOffice } from '../redux/actions/office'
import { withRouter } from 'react-router-dom'
import CompanyList from './CompanyList'
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

    componentDidMount() {
        this.getOffice()
    }

    getOffice () {
        var q = querystring.parse(this.props.location.search);
        const id = q.id
        this.props.dispatch(getOffice(id))
    }



    render() {
        var q = querystring.parse(this.props.location.search);
        console.log('q', q.id)
        const { company } = this.props;
        const companylist = company.map(item => (
            <CompanyList company={item}
                key={company.id} />
        ))
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        
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

export default withRouter(connect(mapStateToProps)(Details))