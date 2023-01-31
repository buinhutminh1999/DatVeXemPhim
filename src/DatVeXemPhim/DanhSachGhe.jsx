import React, { Component } from 'react'
import { connect } from 'react-redux'
class DanhSachGhe extends Component {


    layDanhSachGhe1toi12 = () => {
        return this.props.dsGhe.map((item, index) => {
            if (item.hang == '') {
                return item.danhSachGhe.map((item) => {
                    return <span className="col text-center button__select m-0" key={item.soGhe}>{item.soGhe}</span>
                })
            }
        })
    }

    layDanhSachGhe = () => {
        return this.props.dsGhe.map((item, index) => {
            if (item.hang !== '') {

                return item.danhSachGhe.map((ds) => {
                    return <button className={this.props.mangGheDaChon.some(item => item.soGhe == ds.soGhe) ? 'btn btn-success col disabled button__select' : 'btn btn-dark col button__select'} key={ds.soGhe} onClick={() => {
                        this.props.dispatch({
                            type: `GHE_CHON`,
                            ds,
                            hangGhe: item.hang
                        })
                    }}>{ds.soGhe}</button>
                })
            }

        })
    }

    layDanhSachHang = () => {
        return this.props.dsGhe.map((item, index) => {
            return item.hang == '' ? <p className='button__select m-0' key={item.hang}></p> : <p key={item.hang} className='button__select m-0'>{item.hang}</p>
        })
    }

    render() {
        return (
            <div className='movies__select mt-4'>
                <div className="movies__info">
                    <ul className='d-flex'>
                        <li>
                            <span className='bg-success'></span>
                            <p>Selected Seat</p>
                        </li>
                        <li>
                            <span className='bg-danger'></span>
                            <p>Reserved Seat</p>
                        </li>
                        <li>
                            <span className='bg-dark'></span>
                            <p>Empty Seat</p>
                        </li>
                    </ul>
                </div>
                <div className="movies__list__seats">

                    <div className='d-flex'>
                        <div style={{ width: "6%" }}>
                            {this.layDanhSachHang()}
                        </div>
                        <div style={{ width: "94%" }}>
                            <div className='row'>
                                {this.layDanhSachGhe1toi12()}
                            </div>
                            <div className="row">
                                {this.layDanhSachGhe()}
                            </div>
                        </div>
                    </div>
                    <h5 className='bg-warning text-center'>SCREEN THIS WAY</h5>
                   { this.props.selectStart ? <button className='btn btn-light disabled'>Confirm Selection</button> : <button className='btn btn-light' onClick={() => {
                        this.props.dispatch({
                            type: 'SELECT_START'
                        })
                    }}>Confirm Selection</button> }
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (rootReducer) => {
    return {
        dsGhe: rootReducer.DatVeReducer.danhSachGhe,
        mangGheDaChon: rootReducer.DatVeReducer.mangGheDaChon,
        selectStart: rootReducer.DatVeReducer.selectStart
    }
}

export default connect(mapStatetoProps)(DanhSachGhe) 