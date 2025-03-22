import './login.css'

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">LogIn</span>
     <form className='loginForm'>
        <label> Email</label>
        <input type="text"  className='loginInput' placeholder='Enter your email' />
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter your password' />
        <button className="loginButton">Login</button>
     </form>
     <button className="loginRegisterButton">
      <Link to="/register" >Register</Link>
     </button>
    </div>
  )
}

export default Login