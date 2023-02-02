import React, { Component } from 'react'
import { connect } from 'react-redux'
class DanhSachGhe extends Component {


    layDanhSachGhe1toi12 = () => {
        return this.props.dsGhe.map(item => {
            if (item.hang == '') {
                return item.danhSachGhe.map((item) => {
                    return <span className="col text-center button__select m-0" key={item.soGhe}>{item.soGhe}</span>
                })
            }
        })
    }

    checkBtnDisabled = (item,ds,disabled) => { 
       return  this.props.mangGheDaChon.some(item => item.soGhe == ds.soGhe) 
       ? `btn btn-success col ${disabled} button__select` 
       : `btn btn-dark ${disabled} col button__select`     
    }

    layDanhSachGhe = () => {

        return this.props.dsGhe.map(item => {
            if (item.hang !== '') {
                return item.danhSachGhe.map((ds) => {
                    if (this.props.soGhe == this.props.mangGheDaChon.length) {
                        return <button className={this.checkBtnDisabled(item,ds,'disabled')} key={ds.soGhe}>{ds.soGhe}</button>
                    } else {
                        return <button className={this.checkBtnDisabled(item,ds,' ')} key={ds.soGhe} onClick={() => {
                            //check xem ghế đã được đặt hay chưa
                            let check = this.props.mangGheDaChon.some(item => item.soGhe == ds.soGhe)
                            let trangThaiDaDat = true;
                            if(check){
                                // đổi trạng thái 
                                trangThaiDaDat = false
                            }
                            this.props.dispatch({
                                type: `GHE_CHON`,
                                ds,
                                hangGhe: item.hang,
                                soGheChon: 0,
                                trangThaiDaDat,
                                soGhe: ds.soGhe
                            })
                        }}>{ds.soGhe}</button>
                    }
                   
                })
            }

        })
    }

    layDanhSachHang = () => {
        return this.props.dsGhe.map(item => { return item.hang == '' ? <p className='button__select m-0' key={item.hang}></p> : <p key={item.hang} className='button__select m-0'>{item.hang}</p> })
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
                    {this.props.selectStart ? <button className='btn btn-light disabled'>Confirm Selection</button> : <button className='btn btn-light' onClick={() => {
                        this.props.dispatch({
                            type: 'SELECT_START'
                        })
                    }}>Confirm Selection</button>}
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (rootReducer) => {
    return {
        dsGhe: rootReducer.DatVeReducer.danhSachGhe,
        mangGheDaChon: rootReducer.DatVeReducer.mangGheDaChon,
        selectStart: rootReducer.DatVeReducer.selectStart,
        soGhe: rootReducer.DatVeReducer.value.soGhe
    }
}

export default connect(mapStatetoProps)(DanhSachGhe) 