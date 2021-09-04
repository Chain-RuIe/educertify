import React, { useRef, useState, useEffect } from "react";
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
  const fileUpload = useRef(null);
  const [token, setToken] = useState(null);
  useEffect(() => {
    localStorage.getItem("token")
      ? setToken(JSON.parse(JSON.parse(localStorage.getItem("token"))))
      : null;
  }, []);
  const uploadClick = (e) => {
    fileUpload.current.click();
  };
  const uploaded = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setToken(JSON.parse(e.target.result));
      localStorage.setItem("token", JSON.stringify(e.target.result));
    };
  };
  const disconnectToken = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

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
          {!token ? (
            <Button onClick={uploadClick} color="inherit">
              Upload Wallet
            </Button>
          ) : (
            <>
              <Button onClick={disconnectToken} color="inherit">
                Disconnect Wallet
              </Button>
              <p>
                Wallet:{" "}
                {`${token.pkh.slice(0, 4)}...${token.pkh.slice(-4, -1)}`}
              </p>
            </>
          )}
          {/* <Button
            onClick={() => {
              console.log(token);
            }}
          >
            Click
          </Button> */}
          <input
            type="file"
            ref={fileUpload}
            onChange={uploaded}
            style={{ display: "none" }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
