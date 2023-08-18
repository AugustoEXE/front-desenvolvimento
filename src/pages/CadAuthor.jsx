import Header from "../components/global/Header";
import CustomInput from "../components/global/CustomInput";
import { useState } from "react";
import { createAuthors, updateAuthors } from "../services/authors";
import { useNavigate } from "react-router-dom";
import { useUpdate } from "../components/global/UpdateProvider";

const CadAuthor = () => {
    const {selected} = useUpdate()
    const [author,setAuthor] = useState(!selected ? '' : selected.name)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!selected){
            createAuthors(({ name: author })).then(navigate('/list-authors'))
        }

        updateAuthors(selected?.id,({ name: author })).then(navigate('/list-authors'))
    }
    return (
        <div>
            <Header />
            <div className="w-1/2 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
                <div>
                    <h1 className="font-semibold text-4xl my-10 ">Cadastro de Autor</h1>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 grid grid-cols-12 text-left ">
                        <label className="text-creminho font-semibold col-span-12">
                            Nome:
                        </label>
                        <CustomInput includedClasses={"rounded-full col-span-12 "} name={"name"} value={author} change={({target})=>setAuthor(target.value)} />
                        <button className="col-start-4 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10" type='submit'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CadAuthor;
