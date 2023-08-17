import Header from "../components/global/Header";
import { UserCircle } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import booksFromAPI from "../services/books";
import { useGet } from "../hooks/useGet";
import { useBook } from "../components/global/BookProvider";

const Book = () => {
  const { selectedBook } = useBook();
  // const formattedDate = new Date(currentBook?.release_date)
  console.log(selectedBook.cover);
  return (
    <div className="w-full ">
      <Header />
      <div className=" w-3/4 m-auto  bg-azulzinho-escurinho mt-16 rounded-xl">
        <div className="flex flex-row flex-wrap">
          <img
            className="scale-75 rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            src={new Uint8Array(selectedBook.cover?.data).reduce(
              (str, byte) => str + String.fromCharCode(byte),
              ""
            )}
            alt=""
          />
          <div className="my-auto basis">
            <p className="">
              <span className="font-bold text-xl">Título:</span>{" "}
              {selectedBook.name}
            </p>
            <p className="">
              <span className="font-bold text-xl">Autor:</span>{" "}
              {selectedBook.author.name}
            </p>
            <p className="">
              <span className="font-bold text-xl">Editora:</span>{" "}
              {selectedBook.publish_company.name}
            </p>
            <p className="">
              <span className="font-bold text-xl">Genero:</span>{" "}
              {selectedBook.genre.name}
            </p>
            <p className="">
              <span className="font-bold text-xl">Numero de páginas:</span>{" "}
              {selectedBook.pages}
            </p>
            <p className="">
              <span className="font-bold text-xl">Data de publicação:</span>{" "}
              {selectedBook.release_date}
            </p>
            <p className="">
              <span className="font-bold text-xl">Idioma:</span>{" "}
              {selectedBook.language}
            </p>
            <p className="">
              <span className="font-bold text-xl">Sinopse:</span>{" "}
              {selectedBook.description}
            </p>
            <button
              className=" bg-laranjinha rounded-full py-1 w-1/2 mt-10 font-semibold "
              type="submit"
            >
              retirar
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Book;
