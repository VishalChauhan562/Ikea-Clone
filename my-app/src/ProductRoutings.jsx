import "./App.css";
import { Navbar } from "./Components/ProductAll/Navbar";
import { AllProducts } from "./Components/ProductAll/AllProducts";
import { Route, Routes } from "react-router-dom";
import { CompareProducts } from "./Components/ProductAll/CompareProducts";
import { SingleProductDetail } from "./Components/ProductAll/ProductDetailsPage/SingleProductDetail";

function ProductRoutings() {
    return (
        <div className="">
            <Navbar />
            {/* <AllProducts /> */}
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/comparision" element={<CompareProducts />} />
                <Route path="/:id" element={<SingleProductDetail />} />
                {/* <Route path="*" elements={}/> */}
            </Routes>
        </div>
    );
}

export default ProductRoutings;
