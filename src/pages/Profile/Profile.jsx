import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PostCard from "../../components/Post/PostCard.jsx";
import UserReelCard from "../../components/Reels/UserReelCard.jsx";

const tabs = [
    { value: "posts", name: "Posts" },
    { value: "reels", name: "Reels" },
    { value: "saved", name: "Saved" },
    { value: "repost", name: "Repost" },
];

const posts = [1, 2, 3, 4, 5];
const reels = [1, 2, 3, 4, 5];
const savedPosts = [1, 2, 3, 4, 5];
const reposts = [1, 2, 3, 4, 5];

const Profile = () => {
    // const { id } = useParams();

    const [value, setValue] = useState("posts");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let x = true;

    return (
        <Card className="py-10 w-[90%]">
            <div className="rounded-md">
                <div className="h-[15rem]">
                    <img
                        className="h-full w-full object-cover rounded-t-md object-top"
                        src="../src/assets/img/meow-bg.jpg"
                        alt=""
                    />
                </div>
                <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
                    <Avatar
                        className="transform -translate-y-24"
                        sx={{ width: "10rem", height: "10rem" }}
                        src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-5.jpg"
                    />

                    {x ? (
                        <Button
                            sx={{ borderRadius: "20px" }}
                            variant="outlined"
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
                        <h1 className="py-1 font-bold text-xl">Đỗ Minh Meow</h1>
                        <p>@meowchan</p>
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
                                {posts.map((item) => (
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
        </Card>
    );
};

export default Profile;
