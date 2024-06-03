import { Card } from "@mui/material";
import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";

const popularUser = [1, 2, 3, 4, 5];
const HomeRight = () => {
    return (
        <div className="ml-7 pr-5">
            <SearchUser />
            <Card className="p-5">
                <div className="flex justify-between py-5 items-center">
                    <p className="font-semibold opacity-70">
                        Suggestions for you
                    </p>
                    <p className="text-xs font-semibold opacity-95">View all</p>
                </div>

                <div className="space-y-5">
                    {popularUser.map((item) => (
                        <PopularUserCard key={item} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default HomeRight;
