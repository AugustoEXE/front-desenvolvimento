import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import ModalBase from "../components/global/ModalBase";
const CadBook = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [bookData, setBookData] = useState({
    name: "",
    description: "",
    pages: 0,
    release_date: new Date(),
    language: 0,
    author_id: 0,
    genre_id: 0,
    publish_company_id: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookData  );
  };

  const handleData = (event) => {
    const { name, value } = event.target;

    setBookData((originalData) => ({
      ...originalData,
      [name]: value,
    }));
  };

  console.log(modalIsOpen);

  return (
    <div>
      <ModalBase open={modalIsOpen} isOpen={setIsOpen}>
        <div className="">
          <div className="flex justify-around text-2xl align-middle">
            <input
              type="radio"
              name="genre_id"
              value="1"
              className="w-6 h-6 mt-1"
            />
            <p>1</p>
            <p>Fulaninho</p>
          </div>
        </div>
      </ModalBase>
      <Header />
      <div className="w-1/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-2xl my-10 ">Cadastre seu Livro</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 grid grid-cols-12 text-left "
        >
          <label className="text-creminho font-semibold">Título:</label>
          <CustomInput
            includedClasses={" rounded-full col-span-12"}
            name={"name"}
            onChanged={handleData}
          />
          <label className="text-creminho mt-5 font-semibold">Autor:</label>
          <CustomInput
            includedClasses={" rounded-full col-span-12"}
            name={"author_id"}
            onChanged={handleData}
          />

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12  font-semibold">
              Páginas:
            </label>
            <CustomInput
              includedClasses={" rounded-full col-span-11 max-md:col-span-12"}
              type={"Number"}
              name={"pages"}
              onChanged={handleData}
            />
          </div>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12 font-semibold">
              Genero:
            </label>
            <CustomInput
              includedClasses={"col-span-10 max-md:col-span-12 rounded-l-full"}
              name={"genre_id"}
              onChanged={handleData}
            />
            <button
              onClick={() => setIsOpen(true)}
              className="flex col-span-2 bg-verdinho-escurinho rounded-r-full text-creminho align-middle"
            >
              {" "}
              <span className="m-auto">
                <MagnifyingGlass size={25} weight="light" />
              </span>
            </button>
          </div>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12  font-semibold">
              Data de lançamento:
            </label>
            <CustomInput
              value={bookData}
              includedClasses={" rounded-full col-span-11 max-md:col-span-12"}
              type={"date"}
              name={"release_date"}
              onChanged={handleData}
            />
          </div>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12 font-semibold">
              Idioma:
            </label>
            <CustomInput
              value={bookData}
              includedClasses={" rounded-full col-span-12 max-md:col-span-12"}
              name={"language"}
              onChanged={handleData}
            />
          </div>

          <label className="text-creminho font-semibold">Editora:</label>
          <CustomInput
            value={bookData}
            includedClasses={" rounded-full col-span-12"}
            name={"publish_company_id"}
            onChanged={handleData}
          />

          <label className="text-creminho font-semibold">Sinopse:</label>
          <textarea
            name="description"
            className="col-span-12 bg-verdinho-escurinho rounded-full text-creminho text-center p-1"
            onChanged={handleData}
          ></textarea>

          <button className="col-start-2 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10">
            Cadastrar livro
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadBook;
