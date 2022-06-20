import React from "react";

class Form extends React.Component {
    state = {
        login: '',
        email: '',
        subscription: false,
        gender: ''
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

    handleCheckboxChange = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    render() {
        const {login , email, subscription, gender} = this.state

        return <div>
            <input
                type="text"
                name="login"
                placeholder="login"
                value={login}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <br/>
            <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateMail}
            />
            <br/>
            <input
                type="checkbox"
                name="subscription"
                checked={subscription}
                onChange={this.handleCheckboxChange}
            />
            <br/>
            <input
                type="radio"
                name="gender"
                value="male"
                onChange={this.handleChange}
                checked={gender === "male"}/> Male
            <input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
                checked={gender === "female"}/> Female
        </div>
    }
}

export {Form}
