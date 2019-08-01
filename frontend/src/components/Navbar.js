import MediaQuery from "react-responsive";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#01579B"
  },
  firstButton: {
    marginRight: theme.spacing(4),
    color: "#60C83C"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function AppBarDesktop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Estudaê
          </Typography>
          <Button color="inherit" className={classes.menuButton}>
            Home
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Consultar
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Praticar
          </Button>
          <Button color="inherit" className={classes.firstButton}>
            Sou professor
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const AppBar = () => (
  <div>
    <MediaQuery minWidth={700}>
      <AppBarDesktop />
    </MediaQuery>
  </div>
);
export default AppBar;
