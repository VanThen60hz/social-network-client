import { Avatar } from "@mui/material";

const StoryCircle = () => {
    return (
        <div className="flex flex-col items-center mr-4 cursor-pointer">
            <Avatar
                sx={{ width: "5rem", height: "5rem" }}
                src="https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg"
            />
            <p>meowmeow...</p>
        </div>
    );
};

export default StoryCircle;
