import GoogleMapReact from 'google-map-react';
import { React, Component } from 'react'
import Sidebar from './Sidebar'
import Logo from './../logo.png'


const SensorMarker = () => <div style={{cursor: 'pointer'}}>
    <svg version="1.1" viewBox="0 0 443.231 443.231" style={{height:'30px'}}>
	<path d="M381.051,231.153H62.18c0,60.741,63.418,110.635,144.436,116.169v35.91h-41.361l-20,60h152.721l-20-60h-41.361v-35.91
		C317.634,341.788,381.051,291.894,381.051,231.153z"/>
    <path d="M327.183,113.632c-58.21-58.21-152.925-58.21-211.135,0l21.213,21.213c46.514-46.513,122.195-46.513,168.709,0
		L327.183,113.632z"/>
	<path d="M221.616,30c50.625,0,98.161,19.656,133.852,55.347l21.213-21.213C335.323,22.776,280.253,0,221.616,0
		S107.908,22.776,66.551,64.134l21.213,21.213C123.455,49.656,170.991,30,221.616,30z"/>
	<path d="M165.546,163.129l21.213,21.213c9.292-9.291,21.67-14.408,34.857-14.408s25.565,5.117,34.857,14.408l21.213-21.213
		c-14.958-14.958-34.87-23.195-56.07-23.195S180.503,148.171,165.546,163.129z"/>
</svg>
</div>

const AircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  <span style={{fontSize:'12px', background:"yellow", opacity:'0.7', padding:'3px'}}>{text}</span>
  <svg viewBox="0 0 510 510" style={{height:'20px', fill:'#ff0000', opacity:'1', transform: 'rotate('+rotate+'deg)'}}>
        
        <g id="flights">
          <path d="M510,255c0-20.4-17.85-38.25-38.25-38.25H331.5L204,12.75h-51l63.75,204H76.5l-38.25-51H0L25.5,255L0,344.25h38.25
            l38.25-51h140.25l-63.75,204h51l127.5-204h140.25C492.15,293.25,510,275.4,510,255z"/>
        </g>
      </svg>
</div>;


class GoogleMap extends Component {
    state = {
        aircrafts: {
            data: []
        },
        icao: '',
        display: "none"
    }
    constructor(props) {
        super(props);
        

        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.showAircrafts = this.showAircrafts.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
    }

    handleMarkerClick = (index) => {
        const set = this;
        return function() {
            var css = "block";
            var data = set.state.aircrafts.data[index].icao;
            // console.log(data);

            set.setState({
                icao: data,
                display: css,
            });
            // console.log(set.state.aircraft);
            // console.log(set.state.aircrafts.data[index]);
        }
      }

      closeSidebar = () => {
        const set = this;
        return function() {
            set.setState({
                display: "none",
                icao: ''
            })
        }
      }

    componentWillMount() {
        const apiUrl = 'http://103.95.99.98:8001';

        this.interval = setInterval(() => fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                var len = data.length;
                // console.log(data);
                this.setState({
                    aircrafts: {data},
                    totalAircrafts: len - 1,
                });
            }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showAircrafts = () => {
        return this.state.aircrafts.data.map((aircraft, idx) => {
            // console.log(aircraft);
            return <AircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.flightInfo.lat}
              lng={aircraft.flightInfo.long}
              text={aircraft.icao}
              rotate={aircraft.flightInfo.angle - 90}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
        })
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <nav style={{ height: '70px', width: '100%', background: '#fff', borderBottom: '1px solid #000' }}>
                    <div style={{ paddingLeft: '20px', width: '20%', float: 'left' }}>
                        <img src={ Logo } style={{ height: "50px", display: 'inline-block', marginTop: '5px' }} />
                    </div>
                    <div style={{ paddingRight: '20px', lineHeight: '70px', fontSize: '24px', fontWeight: '700', float: 'right', width: '60%', textAlign: 'right' }}>
                        Total Aircraft: {this.state.totalAircrafts}</div>
                </nav>
                <div style={{ height: 'calc(100% - 70px)' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAhhveERkRFz2TIjA8akOSGIAC3bpsm5U8' }}
                    defaultCenter={{lat: 23.728783, lng: 90.393791}}
                    defaultZoom={8}
                >

                    <SensorMarker
                        lat={23.83590}
                        lng={90.41618}
                    />

                    {this.showAircrafts()}
                </GoogleMapReact>

                <Sidebar display={this.state.display} icao={this.state.icao} handler= {this.closeSidebar()}/>
                </div>
                
            </div>
        )
    }
}

export default GoogleMap