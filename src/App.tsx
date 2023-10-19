import { CartPage } from "./pages/cart/CartPage"
import { CheckoutPage } from "./pages/checkout/CheckOutPage"
import { ThanksPage } from "./pages/checkout/ThanksPage"
import { CMSPage } from "./pages/cms/CMSPage"
import { CMSOrdersPage } from "./pages/cms/products/CMSOrdersPage"
import { CMSProductsPage } from "./pages/cms/products/CMSProductsPage"
import { LoginPage } from "./pages/login/LoginPage"
import { ShopPage } from "./pages/shop/ShopPage"
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { NavBar, PrivateRoute } from "./shared/"

function App() {

  return (
   <BrowserRouter>
   <NavBar></NavBar>
   
   <hr />
   <div className="page">
      <Routes>
        <Route path="shop" element={<ShopPage/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="thankyou" element={<ThanksPage/>}/>

        <Route path="login" element={<LoginPage/>}/>

        <Route path="cms" element={<PrivateRoute><CMSPage/></PrivateRoute>}>
          <Route path="products" element={<CMSProductsPage/>}/>
          <Route path="orders" element={<CMSOrdersPage/>}/>
          <Route index element={<Navigate to="products"/>}/>
        </Route>

        <Route path="*" element ={<Navigate to="shop"/>}/>
      </Routes> 
   </div>
   </BrowserRouter>
  )
}

export default App
