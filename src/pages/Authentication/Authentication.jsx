import { Card, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfileAction } from "../../Redux/Auth/auth.action";

const Authentication = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const auth = useSelector((store) => store.auth);

    useEffect(() => {
        if (jwt) {
            dispatch(getProfileAction(jwt));
        }
    }, [auth.user, navigate, dispatch, jwt]);

    return (
        <div>
            <Grid container>
                <Grid
                    className="h-screen flex justify-center items-center overflow-hidden"
                    item
                    xs={7}
                >
                    <img
                        className="w-3/5"
                        src="https://cdn.pixabay.com/photo/2019/09/14/09/44/cat-4475583_1280.png"
                        alt=""
                    />
                </Grid>
                <Grid item xs={5}>
                    <div className="px-20 flex flex-col justify-center h-full">
                        <Card className="card p-8">
                            <div className="flex flex-col items-center mb-5 space-y-1">
                                <h1 className="log">Meow Social</h1>
                                <p className="text-center text-sm w-[70&]">
                                    Ur Friendly Social Network
                                </p>
                            </div>
                            <Outlet />
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Authentication;
