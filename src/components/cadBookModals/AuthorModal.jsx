import ModalBase from "../global/ModalBase";
import { listAuthors } from "../../services/authors";
import { useGet } from "../../hooks/useGet";

const AuthorModal = ({ open, isOpen }) => {
  const listBooks = useGet(() => listAuthors());

  return (
    <ModalBase open={open} isOpen={isOpen} title={"Autores"}>
      {listBooks.map((item, i) => {
        return (
          <div key={i} className="col-span-3 grid grid-cols-3">
            <div className="">
              <div className="flex justify-around text-2xl align-middle">
                <input
                  type="radio"
                  name="genre_id"
                  value={item.id}
                  className="w-3 h-3 mt-1"
                />
              </div>
            </div>
            <div>{item.id}</div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </ModalBase>
  );
};

export default AuthorModal;
