import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import PostCard from "../../components/Post/PostCard.jsx";
import UserReelCard from "../../components/Reels/UserReelCard.jsx";
import ProfileModal from "../../components/Profile/ProfileModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUsersPostAction } from "../../Redux/Post/post.action.js";
import { useParams } from "react-router-dom";

const tabs = [
    { value: "posts", name: "Posts" },
    { value: "reels", name: "Reels" },
    { value: "saved", name: "Saved" },
    { value: "repost", name: "Repost" },
];

const reels = [1, 2, 3, 4, 5];
const savedPosts = [1, 2, 3, 4, 5];
const reposts = [1, 2, 3, 4, 5];

const Profile = () => {
    const { id } = useParams();

    const [open, setOpen] = useState(false);
    const [isMyProfile, setIsMyProfile] = useState(false);
    const dispatch = useDispatch();
    const handleOpenProfileModal = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    const [value, setValue] = useState("posts");
    const auth = useSelector((store) => store.auth);
    const post = useSelector((store) => store.post);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getUsersPostAction(id));
        if (auth?.user?.id == id) {
            setIsMyProfile(true);
        }
    }, [dispatch, id, auth?.user?.id]);

    return (
        <Card className="py-10 w-[90%]">
            <div className="rounded-md">
                <div className="h-[15rem]">
                    <img
                        className="h-full w-full object-cover rounded-t-md object-top"
                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717539760/meow-social/meow-bg_gz6x7y.jpg"
                        alt=""
                    />
                </div>
                <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
                    <Avatar
                        className="transform -translate-y-24"
                        sx={{ width: "10rem", height: "10rem" }}
                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717539851/meow-social/avatar-anh-meo-cute-5_dswfyl.jpg"
                    />

                    {isMyProfile ? (
                        <Button
                            sx={{ borderRadius: "20px" }}
                            variant="outlined"
                            onClick={handleOpenProfileModal}
                        >
                            Edit Profile
                        </Button>
                    ) : (
                        <Button
                            sx={{ borderRadius: "20px" }}
                            className="rounded-full"
                            variant="outlined"
                        >
                            Follow
                        </Button>
                    )}
                </div>
                <div className="p-5">
                    <div>
                        <h1 className="py-1 font-bold text-xl">
                            {auth.user
                                ? `${auth.user.firstName} ${auth.user.lastName}`
                                : "Loading..."}
                        </h1>
                        <p>
                            {auth.user && auth.user.email
                                ? `@${auth.user.email.slice(
                                      0,
                                      auth.user.email.indexOf("@"),
                                  )}`
                                : "Loading..."}
                        </p>
                    </div>

                    <div className="flex gap-2 items-center py-3">
                        <span>44 posts</span>
                        <span>55 followers</span>
                        <span>66 followings</span>
                    </div>

                    <div>
                        <p>
                            I&apos;m IT Meow. Do you want meow with me? meow
                            meow...
                        </p>
                    </div>
                </div>
                <section>
                    <Box
                        sx={{
                            width: "100%",
                            borderBottom: 1,
                            borderColor: "divider",
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="wrapped label tabs example"
                        >
                            {tabs.map((item) => (
                                <Tab
                                    key={item.value}
                                    value={item.value}
                                    label={item.name}
                                    wrapped
                                />
                            ))}
                        </Tabs>
                    </Box>

                    <div className="flex justify-center">
                        {value === "posts" ? (
                            <div className="space-y-5 w-[95%] my-10">
                                {post?.posts?.map((item) => (
                                    <div
                                        className="border border-slate-100 rounded-md"
                                        key={item}
                                    >
                                        <PostCard />
                                    </div>
                                ))}
                            </div>
                        ) : value === "reels" ? (
                            <div className="flex justify-center flex-wrap gap-2">
                                {reels.map((item) => (
                                    <div
                                        className="border border-slate-100 rounded-md my-10"
                                        key={item}
                                    >
                                        <UserReelCard />
                                    </div>
                                ))}
                            </div>
                        ) : value === "saved" ? (
                            <div className="space-y-5 w-[95%] my-10">
                                {savedPosts.map((item) => (
                                    <div
                                        className="border border-slate-100 rounded-md"
                                        key={item}
                                    >
                                        <PostCard />
                                    </div>
                                ))}
                            </div>
                        ) : value == "repost" ? (
                            <div className="space-y-5 w-[95%] my-10">
                                {reposts.map((item) => (
                                    <div
                                        className="border border-slate-100 rounded-md"
                                        key={item}
                                    >
                                        <PostCard />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </section>
            </div>

            <section>
                <ProfileModal open={open} handleClose={handleClose} />
            </section>
        </Card>
    );
};

export default Profile;
