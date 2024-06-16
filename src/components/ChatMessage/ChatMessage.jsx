import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const ChatMessage = ({ message }) => {
    const auth = useSelector((store) => store.auth);

    const isReqUserMessage = auth?.user?.id === message?.user?.id;

    return (
        <div
            className={`flex ${
                !isReqUserMessage ? "justify-start" : "justify-end"
            } text-[rgb(255,222,222)] items-end m-5`}
        >
            <Avatar
                className="mr-3 self-start"
                src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
            />
            <div
                className={`p-1 ${
                    message?.image ? "rounded-md" : "px-5 rounded-2xl"
                } ${
                    !isReqUserMessage
                        ? "bg-[#f0f0f0] text-slate-700"
                        : "bg-blue-500 text-white"
                }  inline-block`}
            >
                {message?.image && (
                    <img
                        className="w-auto h-[17rem] object-cover rounded-md bg-white"
                        src={message.image}
                        alt=""
                    />
                )}
                <p className={`${message.image ? "py-2 px-2" : "py-1"}`}>
                    {message.content}
                </p>
            </div>
        </div>
    );
};

export default ChatMessage;
