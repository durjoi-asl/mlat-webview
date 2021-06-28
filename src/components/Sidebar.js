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
            const apiUrl = 'http://103.95.99.98:8001?icao=' + this.state.icao;
        

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
            background: "rgb(97 97 97)", 
            color: "#fff",
            borderRadius: '5px',
            padding: '20px',
            display: this.state.display };
        return (
            <aside className="aside show" style={sidebarStyle}>
                <div style={{
                    marginBottom: '20px'
                }}>
                    <h2 style={{
                        display: 'inline-block',
                        margin: '0px',
                        color: '#fbad18'
                    }}>
                    { this.state.aircraft ? this.state.aircraft.clSgn : ""  }
                    </h2>
                    <button id="close" onClick={this.props.handler}
                        style={{ 
                            float: 'right',
                            display: 'block'
                        }}
                    >Close</button>
                </div>
                
                <h4 style={{ marginBottom: "20px" }}>Aircraft Information</h4>

                <div>
                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>ICAO</strong>
                        <p style={{ margin: "0px"}}>{ this.state.aircraft ? this.state.aircraft._id : ""  }</p>
                    </div>
                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>CALSIGN</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.clSgn : ""  }</p>
                    </div>
                </div>
                
                <h4 style={{ marginBottom: "20px", marginTop: "70px" }}>Positional Information</h4>

                <div>
                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ marginBottom: "5px" , fontSize: "13px" }}>LATITUDE</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.lat : ""  }</p>
                    </div>
                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>LONGITUDE</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.lon : ""  }</p>
                    </div>
                    

                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>ALTITUDE</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.alt : ""  }</p>
                    </div>

                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px", fontSize: "13px" }}>SPEED</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.speed : ""  }</p>
                    </div>

                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>VERTICAL SPEED</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.vSpeed : ""  }</p>
                    </div>
                    
                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>TRACK</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.angle : ""  }</p>
                    </div>

                    <div style={{ display: "inline-block", width: "50%", float: "left", marginBottom: "10px" }}>
                        <strong style={{ margin: "0px" , fontSize: "13px" }}>MAG</strong>
                        <p style={{ margin: "0px" }}>{ this.state.aircraft ? this.state.aircraft.mag : ""  }</p>
                    </div>

                    
                </div>
            </aside>
        )
    }
}

export default Sidebar