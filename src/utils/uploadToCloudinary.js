const cloud_name = "dbo5fc7j0";
const upload_preset = "meow-social";
const folder_name = "meow-social";

export const uploadToCloudinary = async (files, fileType) => {
    if (files && fileType) {
        const data = new FormData();
        data.append("file", files);
        data.append("upload_preset", upload_preset);
        data.append("cloud_name", cloud_name);
        data.append("folder", folder_name);

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
            { method: "post", body: data },
        );

        console.log("res", res);
        const fileData = await res.json();
        console.log("fileData", fileData.url);
        return fileData.url;
    } else {
        console.log("error ...");
    }
};
