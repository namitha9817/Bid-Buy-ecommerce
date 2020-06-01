import React, { Component } from 'react'
import PubNubReact from 'pubnub-react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Cards from './Cards'


export default class Dashboard extends Component {
	constructor(props) {
    	super(props);
			this.state = {highest: 0, people: 0};
			//this.last_message = 0;
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-cf4a8001-4406-485f-aa6b-cb21d4697c6b',
            subscribeKey: 'sub-c-656a0b2a-078a-11ea-86c7-32c7c2eb6eff/'
        });
    	this.pubnub.init(this);
			// this.state = { highest : 0 };
			console.log({ pubnub: this.pubnub });

    }

		componentWillMount() {
			this.pubnub.subscribe({
					channels: ['AProduct'],
					withPresence: true
			});
			this.pubnub.getMessage('AProduct', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.hereNow({
				channels: ["AProduct"],
				includeState: true
			},(status,response)=> {
				console.log(response.totalOccupancy);
				this.setState ({
					people: response.totalOccupancy
				});
			});

		}

	render() {
		const messages = this.pubnub.getMessage('AProduct');
		const presence = this.pubnub.hereNow('AProduct');
	    return (
	    		<div>
						<Cards data={messages.length} highest={this.state.highest} people={this.state.people}/>

						<br/>
						<br/>
							<ListGroup flush>{messages.map((m, index) => <ListGroupItem><h1 key={'message' + index}>{m.message}</h1></ListGroupItem>)}</ListGroup>
					</div>
				);
	}
}
