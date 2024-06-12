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
    Divider,
    IconButton,
    Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

const PostCard = ({ item }) => {
    const [isLike, setIsLiked] = useState(false);
    const [isSave, setIsSaved] = useState(false);

    const createdAt = parseISO(item.createdAt);
    const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

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
                        {item.user?.firstName + " " + item.user?.lastName}
                    </Typography>
                }
                subheader={timeAgo}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item?.caption}
                </Typography>
            </CardContent>

            <CardMedia
                component="img"
                height="194"
                image={item?.image}
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

            <section>
                <div className="flex items-center space-x-5 mx-3 my-5">
                    <Avatar sx={{}} />
                    <input
                        onKeyUp={(e) => {
                            if (e.key == "Enter") {
                                console.log(
                                    "enter pressed ----",
                                    e.target.value,
                                );
                            }
                        }}
                        className="w-full outline-none bg-transparent border border-[#8d93aa] rounded-full px-5 py-2"
                        type="text"
                        placeholder="write your comment..."
                    />
                </div>

                <Divider />
            </section>
        </Card>
    );
};

export default PostCard;
