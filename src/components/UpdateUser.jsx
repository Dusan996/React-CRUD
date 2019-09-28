import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateUser extends Component {

    state = {
        id: '',
        name: '',
        phone: '',
        email: '',
        username: '',
        city: '',
        street: '',
        zipcode: ''
    }

    componentDidMount() {
        const { id, name, phone, email, username } = this.props.updateUser;
        const { city, street, zipcode } = this.props.updateUser.address;
        this.setState({ id, name, phone, email, username, city, street, zipcode })
    }
    handleChange = e => {
        let value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
        console.log(this.state)
    }
    render() {
        console.log(this.props.updateUser)
        const { submitEditedUser } = this.props;
        const { name, phone, email, username, city, street, zipcode } = this.state;
        return (
            <div>
                <Link to='/'><button style={styles.backButton}>Back</button></Link>
                <div style={{ textAlign: 'center', padding: '20px 0px' }}><h3>Editing {name}</h3></div>
                <form style={styles.formStyle} onSubmit={(e) => submitEditedUser(e, this.state)}>
                    <label htmlFor="name">Edit name:</label>
                    <input className="formInput" name="name" type="text" id="name" value={name} onChange={e => this.handleChange(e)} />
                    <br />
                    <label htmlFor="phone">Edit phone:</label>
                    <input className="formInput" name="phone" type="text" id="phone" value={phone} onChange={e => this.handleChange(e)} />
                    <br />
                    <label htmlFor="email">Edit email:</label>
                    <input className="formInput" name="email" type="text" id="email" value={email} onChange={e => this.handleChange(e)} />
                    <br />
                    <label htmlFor="username">Edit username:</label>
                    <input className="formInput" name="username" type="text" id="username" value={username} onChange={e => this.handleChange(e)} />
                    <br />
                    <label htmlFor="city">Edit city:</label>
                    <input className="formInput" name="city" type="text" id="city" value={city} onChange={e => this.handleChange(e)} />
                    <br />
                    <label htmlFor="">Edit street:</label>
                    <input className="formInput" name="street" type="text" value={street} onChange={e => this.handleChange(e)} />
                    <br />
                    <label htmlFor="">Edit zipcode:</label>
                    <input className="formInput" name="zipcode" type="text" value={zipcode} onChange={e => this.handleChange(e)} />
                    <button style={styles.saveButton}>Save changes</button>
                </form>

            </div>
        )
    }
}

const styles = {
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        margin: 'auto',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        padding: '20px'
    },
    saveButton: {
        padding: '10px 20px',
        width: '150px',
        marginTop: '10px'
    },
    backButton: {
        border: 'none',
        borderBottom: '1px solid grey',
        padding: '10px 20px',
        margin: '20px',
        width: '100px'
    }
}

export default UpdateUser;