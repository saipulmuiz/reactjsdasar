import React, { Component } from 'react'

export default class Operan extends Component {

    // gantiMakanan(newFood) {
    //     this.setState({
    //         makanan: newFood
    //     })
    // }

    render() {
        const { makanan, gantiMakanan } = this.props
        return (
            <div>
                <h2>Operan State yang menjadi Props : {makanan}</h2>
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
            </div>
        )
    }
}
