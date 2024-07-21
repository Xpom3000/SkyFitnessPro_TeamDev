type FitttingType = {
  fittings: string[];
};

export default function FittingText({ fittings }: FitttingType) {
  return (
    <div className="container mx-auto sm:my-0 md:my-16 flex flex-col">
      <p className="md:text-5xl sm:text-2xl sm:pb-3.5 md:pb-10 font-bold">
        Подойдет для вас, если:
      </p>
      <div className="align-items-center sm:flex-col md:flex-row container mx-auto flex ">
        {fittings.map((fitting) => (
          <div className="sm:w-full md:w-4/12 my-2.5 border-spacing-2">
            <div className="items-centr flex h-36 rounded-blockRadius bg-black box-border ">
              <div className="flex items-center p-5 ">
                <h2 className="pr-5 text-7xl font-medium text-mainColor">
                {fittings.indexOf(fitting)}
                </h2>
                <h2 className="sm:text-lg/8 md:text-2xl font-normal text-white">{fitting}</h2>
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
