import {
    AddPhotoAlternate,
    Call,
    ChatBubbleOutline,
    Info,
    Videocam,
    West,
} from "@mui/icons-material";
import {
    Avatar,
    Backdrop,
    CircularProgress,
    Grid,
    IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createMessage,
    getAllChat,
    getMessageFromChat,
} from "../../Redux/Message/message.action";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import SearchUser from "../../components/SearchUser/SearchUser";
import UserChatCard from "../../components/UserChatCard/UserChatCard";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

const Messenger = () => {
    const dispatch = useDispatch();
    const auth = useSelector((store) => store.auth);
    const message = useSelector((store) => store.message);
    const [currentChat, setCurrentChat] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getAllChat());
        if (currentChat) {
            dispatch(getMessageFromChat(currentChat?.id));
        }
    }, [dispatch, currentChat, message.message]);

    const handleSelectImage = async (e) => {
        setLoading(true);
        console.log("handle select image");
        const imgUrl = await uploadToCloudinary(e.target.files[0], "image");
        setSelectedImage(imgUrl);
        setLoading(false);
    };

    const handleCreateMessage = (value) => {
        const message = {
            chatId: currentChat?.id,
            content: value,
            image: selectedImage,
        };
        dispatch(createMessage(message));
    };

    return (
        <div>
            <Grid container className="h-screen overflow-y-hidden">
                <Grid className="px-5 border" item xs={3}>
                    <div className="flex h-full justify-between space-x-2">
                        <div className="w-full">
                            <a
                                href="./"
                                className="flex space-x-4 items-center py-5"
                            >
                                <West />
                                <h1 className="text-xl font-bold">Home</h1>
                            </a>

                            <div className="h-[83vh]">
                                <div className="">
                                    <SearchUser />
                                </div>

                                <div className="h-full mt-5 overflow-y-scroll hideScrollBar">
                                    {message.chats.map((item) => (
                                        <div
                                            onClick={() => {
                                                setCurrentChat(item);
                                            }}
                                            key={item?.id}
                                        >
                                            <UserChatCard
                                                currentChatId={currentChat?.id}
                                                chat={item}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className="h-full" item xs={9}>
                    {currentChat ? (
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center border border-l p-5">
                                <div className="flex items-center space-x-3">
                                    <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg" />
                                    <p className="font-semibold">
                                        {auth?.user?.id ==
                                        currentChat?.chatUser[0]?.id
                                            ? currentChat?.chatUser[1]
                                                  .firstName +
                                              " " +
                                              currentChat?.chatUser[1].lastName
                                            : currentChat?.chatUser[0]
                                                  .firstName +
                                              " " +
                                              currentChat?.chatUser[0].lastName}
                                    </p>
                                </div>

                                <div className="flex space-x-3">
                                    <IconButton>
                                        <Call />
                                    </IconButton>
                                    <IconButton>
                                        <Videocam />
                                    </IconButton>
                                    <IconButton>
                                        <Info />
                                    </IconButton>
                                </div>
                            </div>

                            <div className="overflow-y-scroll hideScrollBar h-[80vh] px-2 space-y-5 py-5">
                                {message?.messages?.map((item) => (
                                    <ChatMessage
                                        key={item?.id}
                                        message={item}
                                    />
                                ))}
                            </div>
                            <div className="sticky w-full bottom-0 border-1 self-end">
                                {selectedImage && (
                                    <img
                                        className="w-[10rem] h-auto object-cover px-2 ml-10 rounded-2xl overflow-hidden"
                                        src={selectedImage}
                                        alt=""
                                    />
                                )}
                                <div className="py-5 flex items-center justify-center space-x-5">
                                    <input
                                        onKeyUp={(e) => {
                                            if (
                                                e.key == "Enter" &&
                                                e.target.value
                                            ) {
                                                handleCreateMessage(
                                                    e.target.value,
                                                );
                                                setSelectedImage("");
                                            }
                                        }}
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
                    ) : (
                        <div className="h-full space-y-5 flex flex-col justify-center items-center">
                            <ChatBubbleOutline sx={{ fontSize: "15rem" }} />
                            <p className="text-xl font-semibold">
                                No Chat Selected
                            </p>
                        </div>
                    )}
                </Grid>
            </Grid>

            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
};

export default Messenger;
