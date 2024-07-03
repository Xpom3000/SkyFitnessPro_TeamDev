import { Link } from "react-router-dom";
// import MainPage from "../../pages/MainPage";
import { appRoutes } from "../../lib/appRoutes";

export default function FittingText() {
  return (
    
    <div className="container flex justify-between mx-auto">
      <Link to={appRoutes.COURSE}>
        <img src="images/logo.png" alt="logo"/>
      </Link>
        <h1>Подойдет для вас, если:</h1>
      
      <div className="container flex justify-between mx-auto">
        <div>
          <div>
            <h2 className="rounded-buttonRadius mainColor text-mainColor  px-btnX py-btnY">
              1
            </h2>
            <h2>Давно хотели попробовать йогу, но не решались начать</h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className="rounded-buttonRadius text-mainColor px-btnX py-btnY">
              2
            </h2>
            <h2>
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах
            </h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className="rounded-buttonRadius text-mainColor px-btnX py-btnY">
              3
            </h2>
            <h2>Ищете активность, полезную для тела и души</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
