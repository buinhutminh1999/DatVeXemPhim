import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormNhap extends Component {

    getInput = (event) => {
        let { name, value, id } = event.target
        let mess = ''
        let flag = true;
        if (event.target.value.trim() == '') {
            mess = ` Please enter an ${id}!`
            flag = false;

        }
        if (name == 'soGhe' && isNaN(value)) {
            mess = 'Please enter an number'
            flag = false;
        }
        
        this.props.dispatch({
            type: 'DAY_DU_LIEU',
            error: { ...this.props.error, [name]: mess },
            value: { ...this.props.value, [name]: value },
            flag
        })

    }

    submitForm = (event) => {
        event.preventDefault();
        let flag = true;
        for (const key in this.props.value) {
            if (this.props.value[key] == '') {

                flag = false;
            }

            if (this.props.error[key] !== '') {

                flag = false;
            }
        }
        if (flag) {
            alert('Please Select your Seats NOW!')
            this.props.dispatch({
                type: 'LUU_DU_LIEU',
                valInput: this.props.value,
            })
        }
    }

    checkButtonDisabled = () => { 
        return this.props.flag 
        && this.props.value.taiKhoan !== '' 
        && this.props.value.soGhe !== ''
        && this.props.btnDisabled ? 
        <button className='btn btn-success'>Start Selecting</button> : 
        <button className='btn btn-success disabled'>Start Selecting</button> 
    }


    render() {
        return (
            <div className="movies__input">
                <form onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder='Name' name='taiKhoan' id='account' onChange={this.getInput} />
                            <p>{this.props.error.taiKhoan}</p>
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder='Number of Seats' name='soGhe' id='seats' onChange={this.getInput} />
                            <p>{this.props.error.soGhe}</p>
                        </div>
                    </div>
                    <div className='movies__button mt-4'>
                        {this.checkButtonDisabled()}
                    </div>
                </form>
            </div>
        )
    }
}


const mapStatetoProps = (rootReducer) => {
    return {
        value: rootReducer.DatVeReducer.value,
        startSelect: rootReducer.DatVeReducer.startSelect,
        btnDisabled: rootReducer.DatVeReducer.checkButtonDisabled,
        value: rootReducer.DatVeReducer.value,
        error: rootReducer.DatVeReducer.error,
        flag: rootReducer.DatVeReducer.flag,
    }
}

export default connect(mapStatetoProps)(FormNhap) 