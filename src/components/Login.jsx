import { React, Component } from 'react';
import '../App.css';

class Login extends Component {
    state = {

    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.email);
        event.preventDefault();

        const apiUrl = 'http://192.168.30.22:8001/login';

        // let headers = new Headers();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
            },
            body: {"username":"name", "password":"password"}
        };

        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                // var len = data.length;
                console.log(data);
                // this.setState({
                //     aircrafts: {data},
                //     totalAircrafts: len,
                // });
            })
    }


    render() {
        return (
            // Important! Always set the container height explicitly
            
                <div className="login-wrapper" style={{ height: 'calc(100% - 60px)' }}>
                    <form className="login-form">
                        <label>
                            <p>Username</p>
                            <input type="text" 
                                value={this.state.value}
                                onChange={this.handleChangeEmail} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password"  
                            value={this.state.value}
                            onChange={this.handleChangePassword} />
                        </label>
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form> 
                </div>
        )
    }
}

export default Login