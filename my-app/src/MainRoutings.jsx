import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/Pages/About/About'
import HomeMain from './components/Pages/HomePage/HomeMain'
import { LandingPage } from './components/Pages/LandingPage/LandingPage'
import { LogIn } from './components/Pages/LoginPage/LogIn'
import PaymentPage from './components/Pages/PaymentPage/PaymentPage'
import { SignUp } from './components/Pages/SignUpPage/SignUp'
import { Delivery } from './ComponentsB/ProductAll/addToCartPage/DeliveryInfo/Delivery'
// import { Cartpage } from './Components/ProductAll/addToCartPage/Cartpage'
// import { AllProducts } from './Components/ProductAll/AllProducts'
// import { CompareProducts } from './Components/ProductAll/CompareProducts'
// import { SingleProductDetail } from './Components/ProductAll/ProductDetailsPage/SingleProductDetail'
import ProductRoutings from './ProductRoutings'

export const MainRoutings = () => {
    return (
        <div>
            {/* <LandingPage /> */}

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<LogIn />} />
                <Route path="about" element={<About />} />
                <Route path="Home" element={<HomeMain />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="products/*" element={<ProductRoutings />} />
                <Route path="payment" element={<PaymentPage />} />
                {/* <Route path="products" element={<AllProducts />} />
                <Route path="products/comparision" element={<CompareProducts />} />
                <Route path="products/:id" element={<SingleProductDetail />} />
                <Route path="/cart" element={<Cartpage />} /> */}
            </Routes>
        </div>
    )
}
