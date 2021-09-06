import { useRef, useState } from "react";
import Layout from "../layout/Layout";
import {
  Typography,
  Button,
  TextField,
  Paper,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import sha256 from "crypto-js/sha256";

export default function Verify() {
  const [hash, setHash] = useState("");
  const [certNo, setCertNo] = useState("");
  const [edu, setEdu] = useState("");
  const fileUpload = useRef(null);
  const uploadClick = (e) => {
    fileUpload.current.click();
  };
  const uploaded = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setHash(sha256(e.target.result).toString());
    };
  };
  const onSubmit = () => {
    // Verify Blockchain hash with hash from document.
  };
  const certChange = (e) => {
    setCertNo(e.target.value);
  };
  const eduChange = (e) => {
    setEdu(e.target.value);
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
            Verify A Document
          </Typography>
          <InputLabel id="edu">Educational Institution</InputLabel>
          <Select
            variant="outlined"
            style={{ marginTop: "15px" }}
            labelId="edu"
            value={edu}
            onChange={eduChange}
          >
            <MenuItem value={"NUS"}>NUS</MenuItem>
            <MenuItem value={"NTU"}>NTU</MenuItem>
            <MenuItem value={"SUTD"}>SUTD</MenuItem>
            <MenuItem value={"SMU"}>SMU</MenuItem>
          </Select>
          <TextField
            style={{ marginTop: "15px" }}
            label="Certificate Number"
            value={certNo}
            onChange={certChange}
          />
          <div style={{ marginTop: "15px", display: "flex" }}>
            <Button onClick={uploadClick} variant="outlined" color="primary">
              Upload PDF
            </Button>
            <Typography style={{ marginLeft: "15px" }} variant="body1">
              {hash}
            </Typography>
          </div>
          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: "15px" }}
            onClick={onSubmit}
          >
            Submit
          </Button>
          <input
            type="file"
            ref={fileUpload}
            onChange={uploaded}
            style={{ display: "none" }}
          />
        </div>
      </Paper>
    </Layout>
  );
}
