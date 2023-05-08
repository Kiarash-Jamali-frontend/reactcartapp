import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContextProvider";

import styles from "./Header.module.css";

const Header = () => {

    const cart = useContext(CartContext);

    return (
        <>
            <header className="pt-3 shadow-sm">
                <div className={styles.container}>
                    <div className="w-100 row align-items-center justify-content-between">
                        <div className="col-8 d-flex align-items-center">
                            {/*Logo*/}
                            <Link to={"/"} className="me-4">
                                <img height={"25"} src="./logo.jpg" alt="Logo" />
                            </Link>
                            {/*Search in all products*/}
                            <form action="#" method="get" className={styles.searchForm}>
                                <div>
                                    <input type="text" id="" placeholder="جستوجوی محصولات ..." />
                                    <button type="submit">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-4 d-flex justify-content-end align-items-center">
                            {/*Login / Signup button*/}
                            <button className={styles.loginSignupButton}>
                                <i className="bi bi-person"></i>
                                ورود / ثبت نام
                            </button>

                            {/*Cart quantity*/}
                            <Link to={"/cart"} className={styles.cartButton}>
                                <i className="bi bi-cart"></i>
                                <div>
                                    {
                                        cart.state.totalProducts
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-4">
                        <div className="d-flex pb-3">
                            {/*Categorys menu*/}
                            {/* <div className="d-flex align-items-center justify-content-between me-1 pe-3">
                                <div className={`${styles.categorysMenu} d-flex justify-content-between pb-1`}>
                                    <div className="d-flex align-items-center">ّ
                                        <i className="bi bi-list d-flex me-2"></i>
                                        <span>دسته بندی ها</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-chevron-down d-flex"></i>
                                    </div>

                                    <ul className={styles.categorys}>
                                        {
                                            categorys.map(item => {
                                                return (
                                                    <li key={item.id}>
                                                        <Link to={item.href}>
                                                            {
                                                                item.name
                                                            }
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div> */}

                            <ul className={`d-flex mb-0 ps-0 ${styles.pagesList}`}>
                                <li>
                                    <Link to={"/"} className="text-decoration-none text-dark">
                                        صفحه اصلی
                                    </Link>
                                </li>

                                <li className="mx-4">
                                    <Link to={"/products"} className="text-decoration-none text-dark">
                                        فروشگاه
                                    </Link>
                                </li>

                                <li className="me-4">
                                    <Link to={"/contact"} className="text-decoration-none text-dark">
                                        تماس با ما
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"/about"} className="text-decoration-none text-dark">
                                        درباره ما
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-3">
                            <Link className="btn btn-outline-danger me-4" style={{ fontSize: ".9em" }}>
                                <i className="bi bi-plus"></i>
                                فروشنده شوید!
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;