import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap/';


class Digimon extends Component {
    render() {
        return (
            <div style={{display:'inline-block'}}>
                <Card key={this.props.index} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.digimon.img} />
  <Card.Body>
    <Card.Title>{this.props.digimon.name}</Card.Title>
    <Card.Text>
    {this.props.digimon.level}
    </Card.Text>
    <Button onClick={()=>this.props.addToFav(this.props.digimon)} variant="primary">Add To Fav</Button>
  </Card.Body>
</Card>
            </div>
        )
    }
}

export default Digimon
