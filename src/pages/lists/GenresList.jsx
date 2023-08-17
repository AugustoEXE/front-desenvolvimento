import { PencilLine, PencilSimpleLine, TrashSimple } from "@phosphor-icons/react";
import Header from "../../components/global/Header";
import { useGet } from "../../hooks/useGet";
import { listGenres, deleteGenre } from "../../services/genres";
import { useState, useMemo } from "react";



/*
TODO: 
precisa fazer o componente renderizar, mas ta apagando
*/
const GenreList = () => {

    const [updated,setUpdated] = useState(0)
    const list = useGet(() => listGenres())

    const handleDelete = (id) =>{
        deleteGenre(id)
        .then(res => setUpdated(id),console.log(res.data))
        .catch(err => console.warn(err))
    }


  return (
    <div>
      <Header />
      <div className="w-2/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-4xl my-10 ">Lista de Gêneros</h1>
        </div>
        <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 ">
            <table className="w-full text-center rounded text-creminho shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.28)]">
                <thead className="bg-laranjinha-escurinho h-12">
                    <tr >
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((e, i)=>{
                            return (
                                <tr className="even:bg-verdinho-escurinho hover:bg-azulzinho" key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>
                                    <button type="button"  onClick={()=> handleDelete(e.id)} className="p-2 m-2 bg-laranjinha-escurinho rounded"><TrashSimple size={32} weight="light" /></button>
                                    <button type="button" className="p-2 m-2 bg-verdinho rounded"><PencilSimpleLine  size={32} weight="light" /></button>
                                </td>
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default GenreList;
