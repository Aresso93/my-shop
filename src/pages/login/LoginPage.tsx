import clsx from "clsx"
import { FormEvent, useEffect } from "react"
import { useLogin } from "./hooks/useLogin";
import { selectAuthError, selectAuthIsLogged, useAuth } from "@/services/auth";
import { ServerError } from "../../shared/components/core/ServerError";
import { useNavigate } from "react-router-dom";


export function LoginPage(){
    const navigate = useNavigate();
    const error = useAuth(selectAuthError)
    const isLogged = useAuth(selectAuthIsLogged)
    const login = useAuth(state => state.login)

    const {
        formData, isValid, changeHandler
    } = useLogin()

    console.log(isLogged);
    
    useEffect(() => {
        if (isLogged) {
            navigate('/cms')
        }
    })

    function doLogin(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formData);
        login(formData.username, formData.password)
        
    }

    return (
        <div className="page-sm">
            <h1 className="title">LOGIN</h1>

            {error && <ServerError/>}

            <form className="flex flex-col gap-3" onSubmit={doLogin}>
                <input 
                type="text" 
                placeholder="username"
                name="username" 
                onChange={changeHandler} 
                value={formData.username}/>
                <input 
                type="password" 
                placeholder="password" 
                name="password"
                onChange={changeHandler} value={formData.password}/>
                <button disabled={!isValid} className={clsx({'error': !isValid})}>SIGN IN</button>
            </form>
        </div>
    )
}