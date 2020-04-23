import React, { Component, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import { HubConnectionBuilder } from '@microsoft/signalr'
//        return ;

class Alerts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            message: '',
            alerts: [],
            alerted: [],
            hubConnection: null,
            ready: false,
        };
    }

    normalizeAlert = ( alert, alertType ) => {
        let idx = -1;
        let alerts = this.state.alerts;
        for (let i = 0; i < alerts.length; i++) {
            if (alerts[i].device_id === alert.device_id) {
                idx = i;
            }
        }
        if (idx === -1) { // First Alert for this vehicle
            // check type of Alert
            if (alertType === 'ta') {
                alert.location = 'unknown';
            } else {
                alert.temperature = 'below threshold';
            }
            alerts.push(alert);
        } else { //remove entry from array
            if (alertType === 'ta') {
                alert.location = alerts[idx].location;
            } else {
                alert.temperature = alerts[idx].temperature;
            }
            console.log(`splicing ${alerts[idx].device_id} from list`)
            let spliced = alerts.splice(idx, 1, alert);
            console.log(spliced)
        }
        return alerts
    }

    componentDidMount = async () => {
        const nick = 'Epiroc Agent'
        this.setState({
            nick
        })
        const hubConnection = new HubConnectionBuilder()
            .withUrl('https://eprocbackend.azurewebsites.net/api')
            .build();
        console.log(hubConnection);

        await hubConnection.start();
        this.setState({ ready: true })

        // change below to display in APP
        console.log('Connected to SignalR server')
        console.log(this.state.nick + ' connected....')

        hubConnection.on('newMessage', (alert) => {
            let alertType = 'ta'
            if (alert.hasOwnProperty('location')) alertType = 'lu'
            console.log(`new alert type ${alertType} received: ${JSON.stringify(alert)}`)

            let normAlerts = this.normalizeAlert(alert, alertType);
            this.setState({ alerts: normAlerts })
        });
    }

    renderItems = () => {
        console.log('Render Alerts')
        let data = this.state.alerts;
        const mapRows = data.map((item, index) => (
            <Fragment key={item.id}>
                <ListGroup.Item>
                    <span>[ DEVICE: {item.device_id} ] @ [ LOCATION: {item.location} ] >> {item.temperature} >> </span>
                </ListGroup.Item>
            </Fragment>

        ));
        console.log(mapRows)
        return mapRows;
    };

    render() {
        return (
            <div className='alerts'>
                <ListGroup>{this.renderItems()}</ListGroup>
            </div >
        )

    }

}
export default Alerts;