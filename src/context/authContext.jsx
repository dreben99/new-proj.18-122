import { createContext, useState } from "react";
import * as authService from '../services/authService'
import { useNavigate } from 'react-router-dom';
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext()


export const AuthProvider = ({
    children,
}) => {


  
 
    const [auth, setAuth] = usePersistedState('auth', {})
    
    
    const navigate = useNavigate()
    
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password)
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        console.log(result);
        navigate(`/`)
    }
    
    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password)
        
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        console.log(result);
        navigate('/')
    } 
    
    const logoutHandler = () => {
        setAuth({})
        localStorage.removeItem('accessToken')
    
        navigate('/')
    }



    
    
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuth: !!auth.accessToken,
        userId: auth._id,
        owner: auth._email,
    }

return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
)

}

export default AuthContext