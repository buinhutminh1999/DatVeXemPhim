import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormNhap extends Component {

    state = {
        value: {
            taiKhoan: '',
            soGhe: ''
        },
        error: {
            taiKhoan: '',
            soGhe: ''
        }
    }

    getInput = (event) => {
        let {name, value, id} = event.target
        let mess = ''
        if(event.target.value.trim() == ''){
            mess = ` Please enter an ${id}!`
         
        }
        if (name == 'soGhe' && isNaN(value)) {
            mess = 'Please enter an number'
        }
        this.setState({
                    error: {...this.state.error, [name]: mess},
                    value: { ...this.state.value, [name]: value }
                })

    }

    submitForm = (event) => {
        event.preventDefault();
        let flag = true;
        for (const key in this.state.value) {
            if (this.state.value[key] == '') {
             
                flag = false;
            }

            if (this.state.error[key] == '') {
             
                flag = false;
            }
        }
        if (flag) {
            alert('Please Select your Seats NOW!')
            this.props.dispatch({
                type: 'LUU_DU_LIEU',
                valInput: this.state.value
            })
        }
    }


    render() {
        return (
            <div className="movies__input">
                <form onSubmit={this.submitForm}>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder='Name' name='taiKhoan' id='account' onChange={this.getInput} />
                            <p>{this.state.error.taiKhoan}</p>
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder='Number of Seats' name='soGhe' id='seats' onChange={this.getInput} />
                            <p>{this.state.error.soGhe}</p>
                        </div>
                    </div>
                    <div className='movies__button mt-4'>
                        {this.state.value.taiKhoan !== '' && this.state.value.soGhe !== ''  ? <button className='btn btn-success'>Start Selecting</button> : <button className='btn btn-success disabled'>Start Selecting</button> }
                    </div>
                </form>
            </div>
        )
    }
}


const mapStatetoProps = (rootReducer) => {
    return {
        value: rootReducer.DatVeReducer.value,
        startSelect: rootReducer.DatVeReducer.startSelect
    }
}

export default connect(mapStatetoProps)(FormNhap) 