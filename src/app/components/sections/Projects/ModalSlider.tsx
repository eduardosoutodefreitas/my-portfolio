'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';
import { Asset } from 'contentful';
import { Autoplay } from 'swiper/modules';
interface ModalSliderProps {
  projectImages: Asset[];
}

const ModalSlider = ({ projectImages }: ModalSliderProps) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper w-full rounded-t-xl"
    >
      {projectImages.map((image, index) => (
        <SwiperSlide className="w-full" key={index}>
          <Image
            src={`https:${image.fields.file?.url}`}
            alt={image.fields.title as string}
            height={948}
            width={1920}
            className="w-full h-auto rounded-t-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ModalSlider;
