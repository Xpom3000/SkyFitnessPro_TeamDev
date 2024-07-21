type DirectionsType = {
  directions: string[];
};

export default function Directions({ directions }: DirectionsType) {
  return (
    <div className="container mx-auto flex flex-col sm:absolute md:static">
      <p className="sm:mb-6 sm:mt-8 md:pb-10 md:text-5xl sm:text-2xl font-bold">Направления</p>
      <div className="container flex flex-row sm:flex-col rounded-blockRadius bg-mainColor">
        <div className="p-l flex w-2/6 ">
          <div className="sm:flex-col md:grid md:grid-cols-[284px_284px_284px] gap-x-44">
            {directions.map((direction) => (
              <div className="flex items-center sm:py-3 md:py-8">
                <svg className="h-6 w-6 mr-2">
                  <use xlinkHref="/icons/sprite.svg#icon-star-4" />
                </svg>
                <h2 className="pl-s font-defaultFont sm:whitespace-nowrap sm:text-lg/8  md:text-2xl text-black">
                  {direction}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
