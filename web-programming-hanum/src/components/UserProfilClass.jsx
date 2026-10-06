import React, { Component } from 'react'

class UserProfilClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "Hanum",
            isOnline: true,
        };
    }

    toggleOnline = () => {
        this.setState({ isOnline: !this.state.isOnline });
    };

    render() {
        return (
            <div>
                <h3>Nama: {this.state.nama}</h3>
                <p>Status: {this.state.isOnline ? "Online" : "Offline"}</p>
                <button onClick={this.toggleOnline}>ubah Status</button>
            </div>
        );
    }
}

export default UserProfilClass;
