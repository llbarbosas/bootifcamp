import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.svg"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
  },
  loginButton: {
    backgroundColor: "#60C83C"
  },
  appBar:{
    backgroundColor: "#01579B",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" className={classes.title}>
            <img  src={logo} alt="" className={classes.title}/>
          </Typography>
          <Button color="inherit" className={classes.loginButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
