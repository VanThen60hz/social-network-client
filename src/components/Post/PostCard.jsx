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
import { formatDistanceToNow, parseISO } from "date-fns";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
    createCommentAction,
    likePostAction,
} from "../../Redux/Post/post.action";
import { isLikeByReqUser } from "../../utils/isLikeByReqUser";
import "./PostCard.css";

const PostCard = ({ item }) => {
    const auth = useSelector((store) => store.auth);
    const [isSave, setIsSaved] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const dispatch = useDispatch();

    const createdAt = item?.createdAt ? parseISO(item?.createdAt) : new Date();
    const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

    const handleShowComment = () => setShowComments(!showComments);

    const handleCreateComment = (content) => {
        const reqData = {
            postId: item.id,
            data: {
                content: content,
            },
        };
        dispatch(createCommentAction(reqData));
    };

    const handleLikePost = () => {
        dispatch(likePostAction(item.id));
    };

    const nodeRef = useRef(null);

    return (
        <Card>
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
                        {item?.user?.firstName + " " + item?.user?.lastName}
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
                height="auto"
                image={item?.image}
                alt="post image"
                width="100%"
                style={{
                    objectFit: "contain",
                }}
            />

            <CardActions className="flex justify-between" disableSpacing>
                <div>
                    <IconButton onClick={handleLikePost}>
                        {isLikeByReqUser(auth?.user?.id, item) ? (
                            <Favorite />
                        ) : (
                            <FavoriteBorder />
                        )}
                    </IconButton>
                    <IconButton>
                        <Share />
                    </IconButton>
                    <IconButton onClick={handleShowComment}>
                        <ChatBubble />
                    </IconButton>
                </div>

                <div>
                    <IconButton onClick={() => setIsSaved(!isSave)}>
                        {isSave ? <Bookmark /> : <BookmarkBorder />}
                    </IconButton>
                </div>
            </CardActions>
            <CSSTransition
                in={showComments}
                timeout={300}
                classNames="comments"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <section ref={nodeRef}>
                    <div className="flex items-center space-x-5 mx-3 my-5">
                        <Avatar
                            sx={{}}
                            src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
                        />
                        <input
                            onKeyUp={(e) => {
                                if (e.key == "Enter") {
                                    handleCreateComment(e.target.value);

                                    e.target.value = "";
                                }
                            }}
                            className="w-full outline-none bg-transparent border border-[#8d93aa] rounded-full px-5 py-2"
                            type="text"
                            placeholder="write your comment..."
                        />
                    </div>

                    <Divider />

                    <div className="mx-3 space-y-5 my-5 text-sm">
                        {item?.comments?.map((comment) => {
                            const commentCreatedAt = parseISO(
                                comment?.createdAt,
                            );
                            const commentTimeAgo = formatDistanceToNow(
                                new Date(commentCreatedAt),
                                { addSuffix: true },
                            );
                            return (
                                <div
                                    className="flex items-center space-x-2"
                                    key={comment?.id}
                                >
                                    <Avatar
                                        sx={{
                                            height: "2.5rem",
                                            width: "2.5rem",
                                            fontSize: ".8rem",
                                            alignSelf: "flex-start",
                                            margin: ".25rem",
                                        }}
                                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg"
                                    />
                                    <div className="min-w-60">
                                        <div className="flex flex-col w-full p-3 border rounded-xl bg-slate-50">
                                            <Typography
                                                sx={{
                                                    fontWeight: "bold",
                                                    fontSize: ".8rem",
                                                }}
                                            >
                                                {comment?.user?.firstName +
                                                    " " +
                                                    comment?.user?.lastName}
                                            </Typography>

                                            <p>{comment?.content}</p>
                                        </div>
                                        <div className="flex gap-3 items-center ml-2">
                                            <span className="text-slate-500 text-xs">
                                                {commentTimeAgo}
                                            </span>
                                            <span className="font-semibold cursor-pointer hover:underline">
                                                Like
                                            </span>
                                            <span className="font-semibold cursor-pointer hover:underline">
                                                Reply
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </CSSTransition>
        </Card>
    );
};

export default PostCard;
