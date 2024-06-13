import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getProfileAction } from "../../Redux/Auth/auth.action";
import HomeRight from "../../components/HomeRight/HomeRight";
import Sidebar from "../../components/Sidebar/SideBar";

const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const jwt = localStorage.getItem("jwt");
    const navigate = useNavigate();

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (jwt) {
            dispatch(getProfileAction(jwt));
        }
    }, [jwt, dispatch]);

    useEffect(() => {
        if (!auth.user) {
            navigate("/login");
        }
    }, [auth.user, navigate]);

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={0} lg={2.5}>
                    <div className="sticky top-0">
                        <Sidebar />
                    </div>
                </Grid>
                <Grid
                    item
                    lg={location.pathname === "/" ? 6.5 : 9.5}
                    xs={12}
                    className="px-5 flex justify-center"
                >
                    <Outlet />
                </Grid>
                {location.pathname == "/" && (
                    <Grid item lg={3} className="relative">
                        <div className="sticky top-0 w-full">
                            <HomeRight />
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default Home;
