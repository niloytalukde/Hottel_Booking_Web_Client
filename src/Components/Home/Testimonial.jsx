import React from "react";
import Title from "../Title";
import { testimonials } from "../../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="items-center px-6 md:px-16 lg:px-24 xl:px-32 md:my-16 my-11 lg:my-24 bg-[#E4EEF84F] py-4 ">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      ></Title>
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 md:my-16 my-11 lg:my-24">
        <div className="flex flex-wrap gap-5 mt-5 md:mt-8 xl:mt-10 ">
            {testimonials.slice(0,3).map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="bg-white p-6 rounded-xl shadow max-w-xs "
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-playfair text-xl">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500">{testimonial.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-4">
                           <StarRating ></StarRating>
                        </div>
                  <p className="text-gray-500 max-w-90 mt-4">
                    "{testimonial.review}"
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
