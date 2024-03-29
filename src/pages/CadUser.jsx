import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { useState } from "react";
import { createUser, updateUser } from "../services/users";
import { useNavigate } from "react-router-dom";
import { useUpdate } from "../components/global/UpdateProvider";

const CadUser = () => {
  const { selected, setSelected } = useUpdate();
  const [userData, setUserData] = useState(
    !selected
      ? {
          name: "",
          email: "",
          password: "",
          confirmPass: "",
          admin: false,
        }
      : selected
  );
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (selected.name) {
      updateUser(selected?.id, userData).then(
        setSelected(""),
        navigate("/list-users")
      );
    } else {
      createUser({
        ...userData,
        admin: userData.admin == "true",
        confirmPass: undefined,
      }).then(navigate("/list-users"));
    }
  };

  return (
    <div>
      <Header />
      <div className="w-1/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-4xl my-10 ">Cadastro de Usuário</h1>
        </div>
        <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 grid grid-cols-12 text-left ">
          <label className="text-creminho font-semibold col-span-12">
            Nome:
          </label>
          <CustomInput
            includedClasses={"rounded-full col-span-12 "}
            name={"name"}
            value={userData.name}
            change={handleChange}
          />
          <label className="text-creminho mt-5 font-semibold col-span-12">
            E-mail:
          </label>
          <CustomInput
            includedClasses={"rounded-full col-span-12 "}
            name={"email"}
            value={userData.email}
            change={handleChange}
          />
          {!selected.name ? (
            <>
              <label className="text-creminho mt-5 font-semibold col-span-12">
                Senha:
              </label>
              <CustomInput
                includedClasses={"rounded-full col-span-12 "}
                name={"password"}
                value={userData.password}
                change={handleChange}
              />
              <label className="text-creminho mt-5 font-semibold col-span-12">
                Confrme a senha:
              </label>
              <CustomInput
                includedClasses={"rounded-full col-span-12 "}
                name={"confirmPass"}
                value={userData.confirmPass}
                change={handleChange}
              />
            </>
          ) : (
            ""
          )}
          <label className="text-creminho mt-5 font-semibold col-span-12">
            Admin:
          </label>
          <div className="col-span-12">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={userData.admin}
                name="admin"
                onChange={handleChange}
                className="sr-only peer "
              />
              <div className="w-12 h-7 bg-gray-200 rounded-full peer dark:bg-verdinho-escurinho peer-checked:after:translate-x-[80%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-creminho after:border-creminho after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-laranjinha"></div>
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="col-start-4 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10"
          >
            Cadastrar Usuário
          </button>
        </div>
      </div>
    </div>
  );
};

export default CadUser;
