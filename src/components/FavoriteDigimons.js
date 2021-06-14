import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap/';
import UpdateForm from './UpdateForm';

class FavoriteDigimons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            showForm: false,
            id: '',
            digName: '',
            digURL: '',
            digLevel: ''
        }
    }

    componentDidMount = async () => {

        let result = await axios.get(`${process.env.REACT_APP_SERVER}/getFavData`);

        this.setState({
            result: result.data
        })


    }

    deleteDigimon = async (id) => {
        const result = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteData/${id}`);
        
        this.setState({
            result: result.data
        })
    }

    showFormFun = (id) => {
        this.setState({
            id: id,
            showForm: true
        })
    }

    updateName=(e)=>{
        this.setState({
            digName:e.target.value
        })
    }

    updateURL=(e)=>{
        this.setState({
            digURL:e.target.value
        })
    }

    updateLevel=(e)=>{
        this.setState({
            digLevel:e.target.value
        })
    }


    updateData=async()=>{

        const updateData={
            digName:this.state.digName,
            digURL:this.state.digURL,
            digLevel:this.state.digLevel,
        }

        const result=await axios.put(`${process.env.REACT_APP_SERVER}/updateData/${this.state.id}`,updateData);

        this.setState({
            result:result.data,
            showForm:false
        })
    }

    render() {
        return (
            <>
                {this.state.showForm &&
                    <UpdateForm
                        digName={this.state.digName}
                        digURL={this.state.digURL}
                        digLevel={this.state.digLevel}

                        updateName={this.updateName}
                        updateURL={this.updateURL}
                        updateLevel={this.updateLevel}

                        updateData={this.updateData}
                    />
                }

                {this.state.result.map(item => {
                    return (
                        <Card style={{ width: '18rem', display:'inline-block' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.level}
                                </Card.Text>
                                <Button onClick={() => this.deleteDigimon(item._id)} variant="primary">Delete</Button>
                                <Button onClick={() => this.showFormFun(item._id)} variant="primary">Update</Button>
                            </Card.Body>
                        </Card>)
                })}
            </>)
    }
}

export default FavoriteDigimons;
