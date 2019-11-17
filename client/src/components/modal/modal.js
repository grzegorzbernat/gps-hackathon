import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { handleModal } from "../../store/action";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import libPhoto from "../../images/library.jpg";
import "./modal.css";
import Button from "@material-ui/core/Button";
import { voteOnLocation } from "../../api/api";
const useStyles = makeStyles(theme => ({
  up: {
    color: "green"
  },
  down: {
    color: "red"
  }
}));

const Modal = props => {
  const { isModalOpened, waypoint, closeModal, categories } = props;

  let index = null;
  const markedCategories = categories;
  for (var key in markedCategories) {
    if (markedCategories[key]) index = key;
  }

  const classes = useStyles();
  let renderModal = <Dialog open={false}></Dialog>;

  const handleClick = obj => {
    voteOnLocation(waypoint.id, obj);
  };

  if (waypoint != null) {
    const { name } = waypoint;
    renderModal = (
      <Dialog open={isModalOpened} onClose={closeModal}>
        <DialogTitle id="responsive-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <img src={libPhoto} className="libPhoto" />
          <DialogContentText>
            Tutaj bedzie znajdować sie przykładowy opis lokacji. Moga to być
            komentarze, lub opis gotowy przygotowanty przez wolontariuszy ktorzy
            dostarczali by taka informacje
          </DialogContentText>
          <Button
            onClick={() => {
              handleClick({ [index]: 1 });
              closeModal();
            }}
          >
            <ThumbUpIcon className={classes.up} />
          </Button>
          <Button
            onClick={() => {
              handleClick({ [index]: -1 });
              closeModal();
            }}
          >
            <ThumbDownIcon className={classes.down} />
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return renderModal;
};

const mapStateToProps = state => {
  return {
    isModalOpened: state.isModalOpened,
    waypoint: state.clickedWaypoint,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(handleModal(false, null))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
