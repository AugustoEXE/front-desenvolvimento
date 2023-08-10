import ModalBase from "../global/ModalBase";
import { useGet } from "../../hooks/useGet";
import { listGenres } from "../../services/genres";
import { useState } from "react";

const GenreModal = ({ open, isOpen, name, change, setGenreSelected }) => {
  const list = useGet(() => listGenres());

  return (
    <ModalBase
      open={open}
      isOpen={isOpen}
      title={"Generos"}
      clean={setGenreSelected}
    >
      <div className="">
        {list.map((e) => {
          return (
            <div className="flex justify-around align text-2xl align-middle">
              <input
                type="radio"
                name={name}
                value={Number(e.id)}
                className="w-6 h-6 mt-1"
                onChange={change}
              />
              <p>{e.name}</p>
            </div>
          );
        })}
      </div>
    </ModalBase>
  );
};

export default GenreModal;
