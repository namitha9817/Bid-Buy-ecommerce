import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import Img from 'react-image'
import Layout from "./Layout";
import Dashboard from './Dashboard';
import i2 from './i2.jpg';
import PubNubReact from 'pubnub-react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from "react-router-dom";

export default class AProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-cf4a8001-4406-485f-aa6b-cb21d4697c6b',
            subscribeKey: 'sub-c-656a0b2a-078a-11ea-86c7-32c7c2eb6eff'
        });
        this.pubnub.init(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
            var startingBid = 500;
        var data =localStorage.getItem('Username');
        console.log('localStorage'+data);
        var message = data+" : "+this.state.value;
            if(data != null) {
            if(this.state.value > startingBid && this.state.value < 1000000) {
                this.pubnub.publish({
                    message: message,
                    channel: 'AProduct'
            });
            } else {
                alert("Enter value between Starting Bid and 1000000!");
            }
        }else {
            alert("Enter username!");
        }
        event.preventDefault();
    }

        componentWillMount() {
         this.pubnub.subscribe({
             channels: ['AProduct'],
             withPresence: false
         });
         this.pubnub.getMessage('AProduct', (msg) => {
            var data = localStorage.getItem('username');
            console.log(msg.message);
                       this.last_message = msg.message;
                        console.log('this.last_message 1'+this.last_message);
         });
                
     }

    render() {
            const messages = this.pubnub.getMessage('AProduct');
        return (
            <Layout
            title=""
            description=""
            className="container-fluid"
        >
            <div>
                    <Row>
                        <Col md={6}>
                        <Img height={440} width={636} src={i2}/>
                        <br/>
                        <br/>
                        <form onSubmit={this.handleSubmit} style={{marginLeft: 10 + 'em'}}>
                                    <h2> Starting bid: AED500 </h2>
  
                            <label>
                                <FormControl type="number" pattern="[0-9]*" inputMode="numeric" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <Button className="btn btn-info btn-lg" type="submit" value="Submit" style={{marginLeft: 10 + 'px'}}>Place Bid</Button>
                    </form>
                        </Col>
                        
                    </Row>
                    <Dashboard />
        </div>
        </Layout>
        );
    }
}
