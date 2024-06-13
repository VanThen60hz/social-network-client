import { Image, VideoCall } from "@mui/icons-material";
import {
    Avatar,
    Backdrop,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Modal,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../Redux/Post/post.action";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: ".6rem",
    outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {
    const [selectedImage, setSelectedImage] = useState();
    const [selectedVideo, setSelectedVideo] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleSelectImage = async (event) => {
        setIsLoading(true);
        const imageUrl = await uploadToCloudinary(
            event.target.files[0],
            "image",
        );
        setSelectedImage(imageUrl);
        setIsLoading(false);
        formik.setFieldValue("image", imageUrl);
    };

    const handleSelectVideo = async (event) => {
        setIsLoading(true);
        const videoUrl = await uploadToCloudinary(
            event.target.files[0],
            "video",
        );
        setSelectedVideo(videoUrl);
        setIsLoading(false);
        formik.setFieldValue("image", videoUrl);
    };

    const formik = useFormik({
        initialValues: {
            caption: "",
            image: "",
            video: "",
        },

        onSubmit: (values) => {
            console.log("formik value:", values);
            dispatch(createPostAction(values));
        },
    });

    return (
        <div>
            {" "}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit} action="">
                        <div>
                            <div className="flex space-x-4 items-center">
                                <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg" />
                                <div>
                                    <p className="font-bold text-lg">
                                        {auth.user?.firstName +
                                            "" +
                                            auth.user?.lastName}
                                    </p>
                                    <p className="text-sm">
                                        {auth.user && auth.user.email
                                            ? `@${auth.user.email.slice(
                                                  0,
                                                  auth.user.email.indexOf("@"),
                                              )}`
                                            : "Loading..."}
                                    </p>
                                </div>
                            </div>

                            <textarea
                                className="outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054] rounded-sm"
                                name="caption"
                                id=""
                                onChange={formik.handleChange}
                                value={formik.values.caption}
                                cols={30}
                                rows={4}
                                placeholder="write caption..."
                            ></textarea>

                            <div className="flex space-x-5 items-center mt-5">
                                <div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleSelectImage}
                                        style={{ display: "none" }}
                                        name=""
                                        id="image-input"
                                    />
                                    <label htmlFor="image-input">
                                        <IconButton
                                            color="primary"
                                            component="span"
                                        >
                                            <Image />{" "}
                                        </IconButton>
                                    </label>
                                    <span>Image</span>
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={handleSelectVideo}
                                        style={{ display: "none" }}
                                        name=""
                                        id="video-input"
                                    />
                                    <label htmlFor="video-input">
                                        <IconButton
                                            color="primary"
                                            component="span"
                                        >
                                            <VideoCall />{" "}
                                        </IconButton>
                                    </label>
                                    <span>Video</span>
                                </div>
                            </div>

                            <div>
                                {selectedImage && (
                                    <img
                                        className="h-[10rem]"
                                        src={selectedImage}
                                        alt=""
                                    />
                                )}

                                {selectedVideo && (
                                    <video
                                        className="h-[10rem]"
                                        src={selectedVideo}
                                        alt=""
                                    />
                                )}

                                <div className="flex w-full justify-end">
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{ borderRadius: "1.5rem" }}
                                        onClick={handleClose}
                                    >
                                        Post
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={isLoading}
                        onClick={handleClose}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Box>
            </Modal>
        </div>
    );
};

export default CreatePostModal;
