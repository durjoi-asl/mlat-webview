import {React, Component} from 'react'


class Sidebar extends Component {
    state = {
        display: "block",
        icao: ''
    }

    constructor(props) {
        super(props); 

        this.handleSidebarClose = this.handleSidebarClose.bind(this);
    }

    componentWillMount() {
        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillReceiveProps() {
        this.setState({
            display: this.props.display,
            icao: this.props.icao,
        });

        if(this.props.icao !== '') {
            const apiUrl = 'http://192.168.50.12:8001?icao=' + this.state.icao;
        

        // this.interval = setInterval(() => fetch(apiUrl)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         this.setState({
        //             aircraft: {data},
        //         });
        //     }), 1000)
        // } else {
        //     this.setState({
        //         icao: "",
        //         aircraft: [],
        //     });
        // }

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    aircraft: data[0],
                });
            })
        }
        // clearInterval(this.interval);

        
        // console.log(this.state.icao);
        
        // console.log(this.state.icao);
    }

    handleSidebarClose = () => {
        const set = this;
        return function() {
            var css = "none";

            set.setState({
                display: css,
            });
            // console.log(set.state.aircraft);
            // console.log(set.state.aircrafts.data[index]);
        }
      }


    render () {
        let aircraft 
        // console.log(this.props.aircraft.flightInfo.lat);
        const sidebarStyle = { 
            height: "calc(100% - 200px)", 
            width: "250px", 
            position: "fixed", 
            top: "90px", 
            left: "20px", 
            background: "#fff", 
            border: '2px solid #000',
            borderRadius: '5px',
            padding: '20px',
            display: this.state.display };
        return (
            <aside className="aside show" style={sidebarStyle}>
                <button id="close" onClick={this.props.handler}
                    style={{ 
                        float: 'right',
                     }}
                >Close</button>
                
                <div>ICAO: { this.state.aircraft ? this.state.aircraft._id : ""  }</div>
                <div>Calsign: { this.state.aircraft ? this.state.aircraft.clSgn : ""  }</div>
                <div>Lat: { this.state.aircraft ? this.state.aircraft.lat : ""  }</div>
                <div>Lat: { this.state.aircraft ? this.state.aircraft.lon : ""  }</div>
                {/* {this.props.aircraft.flightInfo.lat} */}
            </aside>
        )
    }
}

export default Sidebar