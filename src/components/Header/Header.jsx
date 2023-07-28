import { BookOpenText, UserCircle, DotsThreeOutlineVertical } from "@phosphor-icons/react";


const Header = () => {
    return (
        <div>
            <div className="bg-verdinho w-screen h-24 grid grid-cols-3 text-white">
                <div className="text-left ml-3 flex flex-row items-center content-center ">
                    <BookOpenText size={58} weight="thin" /> <span className="font-bold text-3xl ml-7">VirtualLibrary</span>
                </div>
                <div className=""></div>
                <div className="flex flex-row justify-end items-center mr-3">
                    <button>
                        <UserCircle size={58} weight="thin" />
                    </button>
                    <button>
                        <DotsThreeOutlineVertical size={50} weight="thin" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;