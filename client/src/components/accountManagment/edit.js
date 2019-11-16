import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SingleCategory from "./singleCategory/singleCategory";
import Button from "@material-ui/core/Button";
import VoiceOverOffIcon from "@material-ui/icons/VoiceOverOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccessibleIcon from "@material-ui/icons/Accessible";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Link } from "react-router-dom";

const Edit = () => {
  const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    categories: {
      marginTop: theme.spacing(2),
      width: "60%"
    },
    button: {
      margin: theme.spacing(4)
    }
  }));

  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Jak możemy ci pomoć?
        </Typography>
        <Grid container item xs={12} spacing={3} className={classes.categories}>
          <SingleCategory
            name={"Dysfunkcja narządu słuchu"}
            redux_name={"sluch"}
          >
            <VoiceOverOffIcon />
          </SingleCategory>
          <SingleCategory
            name={"Dysfunkcja narządu wzroku"}
            redux_name={"wzrok"}
          >
            <VisibilityIcon />
          </SingleCategory>
          <SingleCategory name={"Dysfunkcja narządu ruchu"} redux_name={"ruch"}>
            <AccessibilityNewIcon />
          </SingleCategory>
          <SingleCategory name={"Poruszanie sie na wózku"} redux_name={"wozek"}>
            <AccessibleIcon />
          </SingleCategory>
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          className={classes.categories}
          redux_name={"wozek"}
        >
          <SingleCategory name={"Kobieta w ciąży"} redux_name="ciaza">
            <PregnantWomanIcon />
          </SingleCategory>
          <SingleCategory name={"Osoba z dzieckiem"} redux_name="dziecko">
            <ChildFriendlyIcon />
          </SingleCategory>
          <SingleCategory name={"Padaczka"} redux_name="padaczka">
            <TransferWithinAStationIcon />
          </SingleCategory>
        </Grid>
        <Link to="/map">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Potwierdź
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Edit;
