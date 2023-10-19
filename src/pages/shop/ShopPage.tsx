import { Product } from '../../model/product'
import { useEffect, useState } from 'react'
import { pb } from '../../pocketbase'
import { ProductCard } from './components/ProductCardComponent'
import { ServerError, Spinner } from '@/shared/'
import { useCart, useCartPanel } from '@/services/cart'



export function ShopPage(){
    const [products, setProducts] = useState<Product[]>([])
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const openCartPanel = useCartPanel(state => state.openOverlay)
    const addToCart = useCart(state => state.addToCart)

    useEffect(() => {
        loadData()
    }, [])

    function loadData(){
        setError(false)
        setPending(true)
        pb.collection('products').getList<Product>()
        .then(res => {
            setProducts(res.items);
        })
        .catch(() =>{
            setError(true)
        })
        .finally(() => {
            setPending(false)
        })
    }

    // function addToCart(product: Partial<Product>){
    //     console.log(product);
    //     openCartPanel();
        
    // }
    
    return (
        <div>
            <h1 className="title">SHOP</h1>

            {pending && <Spinner></Spinner>}
            {error && <ServerError></ServerError>}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
            {
                products.map(prod => {
                    return (
                       <ProductCard 
                       key ={prod.id} 
                       product={prod} 
                       onAddToCart={() => {
                        openCartPanel();
                        addToCart(prod);
                       }}
                       />
                       //questa p qui sopra dell'attributo è quella che mi arriva dalla chiamata
                    )
                })
            }

            </div>
        </div>
    )
}