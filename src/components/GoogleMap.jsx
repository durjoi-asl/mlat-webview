import GoogleMapReact from 'google-map-react';
import { React, Component } from 'react'
import Sidebar from './Sidebar'


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
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
   <svg viewBox="0 0 510 510" style={{height:'25px', fill:'red', stroke: '#000000', strokeWidth: '10',  transform: 'rotate('+rotate+'deg)'}}>
        
        <g id="flights">
          <path d="M510,255c0-20.4-17.85-38.25-38.25-38.25H331.5L204,12.75h-51l63.75,204H76.5l-38.25-51H0L25.5,255L0,344.25h38.25
            l38.25-51h140.25l-63.75,204h51l127.5-204h140.25C492.15,293.25,510,275.4,510,255z"/>
        </g>
    </svg> 
  

</div>;


const HelicoptersMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 100 100" style={{height:'25px', fill:'#EDDA28', stroke: '#000000', strokeWidth: '3', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
    <path class="st0" d="M78.46,10.66c-0.79-0.79-2.13-0.74-2.99,0.12L62.14,24.1c-1.6-8.26-6.13-14.21-11.47-14.21
	c-5.59,0-10.27,6.51-11.67,15.36L24.53,10.77c-0.85-0.86-2.19-0.91-2.99-0.11c-0.79,0.79-0.74,2.13,0.12,2.99l16.91,16.91
	c0,0.05-0.01,0.1-0.01,0.15c0,5.34,1.18,10.19,3.09,13.86l-20,20.01c-0.86,0.86-0.91,2.19-0.12,2.98c0.79,0.79,2.13,0.74,2.99-0.12
	l19.42-19.42c0.82,0.94,1.72,1.7,2.66,2.28V77.3l-12.17,8.21v4.6l12.81-5.69h6.86l12.8,5.69v-4.6L54.73,77.3V50.3
	c0.7-0.43,1.37-0.96,2-1.59l18.73,18.73c0.86,0.86,2.2,0.91,2.99,0.12c0.79-0.79,0.74-2.13-0.12-2.98L59.22,45.46
	c2.2-3.77,3.56-8.98,3.56-14.75c0-0.5-0.02-0.98-0.04-1.47l15.6-15.6C79.2,12.78,79.25,11.45,78.46,10.66L78.46,10.66z M78.46,10.66
	"/>
    </g>
</svg>

</div>;

const HighVortextAircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 512 512" style={{height:'25px', fill:'#EDDA28', stroke: '#000000', strokeWidth: '10', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
        <path class="st0" d="M285,445.9c-70.7-1.3-56.1,6-57.7-13.4c2.5-244.8-13.6-413.8,25.8-417.4c46.1-3.2,28,157.6,31.5,175.8
		C284.7,270.2,284.9,380.7,285,445.9z"/>
	<path class="st0" d="M236.5,182.5c-55.1,31.3-135.7,95.3-201.7,149c-5.1-0.2-3.6,15.8-3.7,27.5c16.5-5.6,155.4-63.3,163.3-66.7
		c10.3,0,41-0.4,44.5-0.4C242.4,291.7,236.5,182.5,236.5,182.5z"/>
	<path class="st0" d="M176.4,225.4c-1.3,54.6-24.3,49.5-24.9,0C152.8,170.8,175.8,175.9,176.4,225.4z"/>
	<path class="st0" d="M275,182.4c55.2,31.1,135.9,95,202.1,148.4c5.1-0.2,3.6,15.8,3.7,27.4c-16.6-5.5-155.5-62.9-163.5-66.3
		c-10.3,0-41-0.3-44.5-0.3C269.4,291.7,275,182.4,275,182.4z"/>
	<path class="st0" d="M335.2,225.1c1.5,54.6,24.4,49.4,24.9,0C358.7,170.5,335.8,175.7,335.2,225.1z"/>
	<path class="st0" d="M251,418.2c30.3,25.5,103.7,41.1,91.1,79C234,459.9,250.1,473.8,251,418.2z"/>
	<path class="st0" d="M262.8,418.2c-30.3,25.5-103.7,41.1-91.1,79C279.7,459.9,263.6,473.8,262.8,418.2z"/>
    </g>
