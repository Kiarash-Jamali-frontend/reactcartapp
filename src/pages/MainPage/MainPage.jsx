import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";

import styles from "./MainPage.module.css";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    return (
        <>
            <Header />
            <Slider />

            {/*PC categorys*/}
            <div className="container mt-3" style={{ maxWidth: "1450px" }}>
                <div className="row row-cols-4 justify-content-center align-items-center">
                    <Link to={"#"} className={styles.computerTypes}>
                        <img className="d-block mx-auto" src="./RYZEN-1-300x300.jpg" alt="AMD PC Image" />
                        <h4 className="text-center mt-2">سیستم های RYZEN/AMD</h4>
                    </Link>
                    <Link to={"#"} className={styles.computerTypes}>
                        <img className="d-block mx-auto" src="./Game11-300x300.jpg" alt="Gaming PC image" />
                        <h4 className="text-center mt-2">کامپیوتر های گیمینگ</h4>
                    </Link>
                    <Link to={"#"} className={styles.computerTypes}>
                        <img className="d-block mx-auto" src="./gaming111-300x300.jpg" alt="Rendering PC image" />
                        <h4 className="text-center mt-2">سیستم های رندرینگ</h4>
                    </Link>
                    <Link to={"#"} className={styles.computerTypes}>
                        <img className="d-block mx-auto" src="./edari111-300x300.jpg" alt="Office PC image" />
                        <h4 className="text-center mt-2">سیستم های اداری</h4>
                    </Link>
                </div>
                <Link to={"/products"} className={styles.seeProducts}>
                    مشاهده محصولات
                </Link>
            </div>

            {/*Trend product categorys*/}
            <div className={`container ${styles.trendProductCategorys}`}>
                <div className="row row-cols-4 align-items-center justify-content-between">
                    <Link to={"#"} className="border-end text-dark text-decoration-none">
                        <img src="./Printer-1.jpg" alt="Printer" />
                        <h5 className="text-center mt-3">پرینتر</h5>
                    </Link>
                    <Link to={"#"} className="border-end text-dark text-decoration-none">
                        <img src="./laptop222-2.jpg" alt="Laptop" />
                        <h5 className="text-center mt-3">لپتاپ</h5>
                    </Link>
                    <Link to={"#"} className="border-end text-dark text-decoration-none">
                        <img src="./minicase-3.jpg" alt="Minicase" />
                        <h5 className="text-center mt-3">مینی کیس</h5>
                    </Link>
                    <Link to={"#"} className="text-dark text-decoration-none">
                        <img src="./monitor333.jpg" alt="Monitor" />
                        <h5 className="text-center mt-3">مانیتور</h5>
                    </Link>
                </div>
            </div>

            {/*Brands*/}
            <div className={`container ${styles.brands}`}>
                <div className="row row-cols-6 align-items-center justify-content-center py-2">
                    <div className="p-3 border-end"><img src="./LG1.jpg" alt="LG" /></div>
                    <div className="p-3 border-end"><img src="./AMD1.jpg" alt="AMD" /></div>
                    <div className="p-3 border-end"><img src="./GREEN1.jpg" alt="Green" /></div>
                    <div className="p-3 border-end"><img src="./Mastertech1.jpg" alt="Mastertech" /></div>
                    <div className="p-3 border-end"><img src="./Deepcool1.jpg" alt="Deepcool" /></div>
                    <div className="p-3"><img src="./Coolermaster1.jpg" alt="Coolermaster" /></div>
                </div>
            </div>

            {/*Computer parts*/}
            <div>
                <h4 className={styles.title}>
                    <span>قطعات کامپیوتر</span>
                    <div></div>
                </h4>

                <Swiper modules={[Navigation]} navigation={true} slidesPerView={6} className={styles.computerPartsSlider}>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-psmpn91ufc0eysfjamfyc0dqse2qizcp6oanljnegw.jpg" alt="Hard" />
                        <h5 className="text-center mt-2">هارد</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-psmpmu0fdzftt11dqfxx846da84v3tozsluvx49p8g.jpg" alt="RAM" />
                        <h5 className="text-center mt-2">حافظه رم</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-psmpn0laptou2arto0sb7kilfx8flpf45ifaa1zy0w.jpg" alt="Graphics cart" />
                        <h5 className="text-center mt-2">کارت گرافیک</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-پی-یو-1-pt3hckeaara4wvktzyv4qomrbtby753v8licvfg3cw.jpg" alt="CPU" />
                        <h5 className="text-center mt-2">پردازنده</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-psmpn2gz3hrepip3d1lkck1imoz613mktrq98lx5og.jpg" alt="Motherbord" />
                        <h5 className="text-center mt-2">مادربرد</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-و-کیبورد-psmpn7661nxubki9llmp70utlmc03l58iezomzq6tc.jpg" alt="Mouse keyboard" />
                        <h5 className="text-center mt-2">ماوس و کیبورد</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="d-block mx-auto"
                            src="./-psmpn4cnh5tzcqmd22ethjkftgpwghu1i11875udc0.jpg" alt="Monitor" />
                        <h5 className="text-center mt-2">مانیتور</h5>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Footer />
        </>
    )
}

export default MainPage;