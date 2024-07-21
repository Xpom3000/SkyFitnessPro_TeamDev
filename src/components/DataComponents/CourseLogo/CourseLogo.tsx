import { courseLogoSrc } from "../../../lib/courseSettings";

type CourseLogoType = {
  courseName: string;
};
type CourseType = {
  courseName: string;
  imgSrc: string;
  bgColor: string;
};
export default function CourseLogo({ courseName }: CourseLogoType) {
  const matchedCourse: CourseType | undefined = courseLogoSrc.find(
    (el) => el.courseName === courseName,
  );
  return (
    <>
      <div>
        <div
          className={`mt-10 sm:my-10 md:my-l container mx-auto rounded-blockRadius bg-${matchedCourse!.bgColor}`}>
          <div className="sm:p-0 md: marker p-30 mx-auto flex h-80 items-start">
            <div className="sm:hidden md:block w-1/3 pr-[1000px]">
              <h2 className="p-xl m-10 whitespace-nowrap font-defaultFont text-7xl font-normal text-white">
                {courseName}
              </h2>
            </div>
            <div className="h-full w-full">
              <img
                className="sm:rounded-blockRadius sm:ml-auto sm:mr-auto md:m-0 sm:block h-full md:object-contain md:object-center"
                src={matchedCourse!.imgSrc}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
