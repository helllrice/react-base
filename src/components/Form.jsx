import React from "react";

class Form extends React.Component {
    state = {
        login: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateName = () => {
        if (this.state.login.length < 10) {
            alert('Мало')
        }
    }

    validateMail = () => {
        if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, this.state.email) {
            alert('email is not valid')
        }
    }

    render() {
        const {login , email} = this.state

        return <div>
            <input
                type="text"
                name="login"
                placeholder="login"
                value={login}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateMail}
            />
        </div>
    }
}

export {Form}
