import { Navbar, Dropdown, Avatar,   Button } from "flowbite-react";
import { IoSearch } from "react-icons/io5";

import logo from "../img/LOGO.png"
import fileUploadImg from "../img/file_upload.png"
import user from "../img/user.png"
import SignIn from "./Sign-in";
import SignUp from "./Sign-up";


export function Header() { 
    return (
    
        <Navbar fluid rounded className="bg-primary-purple  " >
                <Navbar.Brand href="#">
                    <img src={logo} className=" mx-8 h-[75px] " alt="Edem`s-Garden" />
                </Navbar.Brand>
           
            <Navbar.Collapse className="mx-auto px-5 ">
                
                <Navbar.Link href="#" className=" text-2xl uppercase mx-1  text-[#3D1F6E]" active>
                        Popular
                    </Navbar.Link>
                <Navbar.Link href="#" className="  text-2xl uppercase mx-1 hover:text-white text-[#3D1F6E]"  >Tags</Navbar.Link>
                <Navbar.Link href="#" className=" text-2xl uppercase mx-1 active:text-white text-[#3D1F6E]">Categories</Navbar.Link>

            </Navbar.Collapse>

                <form className="  w-[470px] mx-auto max-md:hidden">
                <div className="relative">
                    <div className="absolute inset-y-0  start-[90%] flex items-center ps-3.5 pointer-events-none">
                        <IoSearch className="text-[#593691] text-2xl" />
                    </div>
                    <input type="text" id="search" className="  bg-[#3D1F6E] text-white text-md rounded-3xl block w-full ps-10 p-2.5 " />
                    
                    </div>
                </form>
            <div className="flex  w-[10%]  justify-around">
                <SignIn />
                <SignUp />
                {/* <Button size="2xs" className=" bg-transparent mr-5"><img alt="File Upload" src={fileUploadImg} className="h-[32px] " /></Button>

                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar img={user} alt="User settings" />
                    }
                >
                    
                    <Dropdown.Item></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item></Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle /> */}

            </div>
            </Navbar>
    
    

    );
}
