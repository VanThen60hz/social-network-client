import { MoreHoriz } from "@mui/icons-material";
import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const UserChatCard = ({ chat, currentChatId }) => {
    const auth = useSelector((store) => store.auth);

    return (
        <Card
            sx={{
                boxShadow: "none",
                borderRadius: "0.5rem",
                margin: 0,
                padding: 0,
                width: "100%",

                background:
                    currentChatId === chat.id ? "#ebf5ff" : "transparent",
                boxSizing: "border-box",
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            width: "2.5rem",
                            height: "2.5rem",
                            fontSize: "1.5rem",
                            bgcolor: "#191c29",
                            color: "rgb(88, 99, 250)",
                        }}
                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
                    />
                }
                action={
                    <IconButton>
                        <MoreHoriz />
                    </IconButton>
                }
                title={
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            marginBottom: "0.25rem",
                        }}
                    >
                        {auth?.user?.id == chat?.chatUser[0]?.id
                            ? chat?.chatUser[1].firstName +
                              " " +
                              chat?.chatUser[1].lastName
                            : chat?.chatUser[0].firstName +
                              " " +
                              chat?.chatUser[0].lastName}
                    </Typography>
                }
                subheader="new message"
            />
        </Card>
    );
};

export default UserChatCard;
