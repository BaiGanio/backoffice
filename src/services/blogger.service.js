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

function updateBloggerAvatarPicture(avatarUrl) {
  const deleteBody = JSON.stringify({
    AvatarUrl: avatarUrl,
  });
  return backendAPI.POST("/Admin/DeleteUser", deleteBody);
}

export {
  getAllBloggers,
  getBloggerById,
  getBloggerByUserId,
  updateBlogger,
  updateBloggerAvatarPicture,
};
