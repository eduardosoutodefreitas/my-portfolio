import React from 'react';
import AboutPictures from './AboutPictures';
import AboutQuote from './AboutQuote';
import AboutInfos from './AboutInfos';
import SectionHeading from '../../SectionHeading/SectionHeading';

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col py-20 md:py-36 relative px-5 text-primaryBlack"
    >
      <SectionHeading title="sobre mim" subtitle="saiba mais" />
      <AboutQuote />
      <div className="flex lg:justify-around md:items-start flex-col md:flex-row items-center justify-center md:gap-24 lg:gap-0">
        <AboutPictures />
        <AboutInfos />
      </div>
    </section>
  );
};

export default About;
