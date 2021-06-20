import {React, Component} from 'react'


class Sidebar extends Component {
    state = {
        display: "block"
    }

    constructor(props) {
        super(props);
    }


    render () {
        console.log(this.props.aircraft.flightInfo.lat);
        const sidebarStyle = { height: "100vh", width: "200px", position: "fixed", top: "0px", left: "0px", background: "#fff", display: this.props.display };
        return (
            <aside className="aside show" style={sidebarStyle}>
                
                {/* {this.props.aircraft.flightInfo.lat} */}
            </aside>
        )
    }
}

export default Sidebar