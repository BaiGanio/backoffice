import * as backendAPI from "../utils/backend-api";

function getAllBloggers() {
  return backendAPI.GET("/Bloggers");
}

function getBloggerById(id) {
  const getBloggerByIdEndpoint = `/Bloggers?id=${id}`;
  return backendAPI.GET(getBloggerByIdEndpoint);
}

function getBloggerByUserId() {
  return backendAPI.GET("/Bloggers/GetByUserId");
}

function updateBlogger(blogger) {
  const updateBody = JSON.stringify({
    Nickname: blogger.nickname,
    Email: blogger.email,
    AvatarUrl: blogger.avatarUrl,
    FacebookUrl: blogger.facebookUrl,
    GitHubUrl: blogger.gitHubUrl,
  });
  return backendAPI.POST("/Bloggers/Update", updateBody);
}

function updateBloggerAvatarPicture(base64) {
  const updateAvatarBody = JSON.stringify({
    AvatarUrl: base64,
  });
  return backendAPI.POST("/Bloggers/UpdateAvatarPicture", updateAvatarBody);
}

export {
  getAllBloggers,
  getBloggerById,
  getBloggerByUserId,
  updateBlogger,
  updateBloggerAvatarPicture,
};
