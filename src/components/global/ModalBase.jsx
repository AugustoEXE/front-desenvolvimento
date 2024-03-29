import { X } from "@phosphor-icons/react";
import React from "react";
import { useModalValues } from "../../hooks/useModalValues";

const ModalBase = ({ children }) => {
  const { name, type, isOpen, setOpen, change, title} = useModalValues();
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-center text-creminho">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-verdinho-escurinho outline-none focus:outline-none text-center">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-verdinho rounded-t text-center align-middle">
                  <h3 className="flex text-3xl font-semibold text-center align-middle">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-creminho float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="h-6 w-6 text-2xl block outline-none focus:outline-none align-middle text-creminho">
                      <X size={32} weight="light" />
                    </span>
                  </button>
                </div>
                {/*content*/}
                <div>{children}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-verdinho rounded-b">
                  <button
                    className="bg-laranjinha text-creminho font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalBase;
