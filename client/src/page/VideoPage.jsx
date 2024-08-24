import { Avatar, Badge, Button, ButtonGroup, Dropdown, List,  } from "flowbite-react"
import testVideo from "../temp/testVideo.mp4"
// import testVideoSmall from "../temp/testVideoSmall.mp4"

export function VideoPage() {
    return (
        <div className="flex  ">
            <div id="video_detail" className=" min-w-[790px]  max-w-[1100px] m-4">
                <video className=" w-full rounded-xl dark:border-gray-700" controls>
                    <source src={testVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 id="Title" className="text-white mt-4 text-3xl font-bold">Video title</h1>
                <div id="Author" className="flex w-full my-4 items-center justify-between">
                    <Avatar rounded className="mr-8">
                        <div className="  text-white font-light">
                            <div className=" text-2xl">Jonh Doe</div>
                            <div className="text-lg ">93,487 subscribers</div>
                        </div>
                    </Avatar>
                    <Button color="warning" size="xl" className=" *:text-xl w-[180px] mx-8" pill >SUBSCRIBE</Button>
                    <ButtonGroup className="text-white  font-semibold mx-10">
                        <Button color="" className=" bg-[#3D1F6E] hover:bg-[#5d31a5] border-r-2  border-[#593691]" pill>
                            <svg width="33" height="33" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 17.5V35M14 17.5L7 17.5V35H14M14 17.5L23.0923 6.89232C23.9551 5.88578 25.3124 5.45307 26.5986 5.7746L26.6817 5.79541C29.0299 6.38245 30.0876 9.1185 28.7452 11.1324L24.5 17.5H32.4807C34.6894 17.5 36.3459 19.5206 35.9128 21.6864L33.8128 32.1864C33.4856 33.8224 32.0492 35 30.3807 35H14" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="text-2xl ">1222</span>
                        </Button>
                        <Button color="" className="bg-[#3D1F6E] hover:bg-[#5d31a5] " pill>
                            <svg width="33" height="33" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 24.5L28 6.99999M28 24.5L35 24.5L35 6.99999L28 6.99999M28 24.5L18.9077 35.1077C18.0449 36.1142 16.6876 36.5469 15.4014 36.2254L15.3183 36.2046C12.9701 35.6176 11.9124 32.8815 13.2548 30.8676L17.5 24.5L9.5193 24.5C7.31062 24.5 5.65407 22.4794 6.0872 20.3136L8.1872 9.81364C8.51445 8.17757 9.95085 6.99999 11.6193 6.99999L28 6.99999" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="text-2xl">555</span>

                        </Button>
                    </ButtonGroup>
                    <Dropdown className="p-0 " renderTrigger={() =>
                        <Button size="xl" color="" className="*:p-1 bg-[#3D1F6E] mx-8 hover:bg-[#5d31a5]" pill>
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20C12.2091 20 14 21.7908 14 24C14 26.2092 12.2091 28 10 28C7.79086 28 6 26.2092 6 24C6 21.7908 7.79086 20 10 20Z" fill="white" />
                                <path d="M24 20C26.2092 20 28 21.7908 28 24C28 26.2092 26.2092 28 24 28C21.7908 28 20 26.2092 20 24C20 21.7908 21.7908 20 24 20Z" fill="white" />
                                <path d="M42 24C42 21.7908 40.2092 20 38 20C35.7908 20 34 21.7908 34 24C34 26.2092 35.7908 28 38 28C40.2092 28 42 26.2092 42 24Z" fill="white" />
                            </svg>
                        </Button>

                    } dismissOnClick={false}  >
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                    </Dropdown>

                </div>
                <div id="Description" className="w-full  p-5  bg-[#3D1F6E] text-white rounded-2xl">
                    <div className="flex justify-between">
                        <div id="tags" className="flex flex-row justify-around">
                            <Badge size="md" className="mx-1">tag 1</Badge>
                            <Badge size="md" color="pink" className="mx-1">tag 2</Badge>
                        </div>
                        <div id="Created">
                            Feb 6, 2024
                        </div>
                    </div>
                    <p className="m-2 text-justify  text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut libero feugiat,
                        porttitor purus non, mollis massa. Donec vitae tortor magna. Aliquam placerat
                        viverra aliquam. Curabitur vel eleifend ipsum. Morbi et suscipit enim. Nam a
                        erat placerat, dapibus erat nec, luctus eros. Donec et mi in nulla mollis
                        placerat. Maecenas varius dui a pulvinar venenatis. Fusce at sagittis velit.
                        Sed sagittis eu nunc dignissim ornare.

                    </p>
                </div>
            </div>
            <div id="Comments" className="bg-[#3D1F6E] w-[450px] right-2  my-4 mx-2 h-4/5 rounded-3xl">
                <h1 className=" text-center m-4 text-white text-2xl  font-bold">Comments</h1>
                <List unstyled className=" overflow-y-scroll space-y-3 py-2 max-h-[84%]">
                    <List.Item className="p-4  bg-[#8E62D6]">
                        <div className="flex items-center space-x-2 ">
                            <Avatar alt="User1" rounded size="sm" />
                            <p id="UserName" className=" text-sm font-medium text-white">Neil Sims</p>
                            <p id="ComentDate" className=" text-sm ml-2 text-white">21-03-2024</p>
                        </div>
                        <div id="comment" className="inline-flex items-center text-base font-semibold text-white">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut ut libero feugiat, porttitor purus non, mollis massa. Donec vitae tortor magna.
                        </div>
                    </List.Item>
                    <List.Item className="p-4  bg-[#8E62D6]">
                        <div className="flex items-center space-x-2 ">
                            <Avatar alt="User1" rounded size="sm" />
                            <p id="UserName" className=" text-sm font-medium text-white">Neil Sims</p>
                            <p id="ComentDate" className=" text-sm ml-2 text-white">21-03-2024</p>
                        </div>
                        <div id="comment" className="inline-flex items-center text-base font-semibold text-white">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut ut libero feugiat, porttitor purus non, mollis massa. Donec vitae tortor magna.
                        </div>
                    </List.Item>
                    <List.Item className="p-4  bg-[#8E62D6]">
                        <div className="flex items-center space-x-2 ">
                            <Avatar alt="User1" rounded size="sm" />
                            <p id="UserName" className=" text-sm font-medium text-white">Neil Sims</p>
                            <p id="ComentDate" className=" text-sm ml-2 text-white">21-03-2024</p>
                        </div>
                        <div id="comment" className="inline-flex items-center text-base font-semibold text-white">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut ut libero feugiat, porttitor purus non, mollis massa. Donec vitae tortor magna.
                        </div>
                    </List.Item>
                    <List.Item className="p-4  bg-[#8E62D6]">
                        <div className="flex items-center space-x-2 ">
                            <Avatar alt="User1" rounded size="sm" />
                            <p id="UserName" className=" text-sm font-medium text-white">Neil Sims</p>
                            <p id="ComentDate" className=" text-sm ml-2 text-white">21-03-2024</p>
                        </div>
                        <div id="comment" className="inline-flex items-center text-base font-semibold text-white">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut ut libero feugiat, porttitor purus non, mollis massa. Donec vitae tortor magna.
                        </div>
                    </List.Item>
                    <List.Item className="p-4  bg-[#8E62D6]">
                        <div className="flex items-center space-x-2 ">
                            <Avatar alt="User1" rounded size="sm" />
                            <p id="UserName" className=" text-sm font-medium text-white">Neil Sims</p>
                            <p id="ComentDate" className=" text-sm ml-2 text-white">21-03-2024</p>
                        </div>
                        <div id="comment" className="inline-flex items-center text-base font-semibold text-white">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Ut ut libero feugiat, porttitor purus non, mollis massa. Donec vitae tortor magna.
                        </div>
                    </List.Item>
                </List>
                <form className="flex my-2 px-4">
                    <input type="text" id="AddComment" class=" bg-[#593691] text-white text-sm rounded-lg  block w-4/5 " maxLength={300} />
                    <Button className="text-sm  ml-4" color="warning" size="sm" label >Send</Button>
                </form>
            </div>
        </div>
    )
}