import React from "react";
import "./Dashboard.css";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  MainListItems,
  secondaryListItems,
  useDrawerStyles,
  drawerContentsEnum,
} from "./configs";
import Chart from "./Chart";
import Deposits from "./Deposits";
import { UsersTable } from "../../containers/UsersTable";
import { BloggersTable } from "../../containers/BloggersTable";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [drawerContent, setDrawerContent] = React.useState(
    drawerContentsEnum.Dashboard
  );

  const drawerClasses = useDrawerStyles();
  const fixedHeightPaper = clsx(drawerClasses.paper, drawerClasses.fixedHeight);

  const dashboardContent = (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      {/* Users */}
      <UsersTable />
    </Grid>
  );

  const bloggersContent = (
    <Grid container>
      <Grid item xs={12}>
        <BloggersTable />
      </Grid>
    </Grid>
  );

  const content = () => {
    switch (drawerContent) {
      case drawerContentsEnum.Dashboard:
        return dashboardContent;
      case drawerContentsEnum.Bloggers:
        return bloggersContent;
      default:
        return <h3 className="text-center">No content here</h3>;
    }
  };

  return (
    <div className={drawerClasses.root}>
      <Drawer
        variant="permanent"
        className={clsx(drawerClasses.drawer, {
          [drawerClasses.drawerPaperOpen]: open,
          [drawerClasses.drawerPaperClose]: !open,
        })}
        classes={{
          paper: clsx({
            [drawerClasses.drawerPaperOpen]: open,
            [drawerClasses.drawerPaperClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={drawerClasses.toolbarIcons}>
          <IconButton
            className={clsx(!open && drawerClasses.hide)}
            aria-label="close drawer"
            onClick={() => setOpen(false)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            className={clsx(open && drawerClasses.hide)}
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <MainListItems changePage={setDrawerContent} />
        <Divider />
        <List className={drawerClasses.list}>{secondaryListItems}</List>
      </Drawer>
      <main className={drawerClasses.content}>
        <Container maxWidth="lg" className={drawerClasses.container}>
          {content()}
        </Container>
      </main>
    </div>
  );
}
