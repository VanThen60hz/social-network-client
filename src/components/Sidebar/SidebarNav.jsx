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
        path: "/",
    },
    {
        title: "Create Reels",
        icon: <ControlPoint />,
        path: "/",
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
        path: "/",
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
        path: "/",
    },
];
