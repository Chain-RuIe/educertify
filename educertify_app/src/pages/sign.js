import { useState } from "react";
import Layout from "../layout/Layout";
import { Typography, Button, TextField, Paper } from "@material-ui/core";
import { signCert } from "../helpers/taquito";

export default function Verify() {
  const [date, setDate] = useState("");
  const [certNo, setCertNo] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [key, setKey] = useState("");
  const onSubmit = () => {
    // Pass Hash, Certificate number and Educational institute to Blockchain
    signCert(firstname, lastname, certNo, date, setKey);
  };
  const secondBox =
    key !== "" ? (
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
            Your Smart Contract's Key is: {key}. Keep it safe.
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
            Sign A Document
          </Typography>
          <TextField
            style={{ marginTop: "15px" }}
            label="First Name"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <TextField
            style={{ marginTop: "15px" }}
            label="Last Name"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <TextField
            style={{ marginTop: "15px" }}
            label="Certificate Number"
            value={certNo}
            onChange={(e) => {
              setCertNo(e.target.value);
            }}
          />
          <TextField
            style={{ marginTop: "15px" }}
            id="date"
            label="Date of issue"
            type="datetime-local"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: "15px" }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Paper>
      {secondBox}
    </Layout>
  );
}
