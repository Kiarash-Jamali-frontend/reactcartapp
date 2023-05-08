import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContextProvider";

import Header from "../../components/Header/Header";
import styles from "./Products.module.css";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";
import Slider from "../../components/Slider/Slider";

const Products = () => {

    const productsContext = useContext(ProductContext);

    return (
        <>
            <Header />
            <Slider />

            <div className="container mt-3">
                <div className="row justify-content-center">
                    {/*Product list*/}
                    <div className="col-12 p-3">

                        <div className="d-flex justify-content-between align-items-center mt-3">

                            {/*breadcrumb*/}
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className="text-dark text-decoration-none" to="/">صفحه اصلی</Link>
                                    </li>
                                    <li className="breadcrumb-item active">فروشگاه</li>
                                </ol>
                            </nav>

                        </div>

                        <div className="row row-cols-4 h-100">
                            {
                                productsContext.map(item => <Product key={item.id} productData={item}  />)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Products;