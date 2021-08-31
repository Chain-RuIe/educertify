import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={() => {
              router.push("/");
            }}
            variant="h6"
            className={classes.title}
          >
            EduCertify
          </Typography>
          <Button
            onClick={() => {
              router.push("/sign");
            }}
            color="inherit"
          >
            Sign Document
          </Button>
          <Button
            onClick={() => {
              router.push("/verify");
            }}
            color="inherit"
          >
            Verify Document
          </Button>
          <Button
            onClick={() => {
              router.push("/");
            }}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
