import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinChiTiet extends Component {
    render() {
        return (
            <div className='mt-4 text-center'>
                <table className="table bg-light">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Seats</th>
                            <th>Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.selectStart ? this.props.value.taiKhoan : ''}</td>
                            <td>{this.props.selectStart ? this.props.value.soGhe : ''}</td>
                            <td>{this.props.selectStart ? this.props.mangGheDaChon.map(item => item.soGhe).join(', ') : '' }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStatetoProps = (rootReducer) => {
    return {
        mangGheDaChon: rootReducer.DatVeReducer.mangGheDaChon,
        value: rootReducer.DatVeReducer.value,
        selectStart: rootReducer.DatVeReducer.selectStart
    }
}

export default connect(mapStatetoProps)(ThongTinChiTiet) 