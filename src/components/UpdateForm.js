import React, { Component } from 'react'

class UpdateForm extends Component {
    render() {
        return (
            <div>

                <input type='text' placeholder='ADD THE Name' onChange={this.props.updateName} value={this.props.digName} />
                <input type='text' placeholder='ADD THE URL' onChange={this.props.updateURL} value={this.props.digURL} />
                <input type='text' placeholder='ADD THE LEVEEL' onChange={this.props.updateLevel} value={this.props.digLevel} />

                <input type='submit' onClick={this.props.updateData} value='Update Data' />
                
            </div>
        )
    }
}

export default UpdateForm
