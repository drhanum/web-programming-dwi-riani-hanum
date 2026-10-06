import React from 'react';

class Kartuprofil extends React.Component {
    render() {
        const {nama, pekerjaan} = this.props;
        return (
            <div className="card-profil">
                <h3>Profil Pengguna</h3>
                <p>Nama: {nama}</p>
                <p>Pekerjaan: {pekerjaan}</p>
            </div>
        );
    }
}

export default Kartuprofil;