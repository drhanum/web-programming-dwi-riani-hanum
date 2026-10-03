import React , { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Navbar from './components/Navbar'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Navbar />

        <div className="top-search">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button type="button">Cari</button>
        </div>

        <Header />

        <main className="main-content">
          <p>Selamat datang di dashboard Your FinTrack!</p>
          <p>Track Better, Live Better.</p>
          <Card />
        </main>

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
