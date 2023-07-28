import { BookOpenText, UserCircle, DotsThreeOutlineVertical } from "@phosphor-icons/react";
import { useMemo } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
    
    const size = useMediaQuery();

    console.log(size)


    //const size = useMemo(() => isDesktop ? 58 : 45, [isDesktop])

    return (
        <div>
            <div className="bg-verdinho w-screen h-24 grid grid-cols-3 text-white">
                <div className="flex flex-row justify- items-center ml-3">
                    <span>
                        <BookOpenText size={size} weight="thin" />
                    </span> <span className="font-bold  ml-7 text-3xl max-sm:text-lg">VirtualLibrary</span>
                </div>
                <div className=""></div>
                <div className="flex flex-row justify-end items-center mr-3">
                    <button>
                        <UserCircle size={size} weight="thin" />
                    </button>
                    <button>
                        <DotsThreeOutlineVertical size={size} weight="thin" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Header;