import HeroCta from './HeroCta';
import HeroPicture from './HeroPicture';

const Hero = () => {
  return (
    <section className="w-full lg:min-h-[calc(100vh-80px)] py-20 lg:py-0 flex flex-col md:flex-row items-center justify-center px-3 md:px-8 lg:px-14 gap-8 lg:gap-12">
      <HeroCta />
      <HeroPicture />
    </section>
  );
};

export default Hero;
