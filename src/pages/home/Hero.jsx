import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import gate from "../../assets/hero-carousel/gate.jpg";
import hills from "../../assets/hero-carousel/hiils.jpg"
import space from "../../assets/hero-carousel/space.jpg"
import Temple from "../../assets/hero-carousel/Temple.jpg"
import Titanic from "../../assets/hero-carousel/Titanic.jpg"



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8 '>
        <div className=' md:w-1/2 w-full text-center '>
            <h1 className=' md:text-4xl text-2xl font-bold md:leading-tight '>The journey of a thousand miles begins with  a single step</h1>
            <p className=' py-4'>"Travel is like the ultimate life hack—it not only takes you to new places but also gives you a whole new perspective 
              on yourself. It's less about the fancy photos and more about the 'oops, I didn’t know that!' moments. So, pack your bags, get curious,
              and remember: the only thing that should be more expanded than your suitcase is your sense of adventure!"
            </p>
        </div>
        <div className='md:w-1/2 w-full mx-auto '>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={hills} alt="gate" className=' w-full lg:h-[420px] sm:h-96 h-80 ' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={gate} alt="gate" className=' w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={space} alt="gate" className=' w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Temple} alt="gate" className=' w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Titanic} alt="gate" className=' w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Hero