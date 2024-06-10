import { MoreVert } from "@mui/icons-material";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { navigationMenu } from "./SidebarNav";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (item) => {
        if (item.title === "Profile") {
            navigate(`/profile/${user?.id}`);
        } else {
            navigate(`${item.path}`);
        }
    };

    return (
        <Card className="card h-screen flex flex-col justify-between py-5">
            <div className="space-y-8 pl-5">
                <Link hrefLang="./" className="flex items-center w-auto">
                    <img
                        src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717537960/cute-cat_gexvgp.png"
                        alt="Meow Social logo"
                        className="shrink-0 w-12 h-12 object-contain"
                    />
                    <h1 className="logo font-bold text-lg ml-4">Meow Social</h1>
                </Link>

                <div className="space-y-8">
                    {navigationMenu.map((item) => {
                        return (
                            <div
                                className="flex space-x-3 items-center cursor-pointer"
                                key={item.title}
                                onClick={() => handleNavigate(item)}
                            >
                                {item.icon}
                                <p className="text-xl">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <Divider />
                <div className="pl-5 flex items-center justify-between pt-5">
                    <div className="flex items-center space-x-3">
                        <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717539851/meow-social/avatar-anh-meo-cute-5_dswfyl.jpg" />
                        <div>
                            <h1 className="py-1 font-bold text-xl">
                                {user
                                    ? `${user.firstName} ${user.lastName}`
                                    : "Loading..."}
                            </h1>
                            <p>
                                {user && user.email
                                    ? `@${user.email.slice(
                                          0,
                                          user.email.indexOf("@"),
                                      )}`
                                    : "Loading..."}
                            </p>
                        </div>
                    </div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <MoreVert />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </Card>
    );
};

export default Sidebar;
