import React from 'react';

const SingleUser = (props) => {
    console.log(props);
    const { email, name, username, phone, website, address } = props.user;
    return (
        <div style={styles.singleUser}>
            <div>
                <h3>{name}</h3>
            </div>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
            <p>Mobile: {phone}</p>
            <p>Website: {website}</p>
            <p>City: {address.city}</p>
            <p>Street: {address.street}</p>
            <p>Zipcode: {address.zipcode}</p>
            <div>

            </div>
        </div>
    )
}
const styles = {
    singleUser: {
        border: '1px solid grey',
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 80%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        height: '500px'
    }
}

export default SingleUser;

