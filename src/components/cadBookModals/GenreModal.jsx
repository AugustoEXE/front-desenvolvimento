import ModalBase from "../global/ModalBase";
import { useGet } from "../../hooks/useGet";
import { listGenres } from "../../services/genres";
import { useState } from "react";
import { useModalValues } from "../../hooks/useModalValues";

const GenreModal = () => {
  const list = useGet(() => listGenres());
  const { change, name } = useModalValues();
  return (
    <select
      name={name}
      id=""
      onChange={change}
      className="rounded-full col-span-11 max-md:col-span-12 bg-verdinho-escurinho  text-creminho text-center p-1 h-9"
    >
      {list.map((e) => {
        return (
          <>
            <option disabled selected></option>
            <option name={name} value={e.id}>
              {e.name}
            </option>
          </>
        );
      })}
    </select>
  );
};

export default GenreModal;
