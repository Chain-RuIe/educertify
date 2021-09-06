import { useRef, useState } from "react";
import Layout from "../layout/Layout";
import { Typography, Button, TextField, Paper } from "@material-ui/core";

export default function Verify() {
  const [value, setValue] = useState("");
  const onSubmit = () => {
    // Call smart contract
  };

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
    </Layout>
  );
}
