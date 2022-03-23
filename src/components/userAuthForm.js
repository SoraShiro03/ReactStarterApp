import React from "react";

export default function UserAuthForm() {
    const [userData, setData] = React.useState({
        username: "",
        password1: "",
        password2: "",
        agree: true,
    })
    // const [condition, setCondition] = React.useState(false)
    function changeData(e) {
        const { name, value, type, checked } = e.target
        setData(prev => (
            {
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }
        ))
    }
    function sendToBackEnd(e) {
        e.preventDefault();
        if ((userData.password1 === userData.password2) && userData.agree) {
            console.log("send!: ", userData)
            // setCondition(true)
        }
        else {
            console.log("do not match")
        }

    }
    console.log(userData)
    return (
        <div className="background--display">
            <Register
                name={userData.name}
                passowrd1={userData.password1}
                passowrd2={userData.password2}
                checked={userData.checked}
                handleChange={(e) => changeData(e)}
                sendToBackEnd={(e) => sendToBackEnd(e)}
            // condition={condition}
            />
            {/* <Logout /> */}
            {/* <Login
                name={userData.name}
                passowrd1={userData.password1}
                handleChange={(e) => changeData(e)}
            /> */}
        </div>
    )
}

export function Register(props) {
    return (
        <div className="card">
            <div className="card--topic">
                <h1>Register</h1>
            </div>
            <form onSubmit={props.sendToBackEnd} className="user--data">
                <input
                    onChange={props.handleChange}
                    name="username"
                    value={props.name}
                    type="text"
                    placeholder="username"
                />
                <input
                    onChange={props.handleChange}
                    name="password1"
                    value={props.password1}
                    type="password"
                    placeholder="password"
                />
                <input
                    onChange={props.handleChange}
                    name="password2"
                    value={props.password2}
                    type="password"
                    placeholder="confirm password"
                />
                <div className="checkbox--field">
                    <input
                        className="form--checkbox"
                        onChange={props.handleChange}
                        name="agree"
                        checked={props.checked}
                        type="checkbox"
                        placeholder="password"
                    />
                    <label htmlFor="checked">Agree our Policy</label>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export function Login(props) {
    return (
        <div className="card">
            <div className="card--topic">
                <h1>Login</h1>
            </div>
            <form className="user--data">
                <input
                    onChange={props.handleChange}
                    name="username"
                    value={props.username}
                    type="text"
                    placeholder="username"
                />
                <input
                    onChange={props.handleChange}
                    name="password1"
                    value={props.password1}
                    type="text"
                    placeholder="password"
                />
            </form>
            <p>Forget password?</p>
            <button>Submit</button>
        </div>

    )
}

export function Logout(props) {
    const mystyles = {
        backgroundColor: "#fff",
        minWidth: '300px',
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