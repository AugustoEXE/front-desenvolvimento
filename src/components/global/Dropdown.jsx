import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotsThreeOutlineVertical, SignOut } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/users";
import { useGet } from "../../hooks/useGet";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({ size }) {
  const [activate, setActivate] = useState();

  if (activate == true) {
    // useNavigate("/login");
    logoutUser();
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-creminho shadow-sm ring-inset ">
          <DotsThreeOutlineVertical size={size} weight="thin" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-creminho shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to={"/cad-book"}>
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-laranjinha-clarinho text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cadastro de Livro
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link to={"/cad-user"}>
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-laranjinha-clarinho text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cadastro de Usuário
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link to={"/cad-author"}>
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-laranjinha-clarinho text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cadastro de Autor
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link to={"/cad-genre"}>
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-laranjinha-clarinho text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cadastro de Genero
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link to={"/cad-publish-company"}>
                  <a
                    className={classNames(
                      active
                        ? "bg-laranjinha-clarinho text-gray-900"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cadastro de Editora
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={classNames(
                    active
                      ? "bg-laranjinha-clarinho text-gray-900"
                      : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  {active && setActivate(active)}
                  <span className="flex flex-row gap-2 text-center content-center justify-center text-red-500">
                    Sign-out <SignOut size={22} weight="light" />
                  </span>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
