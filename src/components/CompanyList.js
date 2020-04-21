import React from 'react'
import './Home.css'
import cross from '../upload/close.png';
import { connect } from 'react-redux';
import { deleteCompany } from '../redux/actions/company'

const CompanyList = ({ company, dispatch }) => {
   const onDelete =  (id) =>  {
     dispatch(deleteCompany(id))
    }
    return (
        <div className='col-md-4 companies' key={company.id}>
            <div className="card companies">
                <div className="card-header">
                <h5 className="card-title">{company.name}</h5>
                <button onClick={() => onDelete (company.id)}> <img className="cross-icon" src={cross} alt='delete' /></button> 
                </div>
                <div className="card-body">
                <div className="detail">
                <label>Address</label>
                <p className="card-text">{company.address}</p>
                </div>
                <div className="detail">
                <label>Revenue</label>
                <p className="card-text">{company.revenue}</p>
                </div>
                <div className="detail">
                <label>Phone No:</label>
                <p className="card-text">{company.phone}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default connect()(CompanyList)