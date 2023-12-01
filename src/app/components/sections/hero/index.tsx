import HeroCta from './HeroCta';
import HeroPicture from './HeroPicture';

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center px-3 py-5 gap-8 md:gap-16">
      <HeroCta />
      <HeroPicture />
    </section>
  );
};

export default Hero;
