import clsx from "clsx";
import { useCheckout } from "./hooks/useCheckout";

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export function CheckoutPage(){
   
   const {
    validators,
    actions, user, dirty, totalCartCost
   } = useCheckout();

    return (
        <div className="max-w-sm mx-auto">
            <h1 className="title">CHECKOUT</h1>
            checkout works (I hope...)

            <div className="text-xl my-3 border-b" >€ {totalCartCost} </div>

            <form className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
                Your name:
                <input type="text" placeholder="your name" 
                name="userName"
                value={user.userName} 
                onChange={actions.changeHandler}
                className={clsx({'error': !validators.isNameValid && dirty})}
                />

                Your email;
                <input 
                type="email" placeholder="your email" 
                name="email"
                value={user.email} 
                onChange={actions.changeHandler}
                className={clsx({'error': !validators.isEmailValid && dirty})}
                />

                <button 
                    type="submit" 
                    className={clsx('btn', {primary: !validators.isValid, success: validators.isValid})}
                    disabled={!validators.isValid}>
                    CONFIRM ORDER
                </button>
            </form>
        
            <pre>{JSON.stringify(user, null, 2)}</pre>
            

        </div>
    )
}