import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [renderPage, setRenderPage] = useState("login");

    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleSignUp = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div id="login-nav">
                <span onClick={() => setRenderPage("login")}>login</span> |
                {" "}<span onClick={() => setRenderPage("signup")}>signup</span>
            </div>
            {
                renderPage === "login" ?
                    <>
                        <h1>Login</h1>
                        <form className="login-form" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="username-login">username:</label>
                                <input
                                    type="text"
                                    id="username-login"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password-login">password:</label>
                                <input
                                    type="password"
                                    id="password-login"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit">login</button>
                            </div>
                        </form>
                    </>
                    :
                    renderPage === "signup" &&
                    <>
                        <h1>Sign Up</h1>
                        <form className="signup-form" onSubmit={handleSignUp}>
                            <div>
                                <label htmlFor="username-signup">username:</label>
                                <input
                                    type="text"
                                    id="username-signup"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password-signup">password:</label>
                                <input
                                    type="password"
                                    id="password-signup"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit">signup</button>
                            </div>
                        </form>
                    </>
            }

        </>
    );
}

export default Login;