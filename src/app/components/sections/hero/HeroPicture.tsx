import Image from 'next/image';
import React from 'react';

const HeroPicture = () => {
  return (
    <div className="w-5/6 min-w-[250px] max-w-2xl pointer-events-none">
      <Image
        src={'/assets/images/hero.svg'}
        alt="Hero Icon"
        width={500}
        height={500}
        layout="responsive"
        className="animate-float"
      />
    </div>
  );
};

export default HeroPicture;
