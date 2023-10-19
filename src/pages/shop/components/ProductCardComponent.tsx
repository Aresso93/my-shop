import { PropsWithChildren } from "react";
import { Product } from "../../../model/product";

interface ProductCardProps {
    product: Partial <Product>;
    onAddToCart: (product: Partial <Product>) => void;
}

export function ProductCard(props: PropsWithChildren<ProductCardProps>){
    const {product: p }= props
    
    return  <div>
         <div key={p.id} className='bg-white text-black rounded-xl overflow-hidden'>
                           {p.img && <img src={props.product.img} alt={p.name} className='h-64 w-full object-cover shadow-2xl' />}
                            <div className='flex justify-between items-center p-3 text-xl'>
                            <div>{p.name}</div>
                            <div>€ {p.cost}</div>
                            </div>

                            <p className='p-3'>{p.description}</p>

                            <button 
                            className='bg-sky-600 text-white hover:bg-sky-800 transition w-full text-center font-bold p-3' onClick={() => props.onAddToCart(p)}>ADD TO CART
                            </button>
                        </div>
            </div>

}