import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionHeading from "../../Shared/Components/SectionHeading/SectionHeading";

const Category = () => {
    return (
        <div className="mt-20">
            <SectionHeading
                heading={"Order Online"}
                subHeading={"From 11:00am to 10:00pm"}
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide className="relative mb-12">
                    <img src={slide1} alt="Slide 1" className="w-80" />
                    <h3 className="text-3xl text-white text-center uppercase font-medium -mt-12 font-serif absolute w-full">
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide2} alt="Slide 2" className="w-80" />
                    <h3 className="text-3xl text-white text-center uppercase font-medium -mt-12 font-serif absolute w-full">
                        Pizza
                    </h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide3} alt="Slide 3" className="w-80" />
                    <h3 className="text-3xl text-white text-center uppercase font-medium -mt-12 font-serif absolute w-full">
                        Soup
                    </h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide4} alt="Slide 4" className="w-80" />
                    <h3 className="text-3xl text-white text-center uppercase font-medium -mt-12 font-serif absolute w-full">
                        Cake
                    </h3>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src={slide5} alt="Slide 5" className="w-80" />
                    <h3 className="text-3xl text-white text-center uppercase font-medium -mt-12 font-serif absolute w-full">
                        Salads
                    </h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
