import { AddPhotoAlternate, Call, VideoCall, West } from "@mui/icons-material";
import { Avatar, Grid, IconButton } from "@mui/material";
import SearchUser from "../../components/SearchUser/SearchUser";
import UserChatCard from "../../components/UserChatCard/UserChatCard";

const Message = () => {
    const handleSelectImage = () => {
        console.log("handle select image");
    };

    return (
        <div>
            <Grid container className="h-screen overflow-y-hidden">
                <Grid className="px-5" item xs={3}>
                    <div className="flex h-full justify-between space-x-2">
                        <div className="w-full">
                            <div className="flex space-x-4 items-center py-5">
                                <West />
                                <h1 className="text-xl font-bold">Home</h1>
                            </div>

                            <div className="h-[83vh]">
                                <div className="">
                                    <SearchUser />
                                </div>

                                <div className="h-full space-x-4 mt-5 overflow-y-scroll hideScrollBar">
                                    <UserChatCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className="h-full" item xs={9}>
                    <div>
                        <div className="flex justify-between items-center border-l p-5">
                            <div className="flex items-center space-x-3">
                                <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg" />
                                <p>Nguyễn Thị Ngọc Meow</p>
                            </div>

                            <div className="flex space-x-3">
                                <IconButton>
                                    <Call />
                                </IconButton>
                                <IconButton>
                                    <VideoCall />
                                </IconButton>
                            </div>
                        </div>

                        <div className="overflow-y-scroll hideScrollBar h-[82vh] px-2 space-y-5 py-5">
                            Message
                        </div>

                        <div className="sticky bottom-0 border-1">
                            <div className="py-5 flex items-center justify-center space-x-5">
                                <input
                                    className="bg-transparent border border-[#b9bed3] rounded-full w-[90%] py-3 px-5"
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Type message..."
                                />

                                <div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleSelectImage}
                                        className="hidden"
                                        name=""
                                        id="image-input"
                                    />
                                    <label htmlFor="image-input">
                                        <AddPhotoAlternate />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Message;
