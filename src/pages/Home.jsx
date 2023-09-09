import { MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";
import { React, useEffect, useState } from "react";
import { useGet } from "../hooks/useGet";
import booksFromAPI from "../services/books";
import DropdownSearch from "../components/global/DropdownSearch";

import Header from "../components/global/Header";
import Dropdown from "../components/global/Dropdown";
import listBooks from "../services/books";

import ListofBook from "../components/global/Book";
import { ListButtonFilter } from "../components/global/ListButtonFilter";

const Home = () => {
  const [search, setSearch] = useState("");
  let listBooks = useGet(() => booksFromAPI.listBooks());
  const filtredBooks = listBooks.filter((e) => e.name == search);

  const handleBooksSearched = (childValue) => {
    setSearch(childValue);
  };

  return (
    <div>
      <Header />
      <div className="w-1/2 m-auto text-center text-zinc-800 max-sm:w-full">
        <h1 className="font-bold text-4xl mt-16">
          Bem vindo(a) à VirtualLibrary
        </h1>
        <p className="text-xl mt-4">
          Pesquise por livros, autores, editoras, entre outras diversas
          categorias em nossa biblioteca virutal
        </p>
        <DropdownSearch values={listBooks} searchFunc={handleBooksSearched} />
        <ListButtonFilter />
      </div>
      <div className="w-full flex justify-center mt-4">
        <hr className="h-px bg-zinc-600 rounded-full w-9/12 border-0" />
      </div>

      <div className="w-full text-center flex content-center justify-center">
        <div className="grid grid-rows-4  grid-cols-3 gap-20">
          <ListofBook
            books={filtredBooks.length > 0 ? filtredBooks : listBooks}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
