import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import StoryCircle from "./StoryCircle";

const story = [1, 1, 11, 11, 11];
const MiddlePart = () => {
    return (
        <div className="px-20">
            <section className="flex items-center p-5 rounded-b-md">
                <div className="flex flex-col items-center mr-4 cursor-pointer">
                    <Avatar
                        sx={{ width: "5rem", height: "5rem" }}
                        // src="https://nupet.vn/wp-content/uploads/2023/10/anh-avatar-cute-meo-nupet-2.jpg"
                    >
                        <Add sx={{ fontSize: "3rem" }} />
                    </Avatar>
                    <p>New</p>
                </div>
                {story.map((item) => (
                    <StoryCircle key={item} />
                ))}
            </section>

            <section>
                <div className="flex justify-between"></div>
            </section>
        </div>
    );
};

export default MiddlePart;
