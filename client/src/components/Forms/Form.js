import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createReactTip, updateReactTip } from "../../actions/reacttips";

const Form = ({ currentId, setCurrentId }) => {
  const tip = useSelector((state) =>
    currentId ? state.tips.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tipData, setTipData] = useState({
    title: "",
    description: "",
    creator: "",
  });

  useEffect(() => {
    if (tip) setTipData(tip);
  }, [tip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) dispatch(updateReactTip(currentId, tipData));
    else dispatch(createReactTip(tipData));
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setTipData({ title: "", description: "", creator: "" });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit Tip" : "Add Tip"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={tipData.title}
          onChange={(e) => setTipData({ ...tipData, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={tipData.description}
          onChange={(e) =>
            setTipData({ ...tipData, description: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={tipData.creator}
          onChange={(e) => setTipData({ ...tipData, creator: e.target.value })}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
