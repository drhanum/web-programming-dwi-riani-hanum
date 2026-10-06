import React from 'react';

function Counter() {
    const [jumlah, setjumlah] = React.useState(0);

    const tambah = () => {
        setjumlah(jumlah + 1);
    };

    const kurang = () => {
        setjumlah(jumlah - 1);
    };

    return (
        <div className="counter-box">
            <h2>Counter: {jumlah}</h2>
            <button onClick={tambah}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    );
}

export default Counter;
