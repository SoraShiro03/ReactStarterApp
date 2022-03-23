import React from "react";

export default function UserAuthForm() {
    return (
        <div className="background--display">
            {/* <Logout /> */}
            <Register />
            {/* <Login /> */}
        </div>
    )
}

export function Register() {
    return (
        <div className="card">
            <div className="card--topic">
                <h1>Register</h1>
            </div>
            <form className="user--data">
                <input
                    name=""
                    value=""
                    type="text"
                    placeholder="username"
                />
                <input
                    name=""
                    value=""
                    type="text"
                    placeholder="password"
                />
                <input
                    name=""
                    value=""
                    type="text"
                    placeholder="confirm password"
                />
                <div className="checkbox--field">
                    <input
                        className="form--checkbox"
                        name="checkbox"
                        checked=""
                        type="checkbox"
                        placeholder="password"
                    />
                    <label htmlFor="checked">Agree our Policy</label>
                </div>
            </form>

            <button>Submit</button>
        </div>
    )
}

export function Login() {
    return (
        <div className="card">
            <div className="card--topic">
                <h1>Login</h1>
            </div>
            <form className="user--data">
                <input
                    name=""
                    value=""
                    type="text"
                    placeholder="username"
                />
                <input
                    name=""
                    value=""
                    type="text"
                    placeholder="password"
                />
            </form>
            <p>Forget password?</p>
            <button>Submit</button>
        </div>

    )
}

export function Logout() {
    const mystyles = {
        backgroundColor: "#fff",
        minWidth: '350px',
        minHeight: '350px'
    }
    return (
        <div className="card" style={mystyles}>
            <div className="card--topic">
                <h1>Logout</h1>
            </div>

            <p>Forget password?</p>
            <button>Submit</button>
        </div>
    )
}