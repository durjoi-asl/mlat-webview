import { React, Component } from 'react';
import ReactTable from "react-table-6"; 
import "react-table-6/react-table.css";





class AircraftsList extends Component {
    state = {
        aircrafts: {
            data: []
        },
        icao: '',
        display: "none"
    }
    // constructor(props) {
    //     super(props);
    // }



    componentWillMount() {
        // const apiUrl = 'http://103.95.99.98:8001';
        const apiUrl = 'http://192.168.30.22:8001/';

        // let headers = new Headers();
        const requestOptions = {
            method: 'GET',
            headers: { 
                // 'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            },
        };

        this.interval = setInterval(() => fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                var len = data.length;
                console.log(data);
                this.setState({
                    aircrafts: {data},
                    totalAircrafts: len,
                });
            }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    

    render() {
        const columns = [
            {  
            Header: 'ICAO',  
            accessor: '_id'  
           },
           {  
            Header: 'Callsign',  
            accessor: 'clSgn'  
           },
           {  
                Header: 'Latitude',  
                accessor: 'lat'  
            },
            {  
                Header: 'Longitude',  
                accessor: 'lon'  
            },
            {  
                Header: 'Altitude',  
                accessor: 'alt'  
            },
            {  
                Header: 'Speed',  
                accessor: 'speed'  
            },
            {  
                Header: 'Vertical Speed',  
                accessor: 'vSpeed'  
            },
            {  
                Header: 'Magnitude',  
                accessor: 'mag'  
            },
            {  
                Header: 'Angle',  
                accessor: 'angle'  
            },
            {  
                Header: 'Fly',  
                accessor: 'fly',  
                Cell: props => {
                    return props.value ? (
                      "Air"
                    ) : (
                      "Ground"
                    );
                  }
            }
        ]
        return (
            // Important! Always set the container height explicitly
            
                <div style={{ height: 'calc(100% - 60px)' }}>
                    <ReactTable  
                        data={this.state.aircrafts.data}  
                        columns={columns}  
                        defaultPageSize = {24}  
                        // pageSizeOptions = {[2,4, 6]}  
                        showPaginateBottom={false}
                    />  
                </div>
        )
    }
}

export default AircraftsList