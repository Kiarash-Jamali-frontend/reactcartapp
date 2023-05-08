import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <>
            <footer className="container-fluid pt-5 pb-4 mt-5 border-top">
                <div className={styles.container}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            {/*Logo*/}
                            <img src="./logo.jpg" height={"30"} alt="Logo" />

                            {/*Support team phone number*/}
                            <div className={`d-flex ${styles.supportTeamPhoneNumber}`}>
                                <div className="pe-4 border-end border-Secondary">
                                    تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
                                </div>
                                <div className="ps-4">
                                    ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                                </div>
                            </div>
                        </div>
                        {/*Go to up button*/}
                        <div>
                            <button className="btn btn-light border py-2 px-3 text-secondary">
                                <span>بازگشت به بالا</span>
                                <i className="bi bi-arrow-up ms-1"></i>
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 row row-cols-5 justify-content-between align-items-center mx-auto">
                        <div>
                            <img src="./original-products.svg" alt="Original products" />
                            <span>
                                ضمانت اصل بودن کالا
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="./days-return.svg" alt="Days return" />
                            <span>
                                ۷ روز ضمانت بازگشت کالا
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="./support.svg" alt="Support" />
                            <span>
                                ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="./cash-on-delivery.svg" alt="cash on delivery" />
                            <span>
                                امکان پرداخت درب محل
                            </span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <img src="./express-delivery.svg" alt="express delivery" />
                            <span>
                                امکان ارسال با تیپاکس
                            </span>
                        </div>
                    </div>

                    <div className="border-top mt-5">
                        <p className="mb-0 pt-4 text-center">
                            تمامی حقوق برای شرکت ایران پی سی محفوظ می باشد
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;