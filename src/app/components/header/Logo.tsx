import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[50px] aspect-square">
      <Image fill alt="logo" src={"/assets/images/f-logo.svg"} />
    </div>
  );
};

export default Logo;
