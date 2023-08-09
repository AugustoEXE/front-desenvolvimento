import { MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";
import { React, useEffect, useState } from "react";
import Header from "../components/global/Header";

import ListofBook from "../components/global/Book";

const Home = () => {
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
        <div className=" grid grid-cols-9 mt-4">
          <input
            className="col-start-3 col-span-4 h-9 bg-verdinho-escurinho rounded-l-full text-creminho placeholder:text-creminho placeholder:italic"
            placeholder="Search"
          />
          <span className="bg-verdinho-escurinho rounded-r-full text-creminho flex align-middle justify-end mr-3">
            <span className="m-auto">
              <MagnifyingGlass size={30} weight="light" />
            </span>
          </span>
          <span>
            <SlidersHorizontal size={35} weight="light" />
          </span>
        </span>
        <span>
          <SlidersHorizontal size={35} weight="light" />
        </span>
      </div>
    </div>
    <div className="w-full flex justify-center mt-4">
      <hr className="h-px bg-zinc-600 rounded-full w-9/12 border-0" />
    </div>

    <div className="w-full text-center flex content-center justify-center">
      <div className="grid grid-rows-4  grid-cols-3 gap-20">
        <ListofBook />
      </div>
    </div>
  </div>
);

export default Home
