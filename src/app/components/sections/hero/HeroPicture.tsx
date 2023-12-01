import Image from 'next/image';
import React from 'react';

const HeroPicture = () => {
  return (
    <Image
      src={'/assets/images/hero.svg'}
      alt="Hero Icon"
      width={482}
      height={598}
      // fill
      className="animate-float aspect-[492/598] w-4/6 min-w-[250px] max-w-2xl pointer-events-none"
    />
  );
};

export default HeroPicture;
