import { Close } from "@mui/icons-material";
import { Avatar, IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { updateProfileAction } from "../../Redux/Auth/auth.action";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    width: 600,
    overflowY: "scroll", // Corrected overflow property
    borderRadius: "3",
};

export default function ProfileModal({ open, handleClose }) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },

        onSubmit: (values) => {
            console.log("values ", values);
            dispatch(updateProfileAction(values));
            handleClose();
        },
    });

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <IconButton onClick={handleClose}>
                                    <Close />
                                </IconButton>
                                <p>Edit profile</p>
                            </div>

                            <Button type="submit">Save</Button>
                        </div>
                        <div>
                            <div className="h-[15rem]">
                                <img
                                    className="h-full w-full object-cover rounded-t-md object-top"
                                    src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717539760/meow-social/meow-bg_gz6x7y.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="pl-5">
                                <Avatar
                                    className="transform -translate-y-24"
                                    sx={{ width: "10rem", height: "10rem" }}
                                    src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717539851/meow-social/avatar-anh-meo-cute-5_dswfyl.jpg"
                                />
                            </div>
                            <div className="space-y-3">
                                <TextField
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                />
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
