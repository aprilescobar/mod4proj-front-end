import React from 'react'

export default class SignUp extends React.Component {
    render () {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <input type="text" name="username" placeholder="Username" />
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}