import { BookOpenText, UserCircle, DotsThreeOutlineVertical } from "@phosphor-icons/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

const Header = () => {
    
    const size = useMediaQuery();

    // console.log(size)


    //const size = useMemo(() => isDesktop ? 58 : 45, [isDesktop])

    return (
        <div>
            <div className="bg-verdinho w-screen h-16 grid grid-cols-3 text-white max-sm:h-20">
                <div className="flex flex-row justify- items-center ml-3">
                    <span>
                        <Link to={'/'}> 
                            <BookOpenText size={size} weight="thin" />
                        </Link>
                    </span> <span className="font-bold  ml-7 text-2xl max-sm:text-lg max-sm:ml-5" >VirtualLibrary</span>
                </div>
                <div className=""></div>
                <div className="flex flex-row justify-end items-center mr-3">
                    <Link to={'/user'}>
                        <UserCircle size={size} weight="thin" />
                    </Link >
                    <button>
                        <DotsThreeOutlineVertical size={size} weight="thin" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Header;