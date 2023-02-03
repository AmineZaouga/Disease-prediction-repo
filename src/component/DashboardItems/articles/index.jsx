import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Typography,
} from "@mui/material";
import { GroupAdd } from "@mui/icons-material";

function Articles() {
  const [data, setData] = useState(null);
  const [ddata, setDdata] = useState(null);
  const [opener, setopener] = useState(false);

  const handleClickopener = () => {
    setopener(true);
  };

  const handleClose = () => {
    setopener(false);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://localhost:7196/api/Article/${window.sessionStorage.getItem(
          "diseaseId"
        )}`
      );
      setData(response.data);
      console.log(data);
    }
    async function fetchAllData() {
      const response = await axios.get(`https://localhost:7196/api/Article`);
      setData(response.data);
    }
    async function fetchDoctorData() {
      const response = await axios.get(
        `https://localhost:7196/api/Doctor_info/${window.sessionStorage.getItem(
          "diseaseId"
        )}`
      );
      setDdata(response.data);
      console.log(ddata);
    }

    if (window.sessionStorage.getItem("diseaseId") !== null) {
      fetchData();
      fetchDoctorData();
    } else {
      fetchAllData();
    }
  }, []);

  return (
    <div>
      <Dialog
        PaperProps={{
          style: {
            width: 500,
            height: 800,
            maxWidth: "none",
          },
        }}
        open={opener}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">List of doctors</DialogTitle>
        <DialogContent>
          <Grid sx={{ border: "2px", backgroundColor: "grey" }}>
            {ddata &&
              ddata.map((obj) => {
                return (
                  <List>
                    <ListItem key={obj.id + obj.name}>
                      <ListItemText
                        primary={obj.name}
                        secondary={
                          <React.Fragment>
                            <Container sx={{ display: "block" }}>
                              <Typography
                                sx={{ display: "inline", m: "2%" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {obj.speciality}
                              </Typography>
                              <Typography
                                sx={{ display: "inline", m: "2%" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {obj.location}
                              </Typography>
                            </Container>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                );
              })}
          </Grid>
        </DialogContent>
      </Dialog>
      {data && (
        <Grid container spacing={10}>
          {data.map((item) => {
            return (
              <Grid item xs={6} key={item.description}>
                <Typography>{item.title}</Typography>
                <Typography>{item.description}</Typography>
                <iframe
                  style={{ width: "100%", height: "500px" }}
                  src={item.url}
                  title={item.title}
                />
              </Grid>
            );
          })}
          <Fab
            color="secondary"
            variant="extended"
            sx={{ position: "fixed", bottom: "20px", right: "20px" }}
            onClick={handleClickopener}
          >
            <GroupAdd sx={{ mr: 1 }} />
            see doctors
          </Fab>
        </Grid>
      )}
    </div>
  );
}
export default Articles;
