import { Avatar } from "@mui/material";

const ChatMessage = () => {
    return (
        <div
            className={`flex ${
                true ? "justify-start" : "justify-end"
            } text-[rgb(5,5,5)] items-end`}
        >
            {true && (
                <Avatar
                    className="mr-2"
                    src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
                />
            )}
            <div
                className={`p-1 ${
                    true ? "rounded-md" : "px-5 rounded-2xl"
                } bg-[#f0f0f0] inline-block`}
            >
                {true && (
                    <img
                        className="w-auto h-[17rem] object-cover rounded-md"
                        src="https://cdn.pixabay.com/photo/2021/06/04/14/14/cat-6309964_1280.jpg"
                        alt=""
                    />
                )}
                <p className={`${true ? "py-2" : "py-1"}`}>message...</p>
            </div>
        </div>
    );
};

export default ChatMessage;