</svg>

</div>;

const HeavyAircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 512 512" style={{height:'25px', fill:'#EDDA28', stroke: '#000000', strokeWidth: '10', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
        <path class="st0" d="M306,193.4l-20.9-18.4L285.9,38C286,22.5,273.5,9.9,258,9.7c-15.3-0.1-28.2,12.6-28.3,27.9l-0.8,135.8
		l-30.1,26.1l-152,131.6l-0.2,27.7l181.7-86.2l-0.8,150.1l-40.8,59.3l-0.2,19l68.2-26.6l67.7,27.6l0.1-19.1l-38.9-59.8l0.9-150.7
		l180.6,88.7l0.2-27.7L306,193.4z"/>
	<path class="st0" d="M139.9,257.2c0.9,20.7-3.1,37.7-8.8,37.9c-5.8,0.2-11.2-16.3-12-37c-0.9-20.7,3.1-37.6,8.8-37.9
		C133.6,219.9,139,236.5,139.9,257.2z"/>
	<path class="st0" d="M189.7,224c0.7,21.6-3.3,39.2-9.1,39.5c-5.8,0.3-11-17-11.8-38.6c-0.7-21.6,3.3-39.2,9.1-39.5
		C183.7,185.2,189,202.4,189.7,224z"/>
	<path class="st0" d="M374.8,259.9c0.9,21.8,6.4,39.2,12.1,39c5.8-0.2,9.7-18.1,8.7-39.9c-0.9-21.8-6.4-39.2-12.1-39
		C377.8,220.3,373.9,238.2,374.8,259.9z"/>
	<path class="st0" d="M325.6,221.2c0.7,19.5,6,35.2,11.8,34.9c5.8-0.3,9.8-16.4,9.1-35.9c-0.7-19.6-6-35.2-11.8-34.9
		C328.9,185.6,324.8,201.7,325.6,221.2z"/>
    </g>
</svg>

</div>;

const HighPerformanceAircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 512 512" style={{height:'25px', fill:'#000000', stroke: '#000000', strokeWidth: '10', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
    <path class="st0" d="M78.46,10.66c-0.79-0.79-2.13-0.74-2.99,0.12L62.14,24.1c-1.6-8.26-6.13-14.21-11.47-14.21
	c-5.59,0-10.27,6.51-11.67,15.36L24.53,10.77c-0.85-0.86-2.19-0.91-2.99-0.11c-0.79,0.79-0.74,2.13,0.12,2.99l16.91,16.91
	c0,0.05-0.01,0.1-0.01,0.15c0,5.34,1.18,10.19,3.09,13.86l-20,20.01c-0.86,0.86-0.91,2.19-0.12,2.98c0.79,0.79,2.13,0.74,2.99-0.12
	l19.42-19.42c0.82,0.94,1.72,1.7,2.66,2.28V77.3l-12.17,8.21v4.6l12.81-5.69h6.86l12.8,5.69v-4.6L54.73,77.3V50.3
	c0.7-0.43,1.37-0.96,2-1.59l18.73,18.73c0.86,0.86,2.2,0.91,2.99,0.12c0.79-0.79,0.74-2.13-0.12-2.98L59.22,45.46
	c2.2-3.77,3.56-8.98,3.56-14.75c0-0.5-0.02-0.98-0.04-1.47l15.6-15.6C79.2,12.78,79.25,11.45,78.46,10.66L78.46,10.66z M78.46,10.66
	"/>
    </g>
</svg>

</div>;

