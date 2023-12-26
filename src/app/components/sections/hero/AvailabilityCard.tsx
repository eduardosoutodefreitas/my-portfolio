const AvailabilityCard = () => {
  return (
    <div className="flex gap-3 items-center bg-specialOrange/70 font-semibold text-white rounded-md py-1 px-4">
      <span className="flex h-3 w-3 pointer-events-none relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-specialOrange opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-specialOrange"></span>
      </span>
      <p className="text-sm lg:text-base xl:text-lg">
        Disponível para novos desafios
      </p>
    </div>
  );
};

export default AvailabilityCard;
