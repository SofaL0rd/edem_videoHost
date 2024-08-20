import { Avatar, Label, Sidebar } from "flowbite-react";
import homeIcon from "../img/home.png";
import playlistIcon from "../img/playlist.png"
import subsIcon from "../img/subs.png";
import videoIcon from "../img/video.png";
import userIcon from "../img/user.png"

export function Sidepanel() {
    return (
        <Sidebar  className=" *:bg-transparent">
            <Sidebar.Items className="bg-[#16002C] rounded-2xl  h-[86vh] py-3 uppercase text-start   " >
                <Sidebar.ItemGroup >
                    <Sidebar.Item  href="#"  className="text-white  hover:bg-[#432166] " >
                        <img src={homeIcon} alt="Home" className=" inline h-[30px] mr-2"/>
                        <span className=" align-middle">Home</span>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-white  hover:bg-[#432166]" >
                        <img src={subsIcon} alt="SUBSCRIPTIONS" className=" inline h-[30px] mr-2" />
                        <span className=" align-middle">SUBSCRIPTIONS</span>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup className=" border-[#3D1F6E] border-t-2 ">
                    <Label className="mx-5 text-white">You</Label>
                    <Sidebar.Item href="#" className="text-white  hover:bg-[#432166]" >
                        <img src={userIcon} alt="My channel" className=" inline h-[30px] mr-2" />
                        <span className=" align-middle">My channel</span>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-white  hover:bg-[#432166]">
                        <img src={videoIcon} alt="My videos" className=" inline h-[30px] mr-2" />
                        <span className=" align-middle">My videos</span>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-white  hover:bg-[#432166]">
                        <img src={playlistIcon} alt="My playlist" className=" inline h-[30px] mr-2" />
                        <span className=" align-middle">My playlist</span>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup className=" border-[#3D1F6E] border-t-2  ">
                    <Label className="mx-5 text-white">SUBSCRIPTIONS</Label>
                    <Sidebar.Item href="#" className="text-white    hover:bg-[#432166]" >
                        <Avatar rounded size="sm" style={{ textTransform: "none" }} className="  w-1/2">user1</Avatar>                        
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-white  hover:bg-[#432166]">
                        <Avatar rounded size="sm" style={{ textTransform: "none" }} className="  w-1/2">user2</Avatar>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-white  hover:bg-[#432166]">
                        <Avatar rounded size="sm" style={{ textTransform: "none" }} className=" w-1/2"> user3</Avatar>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}