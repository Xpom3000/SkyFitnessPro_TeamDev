import { Link } from "react-router-dom";
import "../../css/style.css";
import { appRoutes } from "../../lib/appRoutes";

export default function Header() {
  return (
    <div className="container flex justify-between mx-auto">
      <div className="flex flex-col space-y-[15px]">
        <div>
        <Link to={appRoutes.MAIN}>
        <img src="../images/logo.png" alt="logo"/>
      </Link>
        </div>
        <div>
          <p className="text-black">Онлайн тренировки для занятий дома</p>
        </div>
      </div>

      <div
        className="rounded-buttonRadius hover:bg-mainHover bg-mainColor text-black px-btnX py-btnY" /* onClick={handleSigninForm} */
      >
        Войти
      </div>
      {/* user Блок */}
      <div>
        <div>profile_icon</div>

        <div>
          <div>Сергей</div>
          <svg>{/*  <use user_arrow_icon="/" /> */}</svg>
        </div>
      </div>
    </div>
  );
}
