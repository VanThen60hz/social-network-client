import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";

const PopularUserCard = () => {
    return (
        <div>
            {" "}
            <CardHeader
                avatar={
                    <Avatar
                        src="https://cdn.pixabay.com/photo/2018/06/24/10/02/cat-3494225_1280.jpg"
                        sx={{ bgcolor: red[300] }}
                        aria-label="recipe"
                    ></Avatar>
                }
                action={<Button size="small">Follow</Button>}
                title="Lê Văn Phước Meow"
                subheader="@levanphuocmeow"
            />
        </div>
    );
};

export default PopularUserCard;
