import { PencilSimpleLine, TrashSimple } from "@phosphor-icons/react";
import Header from "../../components/global/Header";
import { useGet } from "../../hooks/useGet";
import BookAPI from "../../services/books";
import { useState } from "react"

const BooksList = () => {
  const [updated, setUpdated] = useState(0)
  const [list, setList] = useState([])

  useEffect(() => {
    const request = async () => {
      const result = await BookAPI.listBooks();
      setList(result.data);
    }
    request()

  }, [updated])

  const handleDelete = (id) => {
    BookAPI.deleteBook(id)
      .then(res => setUpdated(id))
      .catch(err => console.warn(err))
  }

  return (
    <div>
      <Header />
      <div className="w-2/3 m-auto text-center max-md:w-11/12 max-lg:w-8/12 text-zinc-800">
        <div>
          <h1 className="font-semibold text-4xl my-10 ">Lista de Livros</h1>
        </div>
        <div className="bg-azulzinho-escurinho rounded p-10 z-0 max-xl:mt-5 text-creminho">
          <table className="w-full text-center rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.28)]">
            <thead className="bg-laranjinha-escurinho h-12">
              <tr>
                <th>Id</th>
                <th>Capa</th>
                <th>Titulo</th>
                <th>Páginas</th>
                <th>Autor</th>
                <th>Gênero</th>
                <th>Editora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((e, i) => {
                  console.log(e)
                  return (

                    <tr className="even:bg-verdinho-escurinho hover:bg-azulzinho" key={i}>
                      <td>{e.id}</td>
                      <td>{e.cover?.type}</td>
                      <td>{e.name}</td>
                      <td>{e.pages}</td>
                      <td>{e.author.name}</td>
                      <td>{e.genre.name}</td>
                      <td>{e.publish_company.name}</td>
                      <td>
                        <button type="button" onClick={() => handleDelete(e.id)} className="p-2 m-2 bg-laranjinha-escurinho rounded"><TrashSimple size={32} weight="light" /></button>
                        <button type="button" className="p-2 m-2 bg-verdinho rounded"><PencilSimpleLine size={32} weight="light" /></button>
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

export default BooksList;
