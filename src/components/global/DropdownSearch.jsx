import { Fragment, useState } from "react";
import { Combobox } from "@headlessui/react";
import { Menu, Transition } from "@headlessui/react";
import { MagnifyingGlass, SlidersHorizontal } from "@phosphor-icons/react";
import { DotsThreeOutlineVertical, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownSearch({ size, values }) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  if (search) {
    const searchedBooks = values.filter((e) => e.name.includes(search));
    if (searchedBooks) {
      setBooks(searchedBooks);
    }
  }

  const [selected, setSelected] = useState(values[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? values
      : values.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="m-10 w-200">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 appearance-none focus:outline-none"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-creminho shadow-sm ring-inset ">
//           <form className=" grid grid-cols-9 mt-4">
//             <input
//               type="text"
//               name="searchText"
//               onChange={handleChange}
//               className="col-start-3 col-span-4 h-9 bg-verdinho-escurinho rounded-l-full text-creminho placeholder:text-creminho placeholder:italic p-2"
//               placeholder="Search"
//             />
//             <span className="bg-verdinho-escurinho rounded-r-full text-creminho flex align-middle justify-end mr-3">
//               <span className="m-auto">
//                 <MagnifyingGlass size={30} weight="light" />
//               </span>
//             </span>
//             <span>
//               <SlidersHorizontal size={35} weight="light" />
//             </span>
//           </form>
//         </Menu.Button>
//       </div>

//       <Transition
//         // as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         {books ? (
//           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-creminho shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             {books.map((e) => (
//               <Menu.Item>
//                 {search
//                   ? ({ active }) => {
//                       const searchedBooks = useGet(() => books.listBooks(), {
//                         name: e.name,
//                       });
//                     }
//                   : null}
//                 <span>e.name</span>
//               </Menu.Item>
//             ))}
//           </Menu.Items>
//         ) : (
//           ""
//         )}
//       </Transition>
//     </Menu>
//   );
// }
