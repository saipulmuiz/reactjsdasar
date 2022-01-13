import React from 'react'

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 7000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    },
]

// Reduce -> Untuk sum array
const totalBayar = makanans.reduce((totalHarga, makanan) => totalHarga + makanan.harga, 0);


const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <li>{index + 1} {makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>

            <h2>Filter Harga yang lebih dari sama dengan 11.000</h2>
            <ul>
                {makanans.filter((makanan) => makanan.harga > 11000).map((makanan, index) => (
                    <li>{index + 1} {makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>

            <h3>Total Harga: {totalBayar}</h3>
        </div>
    )
}

export default Map
