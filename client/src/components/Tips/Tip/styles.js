import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: "0px",
    right: "10px",
  },
  overlay2: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  details1: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "15px",
    marginTop: "50px",
  },
  title: {
    padding: "0 15px",
  },
  cardActions: {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
});
