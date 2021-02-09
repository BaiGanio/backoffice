import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { getAllBloggers, updateBlogger } from "../services/blogger.service";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserRolesEnum } from "../utils/enums";
import { Formik } from "formik";
import { Avatar } from "@material-ui/core";
import { Button, Form } from "react-bootstrap";
import {
  hideLoadingAction,
  showLoadingAction,
} from "../redux/actions/common.action";

function BloggersTable() {
  const userRoles = useSelector((state) => state.user.roles);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    openUpdateBloggerDialog: false,
    bloggerToUpdate: {},
  });
  const {
    data: allBloggers,
    isLoading: bloggersAreLoading,
    isError,
  } = useQuery("all-bloggers", () => getAllBloggers());
  const updateBloggerMutation = useMutation(
    (blogger) => updateBlogger(blogger),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("all-bloggers");
      },
      onSettled: () => {
        closeEditBloggerDialog();
        dispatch(hideLoadingAction());
      },
    }
  );

  const isAdmin = userRoles?.map((r) => r.name).includes(UserRolesEnum.Admin);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      ),
    },
    { field: "nickname", headerName: "Nickname", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "createdOn", headerName: "Created On", flex: 1 },
    { field: "modifiedOn", headerName: "Modified On", flex: 1 },
    isAdmin
      ? {
          field: "actions",
          headerName: "Actions",
          filterable: false,
          sortable: false,
          renderCell: (params) => (
            <div>
              <IconButton
                aria-label="update"
                size="small"
                color="default"
                onClick={() => {
                  openEditBloggerDialog(params.row.id);
                }}
              >
                <EditIcon />
              </IconButton>
            </div>
          ),
        }
      : { width: 0 },
  ];

  const rows =
    allBloggers?.map((b) => ({
      id: b.id,
      firstName: b.firstName,
      lastName: b.lastName,
      nickname: b.nickname,
      email: b.email,
      modifiedOn: new Date(b.modifiedOn).toLocaleString("bg-BG"),
      createdOn: new Date(b.createdOn).toLocaleString("bg-BG"),
    })) ?? [];

  function editBlogger(values, { setSubmitting }) {
    dispatch(showLoadingAction());
    setSubmitting(false);
    updateBloggerMutation.mutate(values);
  }

  function openEditBloggerDialog(id) {
    const { nickname, email, avatarUrl } = allBloggers.find((b) => b.id === id);

    setState((state) => ({
      ...state,
      openUpdateBloggerDialog: true,
      bloggerToUpdate: {
        nickname,
        email,
        avatarUrl,
      },
    }));
  }

  function closeEditBloggerDialog() {
    setState((state) => ({
      ...state,
      openUpdateBloggerDialog: false,
      bloggerToUpdate: {},
    }));
  }

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <h4>Bloggers</h4>
      {isError ? (
        <h4
          style={{
            textAlign: "center",
            marginTop: "50px",
            width: "100%",
            color: "red",
          }}
        >
          Something went wrong while fetching bloggers!
        </h4>
      ) : (
        <DataGrid
          loading={bloggersAreLoading}
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
      <div className="blogger-update-dialog">
        <Dialog
          onClose={closeEditBloggerDialog}
          aria-labelledby="blogger-update-dialog-title"
          open={state.openUpdateBloggerDialog}
          fullWidth={true}
          maxWidth="sm"
        >
          <DialogTitle id="blogger-update-dialog-title">
            Edit Blogger
          </DialogTitle>
          <DialogContent dividers>
            <Formik
              initialValues={state.bloggerToUpdate}
              validate={(values) => {
                const errors = {};
                return errors;
              }}
              onSubmit={editBlogger}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Avatar
                    style={{
                      height: "70px",
                      width: "70px",
                      margin: "0 auto",
                    }}
                    alt="Avatar"
                    src={values.avatarUrl}
                  />
                  <Form.Group>
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control
                      type="text"
                      name="nickname"
                      onChange={handleChange}
                      value={values.nickname}
                      placeholder="Enter nickname"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Avatar Url</Form.Label>
                    <Form.Control
                      type="text"
                      name="avatarUrl"
                      onChange={handleChange}
                      value={values.avatarUrl}
                      placeholder="Enter avatar url"
                    />
                  </Form.Group>
                  <DialogActions>
                    <Button variant="default" onClick={closeEditBloggerDialog}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      autoFocus
                      variant="primary"
                      disabled={isSubmitting}
                    >
                      Save
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export { BloggersTable };
