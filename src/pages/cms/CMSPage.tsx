import { NavLink, Outlet } from "react-router-dom";

function isActive(obj: {isActive:boolean}){
    console.log(obj);
    return obj.isActive ? 'btn primary' : 'btn'

}

export function CMSPage(){
    return (
        <div>
             <div>
            
            <NavLink to="/cms/products" className={isActive}>Products</NavLink>
            <NavLink to="/cms/orders" className={isActive}>Orders</NavLink>

            <Outlet></Outlet>
        </div>
        </div>

        
    )
}