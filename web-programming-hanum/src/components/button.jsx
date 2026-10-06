import { useState } from "react";

export function PrimaryButton() {
    return <button className="primary">Simpan</button>
}

export function DangerButton() {
    return <button className = "danger">Hapus </button>
}

export function SuccessButton() {
    return <button className = "success">Success Button</button>
}

export function WarningButton() {
    return <button className = "warning">Warning Button</button>
}

export function InfoButton() {
    return <button className = "info">Info </button>
}

export function SecondaryButton() {
    return <button className = "secondary">Secondary Button</button>
}

export function Counter() {
    const [jumlah, setjumlah] = useState(0);
    
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

export function Tombolaksi({ label, onClickHandler }) {
    return (
        <button onClick ={onClickHandler} className="btn">
            {label}
        </button>
    );
}

export function PengelolaAplikasi() {
    const [count, setCount] = useState(0);

    const handleIncerment = () => setCount(count + 1);
    const handleReset = () => setCount(0);

    return(
        <div>
            <TampilanStatus status={count > 0 ? "Aktif" : "Idle"} angka={count} />

            <Tombolaksi label="Tambah Angka" onClickHandler={handleIncerment} />
            <Tombolaksi label="Reset" onClickHandler={handleReset} />
        </div>
    );
}

export function TampilanStatus ({status, angka}) {
    return <p>Status: {status} | Total: {angka}</p>;
}