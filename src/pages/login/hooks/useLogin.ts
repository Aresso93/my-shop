import { ChangeEvent, useState } from "react"

export function useLogin () {
    const [formData, setFormData] = useState({username: '', password: ''})

    function changeHandler(event: ChangeEvent<HTMLInputElement>){
       const value = event.currentTarget.value
       const name = event.currentTarget.name
       setFormData(state => ({...state, [name]: value}))
    }

    const isValid = formData.username.length > 6 && formData.password.length >= 8

    return {
        formData,
        isValid,
        changeHandler
    }

}