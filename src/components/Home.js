import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCompany, postCompany } from '../redux/actions/company'

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

    onSubmit = (event) => {
        event.preventDefault()
        const data = []
        data.name = this.state.name
        data.address = this.state.address
        data.revenue = this.state.revenue
        data.phone = this.state.phone
        this.props.dispatch(postCompany(data))
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Create Company</h5>
                                <form>
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" class="form-control" id="name" name="name" placeholder="name" onChange={this.onChangeValue}/>
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
                                    <button type="submit" onClick={this.onSubmit} class="btn btn-primary">Create</button>
                                </form>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Create Office</h5>
                                <form>
                                    <div class="form-group">
                                        <label>Name :</label>
                                        <input type="text" class="form-control" id="name" placeholder="name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Location :</label>
                                        <input type="text" class="form-control" id="address" placeholder="address" />
                                    </div>
                                    <div class="form-group">
                                        <label>Office Start Date :</label>
                                        <input type="text" class="form-control" id="revenue" placeholder="revenue" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Company</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        company: state.company
    }
}

export default connect(mapStateToProps)(Home)