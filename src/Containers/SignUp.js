import React from 'react'

class SignUp extends React.Component {

    state = {
        username: "",
        password: "",
        confirmPassword: ""
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        
        if (this.state.password === this.state.confirmPassword){
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({username: this.state.username, password: this.state.password})
            })
            .then(res => res.json())
            .then(response => {
                if(response.errors){
                  alert(response.errors)
                } else {
                  // send user somewhere
                  // storing the user object SOMEWHERE
                  this.props.setUser(response)
                }
              })
            } else {
              alert("Passwords don't match!")
            }
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}/>
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}

export default SignUp