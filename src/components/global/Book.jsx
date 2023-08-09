// import demoCover from '../../../public/img/demoCover.jpg'

// TODO: tudo daqui, precisa do desenho
import { React, useState, useEffect } from "react";
import booksFromAPI from "../../services/books";
import { useGet } from "../../hooks/useGet";

const ListofBook = () => {
  const listBooks = useGet(() => booksFromAPI.listBooks())


  return listBooks.map((e) => {
    return (
      <div key={e.id} className="flex flex-col">
        <img
          className="scale-75 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          src={`data:image/png;base64, ${e.cover}`}
          loading="lazy"
          alt={""}
        />
        <p className="text-center font-bold text-2xl ">{e.name}</p>
        <p className="italic mt-2">{e.author.name}</p>
        <button className="col-start-2 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10">
          Retirar
        </button>
      </div>
    );
  });
};

export default ListofBook;
