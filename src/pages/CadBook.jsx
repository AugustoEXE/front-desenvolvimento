import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { MagnifyingGlass, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import GenreModal from "../components/cadBookModals/GenreModal";
import AuthorModal from "../components/cadBookModals/AuthorModal";
import PublisherModal from "../components/cadBookModals/PublisherModal";
import { ModalProvider } from "../hooks/useModalValues";
import { usePost } from "../hooks/usePost";
import booksAPI from "../services/books";
import { Navigate, useNavigate } from "react-router-dom";

const CadBook = () => {
  const navigate = useNavigate()
  const [modalGenreIsOpen, setGenreIsOpen] = useState(false);
  const [modalAuthorIsOpen, setAuthorIsOpen] = useState(false);
  const [modalPublisherIsOpen, setPublisherIsOpen] = useState(false);
  const [bookData, setBookData] = useState({
    name: "",
    description: "",
    pages: 0,
    release_date: new Date(),
    language: 0,
    author_id: 0,
    genre_id: 0,
    publish_company_id: 0,
    cover: "",
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImage = async (event) => {
    setBookData({
      ...bookData,
      cover: await convertToBase64(event.target.files[0]),
    });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setBookData({
      ...bookData,
    });

    // console.log(bookData)
    // release_date como null para testar o envio pro servidor/db
    // FORMATAR DATA
    // booksAPI.createBook(bookData)

    const test = async () => {
      try {
        await booksAPI.createBook({ ...bookData });
        navigate("/home")
      } catch (e) {
        console.error(e);
      }
    };

    console.log(test())
  };

  console.log(bookData);

  const handleData = (event) => {
    const { name, value } = event.target;
    console.log();
    setBookData((originalData) => ({
      ...originalData,
      [name]: value,
    }));
  };

  // console.log(bookData);

  return (
    <div className=" flex-col items-center justify-center">
      <Header/>
      

      <div className="w-2/3 m-auto flex items-center justify-center text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-4xl my-10 ">Cadastre seu Livro</h1>
        </div>
      </div>

      <form onSubmit={HandleSubmit}>
        <div className="flex items-center justify-center text-center text-zinc-800">
          {/*formulário*/}
          <div className="bg-azulzinho-escurinho rounded w-[50%] h-[80%] m-10 p-10 z-0 max-xl:mt-3 flex flex-col text-left ">
            <label className="text-creminho font-semibold">Título:</label>
            <CustomInput
              includedClasses={" rounded-full col-span-12"}
              name={"name"}
              value={bookData.name}
              change={handleData}
            />
            <div className="flex justify-between items-center">
              <div className="row-span-6 grid grid-cols-12 max-md:col-span-12">
                <label className="text-creminho mt-3 col-span-12 font-semibold">
                  Autor:
                </label>
                <ModalProvider
                  value={{
                    name: "author_id",
                    value: bookData.author_id,
                    change: handleData,
                  }}
                >
                  <AuthorModal />
                </ModalProvider>
              </div>
              <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
                <label className="text-creminho mt-3 col-span-12 font-semibold">
                  Editora:
                </label>
                <ModalProvider
                  value={{
                    name: "publish_company_id",
                    value: bookData.publish_company_id,
                    change: handleData,
                  }}
                >
                  <PublisherModal />
                </ModalProvider>
              </div>
              <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
                <label className="text-creminho mt-3 col-span-12 font-semibold">
                  Gênero
                </label>
                <ModalProvider
                  value={{
                    name: "genre_id",
                    value: bookData.genre_id,
                    change: handleData,
                  }}
                >
                  <GenreModal />
                </ModalProvider>
              </div>
            </div>

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12  font-semibold">
                Páginas:
              </label>
              <CustomInput
                includedClasses={
                  " col-span-12 bg-verdinho-escurinho rounded-3xl text-creminho text-center p-1"
                }
                type={"Number"}
                name={"pages"}
                value={bookData.pages}
                change={handleData}
              />
            </div>

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12  font-semibold">
                Data de lançamento:
              </label>
              <CustomInput
                includedClasses={
                  " col-span-12 bg-verdinho-escurinho rounded-3xl text-creminho text-center p-1"
                }
                type={"date"}
                name={"release_date"}
                value={bookData.date}
                change={handleData}
              />
            </div>

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12 font-semibold">
                Idioma:
              </label>
              <CustomInput
                includedClasses={" rounded-full col-span-12 max-md:col-span-12"}
                name={"language"}
                value={bookData.language}
                change={handleData}
              />
            </div>

            <label className="text-creminho font-semibold mt-3">Sinopse:</label>
            <textarea
              name="description"
              className="col-span-12 bg-verdinho-escurinho rounded-3xl text-creminho text-center p-1"
              onChange={handleData}
            ></textarea>

            <label className="text-creminho font-semibold mt-3">Capa:</label>
            <div className="flex items-center justify-center w-full col-span-12  text-creminho">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-28 rounded-3xl cursor-pointer bg-verdinho-escurinho  hover:bg-"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadSimple size={64} weight="light" />
                  <p className="mb-2 text-sm ">
                    <span className="font-semibold bg-verdinho rounded-full p-1">
                      Arquivos
                    </span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="cover"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>

            <button className="col-start-4 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10">
              Cadastrar livro
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CadBook;
