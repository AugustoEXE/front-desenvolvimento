import ModalBase from "../global/ModalBase";
import { useGet } from "../../hooks/useGet";
import { listGenres } from "../../services/genres";
import { useState } from "react";
import { useModalValues } from "../../hooks/useModalValues";

const GenreModal = () => {
  const list = useGet(() => listGenres());
  const { change, name } = useModalValues()
  return (

    <ModalBase>
      <div className="">
        {list.map((e) => {
          return (
            <div className="flex justify-around align text-2xl align-middle">
              <input
                type="radio"
                name={name}
                value={e.id}
                className="w-6 h-6 mt-1"
                onChange={(event)=>change(event.target)}
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
