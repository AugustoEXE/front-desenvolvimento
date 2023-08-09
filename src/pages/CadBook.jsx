import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { MagnifyingGlass, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import ModalBase from "../components/global/ModalBase";
import GenreModal from "../components/cadBookModals/GenreModal"
import AuthorModal from "../components/cadBookModals/AuthorModal"




const CadBook = () => {
  const [modalGenreIsOpen, setGenreIsOpen] = useState(false);
  const [modalAuthorIsOpen, setAuthorIsOpen] = useState(false);
  const [bookData, setBookData] = useState({
    name: "",
    description: "",
    pages: 0,
    release_date: new Date(),
    language: 0,
    author_id: 0,
    genre_id: 0,
    publish_company_id: 0,
    cover: ''
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
    setBookData({...bookData, cover: await convertToBase64(event.target.files[0])})
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleData = (event) => {
    const { name, value } = event.target;

    setBookData((originalData) => ({
      ...originalData,
      [name]: value,
    }));
  };



  return (
    <div>
      <GenreModal open={modalGenreIsOpen} isOpen={setGenreIsOpen}/>
      <AuthorModal open={modalAuthorIsOpen} isOpen={setAuthorIsOpen}/>
      
      <Header />

      
        <div className="w-2/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
          <div>
            <h1 className="font-semibold text-4xl my-10 ">Cadastre seu Livro</h1>
          </div>
        </div> 
      
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
          {/*formulário*/}
          <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-3 grid grid-cols-12 text-left ">


            <label className="text-creminho font-semibold">Título:</label>
            <CustomInput includedClasses={" rounded-full col-span-12"} name={"name"} change={handleData}/>
            

            <div className="col-span-12 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12 font-semibold">Autor:</label>
              <CustomInput includedClasses={"col-span-10 max-md:col-span-12 rounded-l-full"} type={'Number'} name={"author_id"} change={handleData}/>
              <button onClick={() => setAuthorIsOpen(true)} className="flex col-span-2 bg-verdinho-escurinho rounded-r-full text-creminho align-middle"> <span className="m-auto">
                <MagnifyingGlass size={25} weight="light" />
              </span>
              </button>
            </div>
        

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12  font-semibold">Páginas:</label>
              <CustomInput includedClasses={" rounded-full col-span-11 max-md:col-span-12"} type={'Number'} name={"pages"} change={handleData} />
            </div>
            

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12 font-semibold">Genero:</label>
              <CustomInput includedClasses={"col-span-10 max-md:col-span-12 rounded-l-full"} type={'Number'} name={"genre_id"} change={handleData}/>
              <button onClick={() => setGenreIsOpen(true)} className="flex col-span-2 bg-verdinho-escurinho rounded-r-full text-creminho align-middle"> <span className="m-auto">
                <MagnifyingGlass size={25} weight="light" />
              </span>
              </button>
            </div>


            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12  font-semibold">Data de lançamento:</label>
              <CustomInput includedClasses={" rounded-full col-span-11 max-md:col-span-12"} type={'date'} name={"release_date"} change={handleData}/>
            </div>


            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12 font-semibold">Idioma:</label>
              <CustomInput includedClasses={" rounded-full col-span-12 max-md:col-span-12"} name={"language"} change={handleData}/>
            </div>


            <label className="text-creminho font-semibold mt-3">Editora:</label>
            <CustomInput includedClasses={" rounded-full col-span-12"} name={'publish_company_id'} type={'number'} change={handleData} />


            <label className="text-creminho font-semibold mt-3">Sinopse:</label>
            <textarea name="description" className="col-span-12 bg-verdinho-escurinho rounded-3xl text-creminho text-center p-1" onChange={handleData}></textarea>


            <label className="text-creminho font-semibold mt-3">Capa:</label>
            <div className="flex items-center justify-center w-full col-span-12  text-creminho">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-28 rounded-3xl cursor-pointer bg-verdinho-escurinho  hover:bg-">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadSimple size={64} weight="light" />
                  <p className="mb-2 text-sm "><span className="font-semibold bg-verdinho rounded-full p-1" >Arquivos</span></p>
                </div>
                <input id="dropzone-file" type="file" name="cover" className="hidden" onChange={handleImage} />
              </label>
            </div>
            


            <button className="col-start-4 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10">Cadastrar livro</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CadBook;
