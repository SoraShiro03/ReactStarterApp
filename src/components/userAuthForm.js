import React from "react";

export default function UserAuthForm() {
    return (
        <div className="background--display">
            <Login />
        </div>
    )
}

export function Register() {
    return (
        <div></div>
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
    return (
        <div></div>
    )
}