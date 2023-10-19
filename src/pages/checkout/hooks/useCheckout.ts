import { useCart, selectTotalCartCost, selectCartList } from "@/services/cart";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX } from "../CheckOutPage";

export function useCheckout(){
    const navigate = useNavigate()
    const [user, setUser] = useState({userName: '', email: ''});
    const [dirty, setDirty] = useState(false);

    const totalCartCost = useCart(selectTotalCartCost);
    const clearCart = useCart(state => state.clearCart);

    const order = useCart(selectCartList)

    function changeHandler(event: ChangeEvent<HTMLInputElement>){
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        setUser(state => ({ ...user, [name]: value }))
        setDirty(true);
    }
    console.log(user);
    
    function sendOrder(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const orderInfo = {
            user,
            order,
            status: 'pending',
            total: totalCartCost
        }
        console.log(orderInfo);
        clearCart();
        navigate('/thankyou')
        
    }

    const isNameValid = user.userName.length > 8;
    const isEmailValid = user.email.match(EMAIL_REGEX);
    const isValid = isNameValid && isEmailValid;

    return {
        validators:{
            isNameValid,
            isEmailValid,
            isValid,

        },
        actions: {
            sendOrder,
            changeHandler,
        },
        user,
        dirty,
        totalCartCost
    }
}