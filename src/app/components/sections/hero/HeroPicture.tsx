import Image from 'next/image';
import hero from '/public/assets/images/hero.png';
const HeroPicture = () => {
  return (
    <Image
      src={hero}
      alt="Hero Icon"
      width={500}
      height={500}
      // fill
      className="w-1/2 min-w-[250px] xs:sm:min-w-[400px] max-w-2xl pointer-events-none"
    />
  );
};

export default HeroPicture;
