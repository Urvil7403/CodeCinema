import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(768);

  useEffect(() => {
    // Function to update width and height on window resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Set up initial dimensions and add event listener
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const banners = [
    {
      imgUrl: "https://wallpapercave.com/wp/wp1934740.jpg",
    },
    {
      imgUrl:
        "https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg",
    },
    {
      imgUrl: "https://wallpapercave.com/wp/wp1934740.jpg",
    },
    {
      imgUrl:
        "https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg",
    },
    {
      imgUrl: "https://wallpapercave.com/wp/wp1934740.jpg",
    },
    {
      imgUrl:
        "https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg",
    },
    {
      imgUrl: "https://wallpapercave.com/wp/wp1934740.jpg",
    },
    {
      imgUrl:
        "https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Image
            src={banner.imgUrl}
            alt=""
            width={width}
            height={height / 2}
            style={{
              objectFit: "contain",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
