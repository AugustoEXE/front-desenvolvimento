import { UserCircle } from "@phosphor-icons/react";
import Header from "../components/global/Header";
import { Link } from "react-router-dom";

const AdminHome = () => (
  <div className="w-full">
    <Header />
    <div className="w-1/2 m-auto text-center z-10 max-md:w-11/12 max-lg:w-8/12">
      <div className=" xl:absolute bg-laranjinha p-6 rounded-lg right-[18%] top-28 grid grid-cols-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-lg:mt-5 ">
        <div className="text-left">
          <div className="my-1">
            <div className="font-semibold">Olá administrador </div>
            <div>Nome do adm</div>
          </div>
        </div>
        <div className="flex align-middle justify-center">
          <UserCircle size={120} weight="thin" />
        </div>
      </div>

      <div className="bg-azulzinho-escurinho rounded-lg mt-44 p-10 z-0 max-xl:mt-5 max-xl:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div className="w-11/12 ">
          <p className="text-zinc-800 text-2xl font-semibold text-left mx-4">
            O que deseja fazer?
          </p>
          <div className="w-full flex justify-center mb-3">
            <hr className="h-px bg-zinc-600 rounded-full w-full border-0" />
          </div>
          <p className="text-center">
            <ul>
              <li><Link to={"/list-books"}><button className="bg-laranjinha my-2 p-1 rounded-full w-1/2 hover:bg-laranjinha-escurinho">Ver Livros do sistema</button></Link></li>
              <li><Link to={"/list-genres"}><button className="bg-laranjinha my-2 p-1 rounded-full w-1/2 hover:bg-laranjinha-escurinho">Ver Generos do sistema</button></Link></li>
              <li><Link to={"/list-authors"}><button className="bg-laranjinha my-2 p-1 rounded-full w-1/2 hover:bg-laranjinha-escurinho">Ver Autores do sistema</button></Link></li>
              <li><Link to={"/list-publishers"}><button className="bg-laranjinha my-2 p-1 rounded-full w-1/2 hover:bg-laranjinha-escurinho">Ver Editoras do sistema</button></Link></li>
              <li><Link to={"/list-users"}><button className="bg-laranjinha my-2 p-1 rounded-full w-1/2 hover:bg-laranjinha-escurinho">Ver Usuarios do sistema</button></Link></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AdminHome;
