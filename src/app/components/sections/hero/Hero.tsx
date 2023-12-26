import HeroCta from './HeroCta';
import HeroPicture from './HeroPicture';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full lg:min-h-screen py-24 lg:py-0 flex flex-col md:flex-row items-center justify-around px-3 md:px-8 lg:px-14 gap-8 lg:gap-12
    "
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-specialOrange opacity-20 blur-[100px]"></div>
      </div>
      <HeroCta />
      <HeroPicture />
    </section>
  );
};

export default Hero;
