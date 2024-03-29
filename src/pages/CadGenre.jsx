import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { useState } from "react";
import { createGenre, updateGenre } from "../services/genres";
import { useNavigate } from "react-router-dom";
import { useUpdate } from "../components/global/UpdateProvider";
const CadGenre = () => {
  const { selected, setSelected } = useUpdate();
  const [genre, setGenre] = useState(!selected ? "" : selected.name);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selected.name) {
      console.log(selected);
      updateGenre(selected?.id, { name: genre }).then(
        setSelected(""),
        navigate("/list-genres")
      );
    } else {
      createGenre({ name: genre }).then(navigate("/list-genres"));
    }
  };
  return (
    <div>
      <Header />
      <div className="w-1/2 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-4xl my-10 ">Cadastro de Genero</h1>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 grid grid-cols-12 text-left ">
            <label className="text-creminho font-semibold col-span-12">
              Nome:
            </label>
            <CustomInput
              includedClasses={"rounded-full col-span-12 "}
              name={"name"}
              value={genre}
              change={({ target }) => setGenre(target.value)}
            />
            <button
              type="submit"
              className="col-start-4 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CadGenre;
