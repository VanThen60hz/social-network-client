import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";

const UserChatCard = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            width: "3.5rem",
                            height: "3.5rem",
                            fontSize: "1.5rem",
                            bgcolor: "#191c29",
                            color: "rgb(88, 99, 250",
                        }}
                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
                    />
                }
                action={
                    <IconButton>
                        <MoreHoriz />
                    </IconButton>
                }
                title="Nguyễn Thị Ngọc Meow"
                subheader="meowmeow"
            />
        </Card>
    );
};

export default UserChatCard;
