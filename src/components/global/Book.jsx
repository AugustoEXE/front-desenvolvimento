// import demoCover from '../../../public/img/demoCover.jpg'

// TODO: tudo daqui, precisa do desenho
import { React, useState, useEffect } from "react";
import booksFromAPI from "../../services/books";
import { useGet } from "../../hooks/useGet";
import { Link, useNavigate } from "react-router-dom";
import { useBook } from "./BookProvider";

const ListofBook = () => {
  let listBooks = useGet(() => booksFromAPI.listBooks())

  const {setSelectedBook} = useBook()
  const navigate = useNavigate()

  function handleNavigate (e)  {
    setSelectedBook({...e})
    navigate(`/book/${e.id}`)
    
  }

  return listBooks.map((e) => {
    
    // console.log(reader.readAsText(e.cover))
    return (
      <div key={e.id} className="flex flex-col  w-60 h-full">
        <img
          className="w-fit h-max shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] my-auto"
          src={new Uint8Array(e.cover?.data).reduce((str, byte) => str + String.fromCharCode(byte), '')}
          loading="lazy"
          alt={""}
        />
        <p className="text-center font-bold text-2xl ">{e.name}</p>
        <p className="italic mt-2">{e.author.name}</p>
          <button type='button' className="col-start-2 col-span-6 bg-laranjinha rounded-full py-1 font-semibold mt-10" key={e.id} onClick={()=>handleNavigate(e)}>
            Retirar
          </button>
      </div>
    );
  });
};

export default ListofBook;
