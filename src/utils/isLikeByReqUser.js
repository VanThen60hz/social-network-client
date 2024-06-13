export const isLikeByReqUser = (reqUserId, post) => {
    if (post && post.likedByUsers && Array.isArray(post.likedByUsers)) {
        for (let user of post.likedByUsers) {
            if (reqUserId == user.id) {
                return true;
            }
        }
    }
    return false;
};
