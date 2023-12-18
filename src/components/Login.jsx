import { useContext } from "react"
import useForm from "../hooks/useForm"
import AuthContext from "../context/authContext"
import { Link } from "react-router-dom"

const LoginKeys ={
    Email: 'email',
    Password: 'password'
}

export default function Login(){

    const {loginSubmitHandler} = useContext(AuthContext)
    
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
        [LoginKeys.Email]: '',
        [LoginKeys.Password]: '',
    })


    return(

        <>
         <title>Contact form</title>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
    integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
    crossOrigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      html, body {\n      min-height: 100%;\n      padding: 0;\n      margin: 0;\n      font-family: Roboto, Arial, sans-serif;\n      font-size: 14px;\n      color: #666;\n      }\n      h1 {\n      margin: 0 0 20px;\n      font-weight: 400;\n      color: #1c87c9;\n      }\n      p {\n      margin: 0 0 5px;\n      }\n      .main-block {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      min-height: 100vh;\n      background: #1c87c9;\n      }\n      form {\n      padding: 25px;\n      margin: 25px;\n      box-shadow: 0 2px 5px #f5f5f5; \n      background: #f5f5f5; \n      }\n      .fas {\n      margin: 25px 10px 0;\n      font-size: 72px;\n      color: #fff;\n      }\n      .fa-envelope {\n      transform: rotate(-20deg);\n      }\n      .fa-at , .fa-mail-bulk{\n      transform: rotate(10deg);\n      }\n      input, textarea {\n      width: calc(100% - 18px);\n      padding: 8px;\n      margin-bottom: 20px;\n      border: 1px solid #1c87c9;\n      outline: none;\n      }\n      input::placeholder {\n      color: #666;\n      }\n      button {\n      width: 100%;\n      padding: 10px;\n      border: none;\n      background: #1c87c9; \n      font-size: 16px;\n      font-weight: 400;\n      color: #fff;\n      }\n      button:hover {\n      background: #2371a0;\n      }    \n      @media (min-width: 568px) {\n      .main-block {\n      flex-direction: row;\n      }\n      .left-part, form {\n      width: 50%;\n      }\n      .fa-envelope {\n      margin-top: 0;\n      margin-left: 20%;\n      }\n      .fa-at {\n      margin-top: -10%;\n      margin-left: 65%;\n      }\n      .fa-mail-bulk {\n      margin-top: 2%;\n      margin-left: 28%;\n      }\n      }\n    "
    }}
  />
  <div className="main-block">
    <div className="left-part">
      <i className="fas fa-envelope" />
      <i className="fas fa-at" />
      <i className="fas fa-mail-bulk" />
    </div>
    <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  onChange={onChange}
                    value={values[LoginKeys.Email]} />

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" onChange={onChange}
                    value={values[LoginKeys.Password]}/>

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" onChange={onChange}
                    value={values[LoginKeys.ConfirmPassword]} />

                    <input className="btn submit" type="submit" value="Login" />

                    <p className="field">
                        <span>Don't have an account? <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
  </div>
        </>
    )
}