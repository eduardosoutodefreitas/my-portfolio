import Image from 'next/image';

const AboutPictures = () => {
  return (
    <div className="flex gap-5 mb-16 md:mb-0">
      <Image
        height={1600}
        width={1200}
        alt="first about section picture"
        src="/assets/images/me-2.jpg"
        className="rounded-xl lg:w-[206px] sm:w-[186px] w-[130px] h-auto"
      />

      <Image
        height={1600}
        width={1200}
        alt="second about section picture"
        src="/assets/images/me-1.jpg"
        className="rounded-xl translate-y-8 lg:w-[206px] sm:w-[186px] w-[130px] h-auto"
      />
    </div>
  );
};

export default AboutPictures;
