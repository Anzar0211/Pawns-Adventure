const Signin = () => {
  return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="image-container">
                <img src="../../images/loginpageBoard." alt="" />
            </div>
        </div>
    );

}
export default Signin   