"use client"
import {
    BsArrowLeftShort,
    BsChevronDown,
    BsFillImageFill, BsPerson,
    BsReverseLayoutTextSidebarReverse,
    BsSearch
} from "react-icons/bs";
import {useState} from "react";
import {
    AiFillEnvironment,
    AiOutlineBarChart,
    AiOutlineFileText,
    AiOutlineLogout, AiOutlineMail,
    AiOutlineSetting
} from "react-icons/ai";
import {RiDashboardFill} from "react-icons/ri";
import Link from "next/link";

function AiOutlineMain() {
    return null;
}

export default function SidNavBar({child,Menus}:any) {
    const [open,setOpen] = useState(false);
    const [subMenuOpen,setSubMenuOpen] = useState(false);

    return (
        <>
            <div className={"flex"}>
                <div className={`h-screen bg-slate-700 p-5 pt-8 relative duration-300 ${open?"w-72":"w-20"}`}>
                    <BsArrowLeftShort onClick={()=>setOpen(!open)} className={`bg-white rounded-full text-3xl text-gray-800 absolute -right-3 top-9 border cursor-pointer ${!open && "rotate-180 "}`} size={30}/>
                    <div className={'inline-flex'}>
                        <AiFillEnvironment className={`bg-amber-300 h-10 w-10 text-black rounded-full p-1.5 cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg] bg-red-600"}`}/>
                        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
                            Tailwind
                        </h1>
                    </div>
                    <div className={`flex items-center rounded-md bg-gray-300/30 mt-6 px-4 py-2 ${!open?"px-1.5 ":"px-4"}`}>
                        <BsSearch className={"text-white text-lg block float-left cursor-pointer"}/>
                        <input type={"search"} placeholder={"Search"} className={`ml-2 text-base bg-transparent w-full focus:border-0 focus:outline-0 ${!open && "hidden"}`}></input>
                    </div>

                    <ul className={'pt-2'}>
                        {Menus.map((menu:any,index:number)=>(
                            <>
                                <Link href={menu.link?menu.link:"/"}>
                                    <li key={index} className={`${menu.spacing?"mt-9": "mt-2"} text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-2`}>
                                    <span className='text-2xl block float-left'>
                                        {menu.icon?menu.icon:<RiDashboardFill/> }
                                    </span>
                                        <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>

                                        {menu.title}

                                    </span>
                                        {menu.submenu && open && (
                                            <BsChevronDown className={`text-xl block float-left  ${subMenuOpen && "rotate-180"}`} onClick={()=>{
                                                setSubMenuOpen(!subMenuOpen);
                                            }}/>
                                        )}
                                    </li>
                                </Link>
                                {/*{menu.submenu && subMenuOpen && open && (*/}
                                {/*    <ul className={`ml-4 ${!open && "hidden"}`}>*/}
                                {/*        {menu.submenuItems.map((submenuItem:any,index:number)=>(*/}
                                {/*            <li key={index} className={'text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 rounded-md mt-2'}>*/}
                                {/*            <span className='text-2xl block float-left'>*/}
                                {/*                <RiDashboardFill/>*/}
                                {/*            </span>*/}
                                {/*                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>*/}
                                {/*                {submenuItem.title}*/}
                                {/*            </span>*/}
                                {/*            </li>*/}
                                {/*        ))}*/}
                                {/*    </ul>*/}
                                {/*)}*/}
                            </>
                        ))}
                    </ul>
                </div>
                <div className="w-full h-screen overflow-y-scroll">
                        {child}
                </div>
            </div>
        </>
    )
}
