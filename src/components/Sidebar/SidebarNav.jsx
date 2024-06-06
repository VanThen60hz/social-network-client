import {
    AccountCircle,
    ControlPoint,
    Explore,
    Group,
    Home,
    ListAlt,
    Message,
    Notifications,
    Storefront,
} from "@mui/icons-material";

export const navigationMenu = [
    {
        title: "Home",
        icon: <Home />,
        path: "/",
    },
    {
        title: "Reels",
        icon: <Explore />,
        path: "/reels",
    },
    {
        title: "Create Reels",
        icon: <ControlPoint />,
        path: "/create-reels",
    },
    {
        title: "MarketPlace",
        icon: <Storefront />,
        path: "/",
    },
    {
        title: "Notifications",
        icon: <Notifications />,
        path: "/",
    },
    {
        title: "Message",
        icon: <Message />,
        path: "/message",
    },
    {
        title: "Lists",
        icon: <ListAlt />,
        path: "/",
    },
    {
        title: "Communities",
        icon: <Group />,
        path: "/",
    },
    {
        title: "Profile",
        icon: <AccountCircle />,
        path: "/profile",
    },
];
