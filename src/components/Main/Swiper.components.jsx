import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Recensioni from "../data/reviews.js"
import ReviewCard from "./ReviewCard.components"

import 'swiper/css';
import 'swiper/css/pagination';


export default () => {
    return (
        <div className="container">
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Recensioni.map((review) => (
                    <SwiperSlide>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}

                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
        </div>
    );
};