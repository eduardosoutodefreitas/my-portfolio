interface SectionHeading {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ subtitle, title }: SectionHeading) => {
  return (
    <div className="text-center">
      <h4 className="text-sm uppercase text-specialOrange font-semibold">
        {subtitle}
      </h4>
      <div className="flex items-center gap-3 justify-center">
        <div className="w-1/5 max-w-sm h-[1px] bg-specialOrange block" />
        <h2 className="sm:text-4xl text-2xl xs:text-2xl font-bold block capitalize">
          {title}
        </h2>
        <div className="w-1/5 max-w-sm h-[1px] bg-specialOrange block" />
      </div>
    </div>
  );
};

export default SectionHeading;
