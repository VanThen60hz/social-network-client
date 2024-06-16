import { Avatar, Card, CardHeader } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../Redux/Auth/auth.action";
import { createChat } from "../../Redux/Message/message.action";

const SearchUser = () => {
    const [username, setUserName] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((store) => store.auth);
    // const message = useSelector((store) => store.message);

    const handleSearchUser = (e) => {
        setUserName(e.target.value);
        console.log("search user...");
        dispatch(searchUser(username));
    };

    const handleClick = (id) => {
        dispatch(
            createChat({
                userId: id,
            }),
        );
    };

    return (
        <div className="relative">
            <div className="py-5">
                <input
                    type="text"
                    className="bg-transparent border border-[#c1c8e8] outline-none w-full px-5 py-3 rounded-full"
                    onChange={handleSearchUser}
                    placeholder="search user..."
                />

                {username &&
                    auth.searchUsers.map((item, index) => (
                        <Card
                            className="absolute w-full z-10 cursor-pointer"
                            key={item?.id}
                            style={{
                                top: `${4.5 * (index + 1)}rem`,
                                boxShadow: "none",
                            }}
                        >
                            <CardHeader
                                className="pointer"
                                onClick={() => {
                                    handleClick(
                                        item?.id,
                                        item?.firstName,
                                        item?.lastName,
                                    );
                                    setUserName("");
                                }}
                                avatar={
                                    <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg" />
                                }
                                title={item?.firstName + " " + item.lastName}
                                subheader={
                                    item && item.email
                                        ? `@${item.email.slice(
                                              0,
                                              item.email.indexOf("@"),
                                          )}`
                                        : "Loading..."
                                }
                            />
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default SearchUser;
