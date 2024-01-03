const Login = () => {
    return(
        <div className="login-background">
        <p>Please enter your details to proceed</p>
        <p className="inner-text">ID:</p>
        <input type="text"></input>
        <p className="inner-text">Pin:</p>
        <input type="numbers"></input>
        </div>
    )
}

export default Login;