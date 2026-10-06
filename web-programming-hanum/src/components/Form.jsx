import React from 'react';

export function Formterpisah() {
    const [nama, setNama] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [umur, setUmur] = React.useState("");

    return (
        <form>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="number" value={umur} onChange={(e) => setUmur(e.target.value)} />
        </form>
    );
}

export function FormObjek() {
    const [formData, setFormData] = React.useState({
        nama: "",
        email: "",
        kategori: "pemasukan",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <form>
            <input name="nama" value={formData.nama} onChange={handleChange} placeholder='Nama transaksi'/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
        </form>
    );
}
