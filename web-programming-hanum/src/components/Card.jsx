import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div className="card-grid">
                <div className="card-item">
                    <h3>Cara Penggunaan</h3>
                    <p>Untuk menggunakan aplikasi ini, silakan daftar terlebih dahulu dan ikuti langkah-langkah yang tersedia di halaman panduan.</p>
                </div>

                <div className="card-item">
                    <h3>Informasi Pendaftaran</h3>
                    <p>Untuk mendaftar, silakan kunjungi halaman pendaftaran kami dan isi formulir dengan data yang benar.</p>
                </div>

                <div className="card-item">
                    <h3>Partner Kami</h3>
                    <p>Kami bekerja sama dengan berbagai mitra terpercaya untuk memberikan pengalaman terbaik bagi pengguna kami.</p>
                </div>
            </div>
        );
    }
}

// function Card() {
//   return (
//     <div className="card">
//       <h3>Profil Pengguna</h3>
//       <p>Tampilan menggunakan Class Component terpisah.</p>
//     </div>
//   )
// }

export default Card;