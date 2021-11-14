import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "./../../../hooks/useAuth";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import ManageAllOrder from "./../ManageAllOrder/ManageAllOrder";
import Review from "./../Review/Review";
// import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MyOrder from "./../MyOrder/MyOrder";
import "./DashBoard.css";
import AddProduct from "../../Home/AddProduct/AddProduct";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
const drawerWidth = 200;

const DashBoard = (props) => {
    const { user, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <br />
      <Link to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </Link>
      {/* {admin && ( */}
      <Box>
        <Link to={`${url}/makeAdmin`}>
          <Button color="inherit">Make Admin</Button>
        </Link>
        <Link to={`${url}/manageallorder`}>
          <Button color="inherit">Manage All Order</Button>
        </Link>
        <Link to={`${url}/myorder`}>
          <Button color="inherit">My Order</Button>
        </Link>
        <br />
        <Link to={`${url}/addproduct`}>
          <Button color="inherit">Manage product</Button>
        </Link>
        <br />
        <Link to={`${url}/payment`}>
          <Button color="inherit">Payment System</Button>
        </Link>
        <Link to={`${url}/review`}>
          <Button color="inherit">Review</Button>
        </Link>
        <br />
        <Link to="/">
          <Button color="inherit" onClick={logout}>
            Log Out
          </Button>
        </Link>
      </Box>
      {/* )} */}
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }} className="dashboard">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
           <DashBoardHome></DashBoardHome>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/manageallorder`}>
            <ManageAllOrder />
          </Route>
          <Route path={`${path}/myorder`}>
            <MyOrder />
          </Route>

          <Route path={`${path}/addproduct`}>
           <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;