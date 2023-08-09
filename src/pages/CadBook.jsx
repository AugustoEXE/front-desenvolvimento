import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { MagnifyingGlass, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";
import ModalBase from '../components/global/ModalBase'
import FileBase from 'react-file-base64';

const CadBook = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setform] = useState({});

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

  const log64 = async (e) =>{
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    console.log(base64)
  }


  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log(form);
  };



  return (
    <div>
      <ModalBase open={modalIsOpen} isOpen={setIsOpen}>
        <div className="">
          <div className="flex justify-around text-2xl align-middle">
            <input type="radio" name="genre_id" value='1' className="w-6 h-6 mt-1"/>
            <p>1</p>
            <p>Fulaninho</p>
          </div>
          
        </div>
      </ModalBase>
      <Header />
      
        <div className="w-1/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
          <div>
            <h1 className="font-semibold text-4xl my-10 ">Cadastre seu Livro</h1>
          </div>
        </div> 
      
      <form onSubmit={handleSubmmit}>
        <div className="w-1/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
          {/*formulário*/}
          <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-3 grid grid-cols-12 text-left ">

            <label className="text-creminho font-semibold">Título:</label>
            <CustomInput includedClasses={" rounded-full col-span-12"} name={"name"} change={(e)=> {setform({...form, name: e.target.value})}}/>
            

            <label className="text-creminho mt-3 font-semibold">Autor:</label>
            <CustomInput type={'number'} includedClasses={" rounded-full col-span-12"} name={"author_id"} change={(e)=> {setform({...form, author_id: e.target.value})}}/>
        

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12  font-semibold">Páginas:</label>
              <CustomInput includedClasses={" rounded-full col-span-11 max-md:col-span-12"} type={'Number'} name={"pages"} change={(e)=> {setform({...form, pages: e.target.value})}} />
            </div>
            

            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12 font-semibold">Genero:</label>
              <CustomInput includedClasses={"col-span-10 max-md:col-span-12 rounded-l-full"} type={'Number'} name={"genre_id"} change={(e)=> {setform({...form, genre_id: e.target.value})}}/>
              <button onClick={() => setIsOpen(true)} className="flex col-span-2 bg-verdinho-escurinho rounded-r-full text-creminho align-middle"> <span className="m-auto">
                <MagnifyingGlass size={25} weight="light" />
              </span>
              </button>
            </div>


            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12  font-semibold">Data de lançamento:</label>
              <CustomInput includedClasses={" rounded-full col-span-11 max-md:col-span-12"} type={'date'} name={"release_date"} change={(e)=> {setform({...form, release_date: e.target.value})}}/>
            </div>


            <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
              <label className="text-creminho mt-3 col-span-12 font-semibold">Idioma:</label>
              <CustomInput includedClasses={" rounded-full col-span-12 max-md:col-span-12"} name={"language"} change={(e)=> {setform({...form, language: e.target.value})}}/>
            </div>


            <label className="text-creminho font-semibold mt-3">Editora:</label>
            <CustomInput includedClasses={" rounded-full col-span-12"} name={'publish_company_id'} type={'number'} change={(e)=> {setform({...form, publish_company_id: e.target.value})}} />


            <label className="text-creminho font-semibold mt-3">Sinopse:</label>
            <textarea name="description" className="col-span-12 bg-verdinho-escurinho rounded-3xl text-creminho text-center p-1" onChange={(e)=> {setform({...form, description: e.target.value})}}></textarea>


            <label className="text-creminho font-semibold mt-3">Capa:</label>
            <div class="flex items-center justify-center w-full col-span-12  text-creminho">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-28 rounded-3xl cursor-pointer bg-verdinho-escurinho  hover:bg-">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadSimple size={64} weight="light" />
                  <p class="mb-2 text-sm "><span class="font-semibold bg-verdinho rounded-full p-1" >Arquivos</span></p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" onChange={log64} />

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