const Medium2AircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 512 512" style={{height:'25px', fill:'#EDDA28', stroke: '#000000', strokeWidth: '10', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
        <path class="st0" d="M451.4,326.7l0.1,25.9L282,271.4l0.6,140.7l36.9,55.5l0.1,17.9l-63.5-25.2l-63.5,25.5l0-17.8l37.5-55.8
		l-0.6-140.2L60.6,354.2l-0.1-25.9L201.2,204l27.9-24.7l-0.6-126.8c-0.1-14.3,11.9-26.3,26.2-26.3c14.4,0,26.2,11.7,26.3,26.1
		l0.6,128l19.7,17L451.4,326.7z"/>
	<path class="st0" d="M185.1,229.8c0.7,21.6-3.3,39.2-9.1,39.5c-5.8,0.3-11-17-11.8-38.6c-0.7-21.6,3.3-39.2,9.1-39.5
		C179.1,191,184.4,208.3,185.1,229.8z"/>
	<path class="st0" d="M326.9,228.6c0.7,19.5,6,35.2,11.8,34.9c5.8-0.3,9.8-16.4,9.1-35.9c-0.7-19.6-6-35.2-11.8-34.9
		C330.3,193,326.2,209.1,326.9,228.6z"/>
		
    </g>
</svg>

</div>;

const Medium1AircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 512 512" style={{height:'25px', fill:'#EDDA28', stroke: '#000000', strokeWidth: '10', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
        <g>
			<g>
				<path class="st0" d="M252.4,360.2c-16.4,9.7-75.9,40.4-79.3,43.2c0,6.5,0.1,15.2,0.1,19.3c7.5-2.6,77.4-25.3,80.3-25.9
					C252.7,379.1,252.4,360.2,252.4,360.2z"/>
				<path class="st0" d="M252.3,346.5c-16.4,9.7-75.9,40.4-79.3,43.2c0,6.5,0.1,15.2,0.1,19.3c7.5-2.6,77.4-25.3,80.3-25.9
					C252.6,365.5,252.3,346.5,252.3,346.5z"/>
			</g>
			<g>
				<path class="st0" d="M258.8,360.2c16.5,9.5,76.2,39.8,79.6,42.6c0,6.5,0.1,15.2,0.1,19.3c-7.5-2.5-77.6-24.7-80.5-25.3
					C258.6,379.1,258.8,360.2,258.8,360.2z"/>
				<path class="st0" d="M258.7,346.5c16.5,9.5,76.2,39.8,79.6,42.6c0,6.5,0.1,15.2,0.1,19.3c-7.5-2.6-77.6-24.7-80.5-25.3
					C258.6,365.4,258.7,346.5,258.7,346.5z"/>
			</g>
			<path class="st0" d="M260.1,344.9l-9.2,0c0.1,33.7,2.3,61.1,4.8,61.1C258.3,406,260.2,378.7,260.1,344.9z"/>
		</g>
		<path class="st0" d="M281.6,373.1l-0.6-241c0-0.7-0.2-1.4-0.4-2.2c-2.2-23.1-12.7-40.6-25.3-40.6c-12.6,0-23,17.6-25.1,40.7
			c-0.2,0.7-0.4,1.4-0.4,2.2l0.6,241"/>
		<g>
			<path class="st0" d="M236.7,246.7c-20.3,0-221-8.1-229.3-11c0-7.4,0-17.7-0.1-26.9c21.7-2.4,223.2-22.8,229.2-22.9
				C236.7,236.9,236.7,246.7,236.7,246.7z"/>
			<path class="st0" d="M275.4,246.6c20.3,0,221-9.1,229.2-12c0-7.4,0-17.7-0.1-26.9c-21.8-2.3-223.3-21.8-229.3-21.8
				C275.4,236.8,275.4,246.6,275.4,246.6z"/>
		</g>
    </g>
</svg>

</div>;

