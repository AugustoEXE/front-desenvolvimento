import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
const CadBook = () => {
  return (
    <div>
      <Header />
      <div className="w-1/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-2xl my-10 ">Cadastre seu Livro</h1>
        </div>
        <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 grid grid-cols-12 text-left ">
          <label className="text-creminho font-semibold">Título:</label>
          <CustomInput includedClasses={"col-span-12"}  name={"name"}/>
          <label className="text-creminho mt-5 font-semibold">Autor:</label>
          <CustomInput includedClasses={"col-span-12"}  name={"author_id"}/>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12  font-semibold">Páginas:</label>
            <CustomInput includedClasses={"col-span-11 max-md:col-span-12"} type={'Number'}  name={"pages"}/>
          </div>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12 font-semibold">Genero:</label>
            <CustomInput includedClasses={"col-span-10 max-md:col-span-12"} name={"genre_id"} />
            <div className="col-span-2 bg-verdinho-escurinho"></div>
          </div>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12  font-semibold">Data de lançamento:</label>
            <CustomInput includedClasses={"col-span-11 max-md:col-span-12"} type={'date'}  name={"release_date"}/>
          </div>

          <div className="col-span-6 grid grid-cols-12 max-md:col-span-12">
            <label className="text-creminho mt-5 col-span-12 font-semibold">Idioma:</label>
            <CustomInput includedClasses={"col-span-12 max-md:col-span-12"}  name={"language"}/>
          </div>

          <label className="text-creminho font-semibold">Editora:</label>
          <CustomInput includedClasses={"col-span-12"} name={'publish_company_id'}/>

          <label className="text-creminho font-semibold">Sinopse:</label>
          <textarea name="description" className="col-span-12 bg-verdinho-escurinho rounded-full text-creminho text-center p-1"></textarea>

          <button className="col-start-2 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10">Cadastrar livro</button>

        </div>
      </div>
    </div>
  );
};

export default CadBook;