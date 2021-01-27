import * as backendAPI from "../utils/backend-api";

function getAllUsers() {
  return backendAPI.GET("/Users");
}

function getAllUsersFromStatistics() {
  return backendAPI.GET("/Statistics");
}

function getUserById(id) {
  const getUserByIdEndpoint = `/Users?id=${id}`;
  return backendAPI.GET(getUserByIdEndpoint);
}

function getUserByToken() {
  return backendAPI.GET("/Identity");
}

function createUser(user) {
  const createBody = JSON.stringify({
    FirstName: user.firstName,
    LastName: user.lastName,
    Email: user.email,
    Password: user.password,
    LeadSource: user.leadSource,
  });
  return backendAPI.POST("/Admin/AddUser", createBody);
}

function updateUser(user) {
  //TODO: no api endpoint for updating user
}

function deleteUser(id) {
  const deleteBody = JSON.stringify({
    Id: id,
  });
  return backendAPI.POST("/Admin/DeleteUser", deleteBody);
}

export {
  getAllUsers,
  getUserById,
  getUserByToken,
  createUser,
  updateUser,
  deleteUser,
  getAllUsersFromStatistics,
};
