import React from 'react'

const SignUp = () => {
    return (
        <form>
            <h3>Sign Up</h3>
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

export default SignUp