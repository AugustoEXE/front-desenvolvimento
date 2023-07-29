import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
const CadBook = () => {
  return (
    <div>
      <Header />
      <div className="w-1/3 m-auto text-center max-sm:w-11/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-2xl my-10 ">Cadastre seu Livro</h1>
        </div>

        <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 grid grid-cols-4 text-left ">
            <label className="text-creminho font-semibold">Título:</label>
            <CustomInput includedClasses={"col-span-4"} />
            <label className="text-creminho mt-5 font-semibold">Autor:</label>
            <CustomInput includedClasses={"col-span-4"} />
            <label className="text-creminho mt-5 col-span-2  font-semibold">Páginas:</label>
            <label className="text-creminho mt-5 col-span-2 font-semibold">Genero:</label>
            <CustomInput includedClasses={"col-span-2"} type={'Number'}/>
            <CustomInput includedClasses={"col-span-2"} />
            <label className="text-creminho mt-5 col-span-2  font-semibold">Data de lançamento:</label>
            <label className="text-creminho mt-5 col-span-2 font-semibold">Idioma:</label>
            <CustomInput includedClasses={"col-span-2"} type={'Number'}/>
            <CustomInput includedClasses={"col-span-2"} />
            <label className="text-creminho font-semibold">Editora:</label>
            <CustomInput includedClasses={"col-span-4"} />

            <button className="col-start-2 col-span-2 bg-laranjinha rounded-full py-1 font-semibold mt-10">Cadastrar livro</button>

        </div>
      </div>
    </div>
  );
};

export default CadBook;
