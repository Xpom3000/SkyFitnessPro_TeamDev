import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoType = {
  courseName?: string;
};

export default function CourseLogo({ courseName }: CourseLogoType) {
  const matchedCourse = courseLogoSrc.find(
    (el) => el.courseName === courseName,
  );
  return (
    <>
      <div
        className={`rounded-blockRadiusMin container mx-auto h-[389px] bg-${matchedCourse?.bgColor} md:my-l0 md:h-auto`}
      >
        <div className="marker mx-auto mt-[69px] flex h-80 items-start md:mt-0">
          <div className="md:w-1/3">
            <h2 className="p-xl m-10 hidden whitespace-nowrap font-defaultFont text-7xl font-normal text-white md:flex">
              {matchedCourse?.courseName}
            </h2>
          </div>
          <div className="flex h-full w-full justify-end rounded-blockRadiusMin">
            <img
              className="h-full rounded-blockRadiusMin md:flex"
              src={matchedCourse?.imgSrcSM}
            />
            <img
              className="mx-auto h-full rounded-blockRadiusMin md:hidden"
              src={matchedCourse?.imgSrcHD}
            />
          </div>
        </div>
      </div>
    </>
  );
}
