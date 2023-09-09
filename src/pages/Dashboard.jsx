import { UserCircle } from "@phosphor-icons/react";
import Header from "../components/global/Header";
import { useGet } from "../hooks/useGet";
import { takeCurrentUser } from "../services/users";
import listBooks from "../services/books";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const userBooks = useGet(() => listBooks.userBookedBooks());
  console.log(userBooks);
  const currentUser = useGet(() => takeCurrentUser());
  const { name, id, admin, email } = currentUser;

  return (
    <div className="w-full">
      <Header />
      <div className="w-1/2 m-auto text-center z-10 max-md:w-11/12 max-lg:w-8/12">
        <div className=" xl:absolute bg-laranjinha p-6 rounded-lg right-[18%] top-28 grid grid-cols-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-lg:mt-5 ">
          <div className="text-left">
            <div className="my-1">
              <div className="font-semibold">Nome: </div>
              <div>{name}</div>
            </div>
            <div>
              <div className="font-semibold">E-mail: </div>
              <div>{email}</div>
            </div>
          </div>
          <div className="flex align-middle justify-center">
            <UserCircle size={120} weight="thin" />
          </div>
        </div>

        <div className="bg-azulzinho-escurinho rounded-lg mt-44 p-10 z-0 max-xl:mt-5 max-xl:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <div className="w-11/12 ">
            <p className="text-zinc-800 text-2xl font-semibold text-left mx-4">
              Seus Livros:
            </p>
            <div className="w-full flex justify-center mb-3">
              <hr className="h-px bg-zinc-600 rounded-full w-full border-0" />
            </div>
            <div className="grid gap-5">
              {userBooks.map((e) => (
                <div className="flex p-2 justify-center items-center border-black border rounded-md divide-x">
                  <div className="w-full px-1 flex items-center justify-center  border-gray-600">
                    <img src={VITE_API_URL + "/" + e.book.cover} />
                  </div>
                  <div className="w-full flex px-1 h-full items-center justify-center  border-gray-600">
                    <p className="w-25 break-words">{e.book.name}</p>
                  </div>

                  <div className="w-full h-full px-1 flex items-center justify-center  border-gray-600">
                    <p className="w-25 break-words">{e.book.genre.name}</p>
                  </div>
                  <div className="w-full h-full px-1 flex items-center justify-center  border-gray-600">
                    <p className="break-words">{e.book.publish_company.name}</p>
                  </div>
                  <div className=" w-full flex h-full items-center justify-center  border-gray-600">
                    <p className="w-25 break-words">{e.book.author.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