const LightAircraftsMarker = ({ text, rotate, onMarkerClick }) => <div onClick={onMarkerClick} style={{cursor: 'pointer'}}> 
  {/* <span style={{fontSize:'12px', background:"#fff70094",  opacity:'0.7', padding:'3px', marginBottom: '10px',}}>{text}</span> */}
    <svg viewBox="0 0 512 512" style={{height:'25px', fill:'#EDDA28', stroke: '#000000', strokeWidth: '10', transform: 'rotate('+rotate+'deg)',}}>
        <g id="flights">
        <path class="st0" d="M67.6,234.9h158l0.2,154.5l-61.5,45.3v21.2c0,2.3,0.3,6.4,2.2,7.9c1,0.8,4.1,2.3,12.8,0.6l76.3-21.9l77.3,22
	c8.1,1.6,11.2,0,12.2-0.7c1.9-1.5,2.2-5.6,2.2-7.9v-21.2l-60.7-44.6l0.9-155.2h156.9c24.9,0,45-20.2,45-45v0c0-24.9-20.2-45-45-45
	H288.3l0.1-23.2h0.2c-2-42.9-8.9-74.7-31.5-74.7c-22.5,0-29.7,31-31.9,73.8v0.9l0,23.2H67.6c-24.9,0-45,20.2-45,45v0
	C22.5,214.7,42.7,234.9,67.6,234.9z"/>
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
        this.handleApiLoaded = this.handleApiLoaded.bind(this);
    }

    handleMarkerClick = (index) => {
        const set = this;
        console.log(set);
        return function() {
            var css = "block";
            var data = set.state.aircrafts.data[index]._id;
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
        // const apiUrl = 'http://103.95.99.98:8001';
        const apiUrl = 'http://192.168.30.6:8001/';

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
                var len = data.length;
                // console.log(data);
                this.setState({
                    aircrafts: {data},
                    totalAircrafts: len,
                });
            }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showAircrafts = () => {
        return this.state.aircrafts.data.map((aircraft, idx) => {
            // console.log(aircraft);
            if(aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 18 ) {
                return <HelicoptersMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
            } else if ( aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 12 ) {
                return <LightAircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
            } 
            else if ( aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 14 ) {
                return <Medium2AircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
            } else if ( aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 13 ) {
                return <Medium1AircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            /> 
            
            } else if ( aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 15 ) {
                return <HighVortextAircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />  }
            else if ( aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 16 ) {
                return <HeavyAircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
            }  else if ( aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 17 ) {
                return <HighPerformanceAircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
            } else if(aircraft.lat && aircraft.lon && aircraft.aircraftTypeId === 0)  {
                return <AircraftsMarker
              key={idx}
              id={idx}
              lat={aircraft.lat}
              lng={aircraft.lon}
              text={aircraft.clSgn}
              rotate={aircraft.angle}
              onMarkerClick={this.handleMarkerClick(idx)}
            />
            }
            
        })
    }

    handleApiLoaded = (map, maps) => {
        // use map and maps objects
        new maps.Circle({
            strokeColor: '#000000',
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#000000',
            fillOpacity: 0.2,
            map,
            center: {lat: 23.83590, lng: 90.41618},
            radius: 50000  ,
        });

        new maps.Circle({
            strokeColor: '#000',
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#000000',
            fillOpacity: 0.1,
            map,
            center: {lat: 23.83590, lng: 90.41618},
            radius: 150000  ,
        });

        new maps.Circle({
            strokeColor: 'green',
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#000000',
            fillOpacity: 0.05,
            map,
            center: {lat: 23.83590, lng: 90.41618},
            radius: 250000  ,
        });

        new maps.Circle({
            strokeColor: 'red',
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#000000',
            fillOpacity: 0.03,
            map,
            center: {lat: 23.83590, lng: 90.41618},
            radius: 350000  ,
        });
    };

    render() {
        return (
            // Important! Always set the container height explicitly
           
                <div style={{ height: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAhhveERkRFz2TIjA8akOSGIAC3bpsm5U8' }}
                    defaultCenter={{lat: 23.728783, lng: 90.393791}}
                    defaultZoom={7}
                    onGoogleApiLoaded={({map, maps}) => this.handleApiLoaded(map, maps)}
                    options={{ 
                        // scrollwheel: false,
                    }}

                >

                    <SensorMarker
                        lat={23.83590}
                        lng={90.41618}
                    />

                    {this.showAircrafts()}
                </GoogleMapReact>

                <Sidebar display={this.state.display} icao={this.state.icao} handler= {this.closeSidebar()}/>
                </div>
        )
    }
}

export default GoogleMap