import Image from 'next/image';
import React from 'react';

const HeroPicture = () => {
  return (
    <Image
      src={'/assets/images/hero.png'}
      alt="Hero Icon"
      width={500}
      height={500}
      // fill
      className="w-1/2 min-w-[250px] xs:sm:min-w-[350px] max-w-2xl pointer-events-none"
    />
  );
};

export default HeroPicture;
