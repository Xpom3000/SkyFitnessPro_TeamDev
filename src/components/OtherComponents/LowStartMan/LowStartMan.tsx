export default function LowStartMan() {
  return (
    <div className="absolute left-[70px] top-[-24] z-10 flex h-full w-full justify-around md:left-3 md:top-36 md:z-50">
      <div className="absolute right-[225px] top-[65px] z-30 md:pr-110 md:pt-28 md:top-0 md:right-[400px]">
        <svg className="h-12 w-9  md:w-14">
          <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
        </svg>
      </div>
      <div className="absolute z-10 top[480px] right-[50px] w-[270px] h-[351px] bg-cover 
     
     bg-[url('/images/images_full/low_start_man_hd.png')] md:ml-[500px] md:h-[551px] md:w-[500px]  
     ">
     {/*  */}
        {/* <img
          className="absolute object-contain object-center right-0 md:right-[100px]"
          src="/images/images_full/low_start_man_hd.png"
        /> */}
      </div>
      <div className="absolute right-8 top-[90px] z-0 md:top-[190px] md:left-[410px] ">
        <svg className="h-[370px] w-[475px] pl-[75px] object-contain object-center md:h-[431px] md:w-[770px] md:pl-0">
          <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
        </svg>
      </div>
    </div>
  );
}
