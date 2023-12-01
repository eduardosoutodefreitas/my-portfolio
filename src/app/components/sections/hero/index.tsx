import HeroCta from './HeroCta';
import HeroPicture from './HeroPicture';

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center px-3 md:px-8 lg:px-14 py-5 gap-8 lg:gap-12">
      <HeroCta />
      <HeroPicture />
    </section>
  );
};

export default Hero;
