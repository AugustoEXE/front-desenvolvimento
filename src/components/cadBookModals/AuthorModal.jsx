import ModalBase from "../global/ModalBase";
import { listAuthors } from "../../services/authors";
import { useGet } from "../../hooks/useGet";
import { useState } from "react";
import { useModalValues } from "../../hooks/useModalValues";

// const listAuthors = useGet(() => .listBooks())

const AuthorModal = () => {
  const list = useGet(() => listAuthors());
  const { change, name } = useModalValues();
  return (
    <ModalBase>
      {list.map((item, i) => {
        return (
          <div
            key={i}
            className="flex justify-between items-center text-2xl align-middle p-4"
          >
            <input
              type="radio"
              name={name}
              value={item.id}
              className="w-6 h-6 mt-1"
              onChange={change}
            />
            <p>{item.name}</p>
          </div>
        );
      })}
    </ModalBase>
  );
};

export default AuthorModal;
