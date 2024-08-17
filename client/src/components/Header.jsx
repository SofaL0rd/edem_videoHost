

import {  Navbar, Dropdown, Avatar } from "flowbite-react";

import logo from "../img/LOGO.png"


export function Header() {
    return (
    
        <Navbar fluid rounded className="bg-primary-purple prima" >
                <Navbar.Brand href="">
                    <img src={logo} className="mr-3 h-[75px] " alt="Edem`s-Garden" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings"  rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                <Navbar.Link href="#" className=" text-xl uppercase hover:text-white text-[#3D1F6E]" active>
                        Popular
                    </Navbar.Link>
                <Navbar.Link href="#" className=" text-xl uppercase hover:text-white text-[#3D1F6E]" >Tags</Navbar.Link>
                <Navbar.Link href="#" className=" text-xl uppercase active:text-white text-[#3D1F6E]">Categories</Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
    
    

    );
}
