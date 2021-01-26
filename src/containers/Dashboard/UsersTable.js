import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getAllUsers } from "../../services/user-data.service";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector } from "react-redux";
import { UserRolesEnum } from "../../utils/enums";
import { useQuery } from "react-query";

function UsersTable() {
  const userRoles = useSelector((state) => state.user.roles);
  const {
    data: allUsers,
    isLoading: usersAreLoading,
    isError,
  } = useQuery("all-users", () => getAllUsers());

  const isAdmin = userRoles?.map((r) => r.name).includes(UserRolesEnum.Admin);

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "userType", headerName: "Type of User", flex: 1 },
    { field: "createdOn", headerName: "Created On", flex: 1 },
    isAdmin
      ? {
          field: "actions",
          headerName: "Actions",
          filterable: false,
          renderCell: (params) => (
            <div>
              <IconButton
                aria-label="update"
                size="small"
                color="default"
                onClick={() => {
                  editUser(params.row.id);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  removeUser(params.row.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ),
        }
      : { width: 0 },
  ];

  const rows =
    allUsers?.map((u) => ({
      id: u.id,
      firstName: u.firstName,
      userType: u.typeOfUser,
      createdOn: new Date(u.createdOn).toLocaleString("bg-BG"),
    })) ?? [];

  function editUser() {
    alert("TODO: Update!");
  }

  function removeUser(id) {
    alert("TODO: Delete!");
  }

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <h4>Users</h4>
      {isError ? (
        <h4
          style={{
            textAlign: "center",
            marginTop: "50px",
            width: "100%",
            color: "red",
          }}
        >
          Something went wrong while fetching users!
        </h4>
      ) : (
        <DataGrid
          loading={usersAreLoading}
          rows={rows}
          columns={columns.map((column) => ({
            ...column,
            disableClickEventBubbling: true,
          }))}
          showToolbar
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
        />
      )}
    </div>
  );
}

export { UsersTable };
