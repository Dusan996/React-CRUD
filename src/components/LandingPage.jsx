import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SingleUser from './SingleUser'

class LandingPage extends Component {
    deletedUser() {
        const { isDeleted } = this.props;
        let deleted;
        if (isDeleted === 200) {
            deleted = 'User removed';
        } else if (isDeleted === null) {
            deleted = ''
        } else {
            deleted = 'Something is wrong'
        }
        return deleted
    }
    render() {
        const { userList, handleDelete, handleEditUser, selectUser, selectedUser, userID } = this.props;
        console.log(this.props)
        return (
            <div>
                <h2 style={{ textAlign: 'center', marginTop: '30px' }}>{this.deletedUser()}</h2>
                <Link to='/create'><button style={styles.button}>Add User</button></Link>
                <div style={styles.container}>
                    <div style={{ flex: 1 }}>
                        {userList && userList.map(user => {
                            return (
                                <div key={user.id} style={styles.userBox}>
                                    <h3 onClick={() => selectUser(user)} style={{ cursor: 'pointer' }}>{user.name}</h3>
                                    <button style={styles.button} onClick={() => handleDelete(user.id)}>Remove User</button>
                                    <Link to={`/edit/${userID}`}><button style={styles.button} onClick={() => handleEditUser(user)}>Edit User</button> </Link></div>
                            )
                        })}
                    </div>
                    <div style={styles.userContainer}>
                        {selectedUser.name && <SingleUser user={selectedUser} />}
                    </div>
                </div>

            </div>
        )
    }
}
const styles = {
    button: {
        border: 'none',
        borderBottom: '1px solid grey',
        padding: '10px 20px',
        margin: '20px',
        left: '50%'
    },
    container: {
        display: 'flex'
    },
    userBox: {
        borderBottom: '1px solid grey',
        textAlign: 'center',
        padding: '10px'
    },
    userContainer: {
        flex: 2,
        display: 'flex',
        justifyContent: 'center'

    }
}

export default LandingPage;