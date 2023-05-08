import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import styles from "./Slider.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchSlides = fetch("http://localhost:4000/slider");
        const res = fetchSlides.then(res => {
            return res.json();
        }).then(res => setSlides(res))
    }, [])

    return (
        <>
            <Swiper modules={[]} className={styles.slider}>
                {
                    slides.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Link to={item.href}>
                                    <img src={item.img} alt={`Slide ${item.id}`} />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default Slider;