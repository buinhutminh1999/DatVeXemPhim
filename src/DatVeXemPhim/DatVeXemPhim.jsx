import React, { Component } from 'react'
import style from '../DatVeXemPhim/style.css'
import DanhSachGhe from './DanhSachGhe'
import FormNhap from './FormNhap'
import ThongTinChiTiet from './ThongTinChiTiet'
export default class DatVeXemPhim extends Component {
    render() {
        return (
            <div className='container movies p-5'>
                <div className="header text-center">
                    <h1>MOVIE SEAT SELECTION</h1>
                </div>
                <div className="movies__list w-50 m-auto ">
                    <FormNhap />
                    <DanhSachGhe />
                    <ThongTinChiTiet/>
                </div>
            </div>
        )
    }
}
