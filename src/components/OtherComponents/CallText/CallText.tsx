import { useEffect, useState } from "react";
import { useUserData } from "../../../hooks/useUserData";
import { fetchAddFavoriteCourseToUser } from "../../../api/userCourses_api";

type CallTextType = {
  setIsOpenedSigninForm: (arg: boolean) => void
}

export default function CallText({setIsOpenedSigninForm}: CallTextType) {
  const [isAuthorizated, setIsAuthorizated] = useState<boolean>(false);
  
  const { user } = useUserData();

  useEffect(() => {
    if (user) {
      setIsAuthorizated(true);
    } else {
      setIsAuthorizated(false);
    }
  }, [user]);

  const handleAddCourse = (id: string) => {
    if (user) {
      fetchAddFavoriteCourseToUser(user.id, id);
    } else {
      alert("Войдите, чтобы добавить курс");
    }
  };

  function handleOpenSigninForm() {
    setIsOpenedSigninForm(true);
  }

  return (
    <div className="rounded-blockRadiusMin container absolute top-[95px] z-40 mx-auto mb-10 mt-20 flex overflow-hidden shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] md:relative">
      <div className="w-auto relative flex flex-col p-7 ">
        <h2 className="text-3xl font-medium md:text-6xl">
          Начните путь <br />к новому телу
        </h2>
        <ul className="list-disc py-7 pl-7 text-lg/8 font-normal md:text-2xl">
          <li>проработка всех групп мышц</li>
          <li>тренировка суставов</li>
          <li>улучшение циркуляции крови</li>
          <li>упражнения заряжают бодростью</li>
          <li>помогают противостоять стрессам</li>
        </ul>
        <div className=" ">
          {isAuthorizated ? (
            <button
              className="w-full rounded-buttonRadius bg-mainColor py-inptY font-defaultFont text-base/5 font-normal hover:bg-mainHover"
              onClick={() => handleAddCourse(el._id)}
            >
              Добавить курс
            </button>
          ) : (
            <button
              className="w-full rounded-buttonRadius bg-mainColor py-inptY font-defaultFont text-base/5 font-normal hover:bg-mainHover "
              onClick={handleOpenSigninForm}
              type="button"
            >
              Войдите, чтобы добавить курс
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
