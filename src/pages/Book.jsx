import Header from "../components/global/Header";
import { UserCircle } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import booksFromAPI from "../services/books";
import { useGet } from "../hooks/useGet";
import { useBook } from "../components/global/BookProvider";

const Book = () => {
  const {selectedBook} = useBook()
  // const formattedDate = new Date(currentBook?.release_date)
  console.warn(selectedBook)

  return (
    <div className="w-full">
      <Header />
      <div className="w-1/3 m-auto text-center z-10 max-md:w-11/12 max-lg:w-8/12">
        <div className=" xl:absolute bg-laranjinha p-6 rounded-lg right-[25%] top-28 grid grid-cols-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-lg:mt-5 ">
          <div className="text-left">
            <div className="my-1">
              <div className="font-semibold">Nome: </div>
              <div>{selectedBook.name}</div>
            </div>
            <div>
              <div className="font-semibold">E-mail: </div>
              <div>Augusto C. Rodrigues</div>
            </div>
          </div>
          <div className="flex align-middle justify-center">
            <UserCircle size={120} weight="thin" />
          </div>
        </div>

        <div className="bg-azulzinho-escurinho rounded-lg mt-44 p-10 z-0 max-xl:mt-5 max-xl:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="w-11/12 ">
            <p className="text-zinc-800 text-2xl font-semibold text-left mx-4">
              {/* {currentBook?.name} */}
            </p>
            <div className="w-full flex justify-center mb-3">
              <hr className="h-px bg-zinc-600 rounded-full w-full border-0" />
            </div>
            <p className="text-justify">
                {/* lançado em: {formattedDate} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
