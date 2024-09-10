import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "../../Shared/Components/SectionHeading/SectionHeading";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="my-32">
            <SectionHeading
                heading={"Testimonials"}
                subHeading={"What our clients say"}
            />

            <div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id} className="">
                            <div className="mx-32 px-12 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className="mb-12"
                                />
                                <FaQuoteLeft className="w-24 h-24 mb-10" />
                                <p className="text-center text-lg">
                                    {review.details}
                                </p>
                                <h2 className="text-2xl font-medium mt-2 text-[#CD9003]">
                                    {review.name}
                                </h2>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
