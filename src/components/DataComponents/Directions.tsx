import { Link } from "react-router-dom";
// import MainPage from "../../pages/MainPage";
import { appRoutes } from "../../lib/appRoutes";
export default function Directions() {
  return (
    <div className="container flex flex-col mx-auto">
      <Link to={appRoutes.COURSE}>
        <img src="images/logo.png" alt="logo" />
      </Link>
      <p className="pb-10 font-bold text-5xl p-5">Направления</p>
      <div className="container  grid-rows-subgrid mx-auto  bg-mainColor rounded-blockRadiusFrame">
        <div className="h-36 flex items-centr">
          <div className="flex items-center p-3">
            <svg
              xmlns="../icons/star_4_icon.svg"
              className="w-1 h-1 text-mainColor font-bold text-6xl pr-5"
            />
            <h2 className=" text-black font-defaultFont text-2xl">
              Йога для новичков
            </h2>
          </div>
        </div>
        <div className="h-36 flex items-center">
          <div className="flex items-center p-3">
            <svg
              xmlns="../icons/star_4_icon.svg"
              className="w-1 h-1 "
            />
            <h2 className=" text-black font-defaultFont text-2xl">
              Классическая йога
            </h2>
          </div>
        </div>

        <div className="h-36 flex items-center">
          <div className="flex items-center p-3">
            <svg
              xmlns="../icons/star_4_icon.svg"
              className="w-1 h-1"
            />
            <h2 className=" text-black font-defaultFont text-2xl">
              Кундалини-йога
            </h2>
          </div>
        </div>

        <div className="h-36 flex items-center">
          <div className="flex items-center p-3">
            <svg
              xmlns="../icons/star_4_icon.svg"
              className="w-1 h-1"
            />
            <h2 className=" text-black font-defaultFont text-2xl">
              Йогатерапия
            </h2>
          </div>
        </div>

        <div className="h-36 flex items-center">
          <div className="flex items-center p-3">
            <svg
              xmlns="../icons/star_4_icon.svg"
              className="w-1 h-1"
            />
            <h2 className=" text-black font-defaultFont text-2xl">
              Хатха-йога
            </h2>
          </div>
        </div>

        <div className="h-36 flex items-center">
          <div className="flex items-center p-3">
            <svg
              xmlns="../icons/star_4_icon.svg"
              className="w-1 h-1"
            />
            <h2 className=" text-black font-defaultFont text-2xl">
              Аштанга-йога
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
