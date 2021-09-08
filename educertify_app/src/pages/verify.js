import { useState } from "react";
import Layout from "../layout/Layout";
import { Typography, Button, TextField, Paper } from "@material-ui/core";
import { getCert } from "../helpers/taquito";

export default function Verify() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    fName: "",
    lName: "",
    certId: "",
    date: "",
  });
  const onSubmit = async () => {
    // Call smart contract
    await getCert(value).then((data) => {
      setData({
        fName: data.storage.fName,
        lName: data.storage.lName,
        certId: data.storage.certId,
        date: data.storage.date,
      });
    });
  };
  const secondBox =
    data.certId !== "" ? (
      <Paper elevation={3}>
        <div
          style={{
            margin: "5px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" style={{ margin: "5px" }}>
            First Name: {data.fName}
          </Typography>
          <Typography variant="body1" style={{ margin: "5px" }}>
            Last Name: {data.lName}
          </Typography>
          <Typography variant="body1" style={{ margin: "5px" }}>
            Certificate ID: {data.certId}
          </Typography>
          <Typography variant="body1" style={{ margin: "5px" }}>
            Date: {data.date}
          </Typography>
        </div>
      </Paper>
    ) : null;

  return (
    <Layout>
      <Paper elevation={3}>
        <div
          style={{
            margin: "5px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={{ marginTop: "15px" }} variant="h2" gutterBottom>
            Document Lookup
          </Typography>
          <TextField
            style={{ marginTop: "15px" }}
            label="Certificate Key"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: "15px" }}
            onClick={onSubmit}
          >
            Search
          </Button>
        </div>
      </Paper>
      {secondBox}
    </Layout>
  );
}
