import { Add, Article, Image, Videocam } from "@mui/icons-material";
import { Avatar, Card, IconButton } from "@mui/material";
import StoryCircle from "./StoryCircle";
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../Redux/Post/post.action";

const stories = [1, 2, 3, 4, 5];
const MiddlePart = () => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post);

    const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

    const handleCloseCreatePostModal = () => {
        setOpenCreatePostModal(false);
    };

    const handleOpenCreatePostModal = () => {
        setOpenCreatePostModal(true);
        console.log("open post modal");
    };

    useEffect(() => {
        dispatch(getAllPostAction());
    }, [dispatch, post.newComment]);

    return (
        <div className="px-20">
            <section className="flex items-center p-5 rounded-b-md">
                <div className="flex flex-col items-center mr-4 cursor-pointer">
                    <Avatar sx={{ width: "5rem", height: "5rem" }}>
                        <Add sx={{ fontSize: "3rem" }} />
                    </Avatar>
                    <p>New</p>
                </div>
                {stories.map((item) => (
                    <StoryCircle key={item} />
                ))}
            </section>

            <Card className="p-5 mt-5">
                <div className="flex justify-between">
                    <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717539851/meow-social/avatar-anh-meo-cute-5_dswfyl.jpg" />
                    <input
                        onClick={handleOpenCreatePostModal}
                        className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#888da2] border"
                        type="text"
                        name=""
                        id=""
                        placeholder="Create new post..."
                        readOnly
                    />
                </div>
                <div className="flex justify-center space-x-9 mt-5">
                    <div className="flex items-center">
                        <IconButton
                            color="primary"
                            onClick={handleOpenCreatePostModal}
                        >
                            <Image />
                        </IconButton>

                        <span>media</span>
                    </div>
                    <div className="flex items-center">
                        <IconButton
                            color="primary"
                            onClick={handleOpenCreatePostModal}
                        >
                            <Videocam />
                        </IconButton>

                        <span>video</span>
                    </div>
                    <div className="flex items-center">
                        <IconButton
                            color="primary"
                            onClick={handleOpenCreatePostModal}
                        >
                            <Article />
                        </IconButton>

                        <span>write article</span>
                    </div>
                </div>
            </Card>
            <div className="mt-5 space-y-3">
                {post.posts?.map((item) => {
                    return <PostCard key={item.id} item={item} />;
                })}

                <div>
                    <CreatePostModal
                        handleClose={handleCloseCreatePostModal}
                        open={openCreatePostModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;
