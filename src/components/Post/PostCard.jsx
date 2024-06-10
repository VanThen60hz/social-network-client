import {
    Bookmark,
    BookmarkBorder,
    ChatBubble,
    Favorite,
    FavoriteBorder,
    MoreVert,
    Share,
} from "@mui/icons-material";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

const PostCard = () => {
    const [isLike, setIsLiked] = useState(false);
    const [isSave, setIsSaved] = useState(false);

    return (
        <Card className="">
            <CardHeader
                avatar={
                    <Avatar
                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
                        sx={{ bgcolor: red[500] }}
                        aria-label="recipe"
                    />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={
                    <Typography sx={{ fontWeight: "bold" }}>
                        Nguyễn Thị Ngọc Meow
                    </Typography>
                }
                subheader="May 2, 2024"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Wishing you a nice day ✨!
                </Typography>
            </CardContent>

            <CardMedia
                component="img"
                height="194"
                image="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717537904/meow-social/cute-girl_mxssrk.jpg"
                alt="Paella dish"
            />
            <CardActions className="flex justify-between" disableSpacing>
                <div>
                    <IconButton onClick={() => setIsLiked(!isLike)}>
                        {isLike ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                    <IconButton>
                        <ChatBubble />
                    </IconButton>
                </div>

                <div>
                    <IconButton onClick={() => setIsSaved(!isSave)}>
                        {isSave ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
};

export default PostCard;
