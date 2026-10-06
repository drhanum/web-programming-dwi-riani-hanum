// import React , { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { PrimaryButton, SecondaryButton, Counter, PengelolaAplikasi } from './components/button';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import Profil from './components/Profil';
import Kartuprofil from './components/Kartuprofil';
import UserProfilClass from './components/UserProfilClass';
import { Formterpisah, FormObjek } from './components/Form';

class App extends React.Component {

  render() {
    // const elementHeader = <h1>Halo, Selamat belajar react!</h1>
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(elementHeader);

    return (
      
      <div className='container'>
        <Navbar />

        <p>
        ini tombol primary <PrimaryButton />
        </p>
        <p>
          ini tombol secondary <SecondaryButton />
        </p>


        <Header />

        <main className="main-content">
          <p>Selamat datang di dashboard Your FinTrack!</p>
          <p>Track Better, Live Better.</p>
          <Card />
        </main>

        <Profil />

        <Kartuprofil nama="Hanum" pekerjaan="Mahasiswa" />

        <Counter />

        <PengelolaAplikasi />

        <UserProfilClass />

        <div> 
          <Formterpisah />
        </div>
        
        <div>
          <FormObjek />
        </div>

        

        <Footer />

        
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <Header />

//       <main className="main-content">
//         <p>Selamat datang di dashboard pengelolaan keuangan!</p>
//         <Card />
//       </main>

//       <Footer />
//     </div>
//   )
// }

export default App;
