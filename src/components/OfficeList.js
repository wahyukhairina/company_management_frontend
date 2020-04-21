import React from 'react'
import cross from '../upload/close.png';
import { connect } from 'react-redux';
import { deleteOffice } from '../redux/actions/office'
import { withRouter } from "react-router-dom";
import './Details.css'
const OfficeList = ({ office, dispatch, }) => {
   const onDelete =  (id) =>  {
     dispatch(deleteOffice(id))
    }

  
    return (
        <div className='col-md-4 companies' key={office.id}>
            <div className="card">
                <div className="card-header">
                <h5 className="card-title">{office.name}</h5>
                <button  className="cross-button" onClick={() => onDelete (office.id)}> <img className="cross-icon" src={cross} alt='delete' /></button> 
                </div>
                <div className="card-body">
                <div className="detail">
                <label>Location</label>
                <p className="card-text">Lat - {office.latitude}</p>
                <p className="card-text">Log - {office.longitude}</p>
                </div>
                <div className="detail">
                <label>Office Start Date</label>
                <p className="card-text">{office.start_date}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(connect()(OfficeList))