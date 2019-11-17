import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ourImage from "../../images/whatsapp_image_2019-11-16_at_20.03.03.jpeg";
import "./info.css";
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    },
    textAlign: "center"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  paragraph: {
    marginTop: theme.spacing(3),
    color: "rgba(0, 0, 0, 0.5)"
  },
  miniparagraph: {
    marginTop: theme.spacing(3),
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: "1em"
  }
}));

const Info = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h2" variant="h4">
            Pozwól żebysmy ci pomogli!
          </Typography>
          <img src={ourImage} className="ourImage" />
          <Typography component="h2" variant="h6" className={classes.paragraph}>
            Aplikacja powstała z myślą o osobach potrzebujących pomocy. Po
            rejestracji i wybraniu kategorii wyświetlona ona lokacje i ich
            stopień dostosowania do przeszkód z którymi musisz się zmierzyć
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            className={classes.miniparagraph}
          >
            Dzięki tobie Kielce mogą zmienić się na lepsze, podziel się swoją
            opinią
          </Typography>
        </Paper>
      </main>
    </div>
  );
};

export default Info;
