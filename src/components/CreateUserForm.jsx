import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateUserForm extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        city: '',
        street: '',
        zipcode: '',
        phone: ''
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
        const { handleSubmit } = this.props;
        const { name, email, username, city, street, zipcode, phone } = this.state;
        return (
            <div>
                <Link to='/'><button style={styles.button}>Back</button></Link>
                <form style={styles.formStyle} onSubmit={(e) => handleSubmit(e, this.state)}>
                    <label htmlFor="name">Enter name: </label>
                    <input className="formInput" type="text" name="name" id="name" value={name} onChange={e => this.handleChange(e)} placeholder="first name" />
                    <br />
                    <label htmlFor="email">Enter email:</label>
                    <input className="formInput" type="text" name="email" id="email" value={email} onChange={e => this.handleChange(e)} placeholder="email" />
                    <br />
                    <label htmlFor="username">Enter username:</label>
                    <input className="formInput" type="text" name="username" id="username" value={username} onChange={e => this.handleChange(e)} placeholder="username" />
                    <br />
                    <label htmlFor="city">Enter city:</label>
                    <input className="formInput" type="text" name="city" id="city" value={city} onChange={e => this.handleChange(e)} placeholder="city" />
                    <br />
                    <label htmlFor="street">Enter street:</label>
                    <input className="formInput" type="text" name="street" id="street" value={street} onChange={e => this.handleChange(e)} placeholder="street" />
                    <br />
                    <label htmlFor="zipcode">Enter zipcode:</label>
                    <input className="formInput" type="text" name="zipcode" id="zipcode" value={zipcode} onChange={e => this.handleChange(e)} placeholder="zipcode" />
                    <br />
                    <label htmlFor="mobile">Enter mobile number</label>
                    <input className="formInput" type="number" name="phone" id="mobile" value={phone} onChange={e => this.handleChange(e)} placeholder="phone" />
                    <br />
                    <button style={styles.button}>Add User</button>
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
        margin: 'auto'
    },
    button: {
        border: 'none',
        borderBottom: '1px solid grey',
        padding: '10px 20px',
        margin: '20px',
        width: '100px'
    }
}

export default CreateUserForm;