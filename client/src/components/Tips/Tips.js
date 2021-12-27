import React from "react";
import Tip from "./Tip/Tip";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
// import { Grid, Box } from "@chakra-ui/react";
const Tips = ({ setCurrentId }) => {
  const tips = useSelector((state) => state.tips);
  const classes = useStyles();
  return !tips.length ? (
    <></>
  ) : (
    // <Box
    //   justifyContent="space-between"
    //   height="40vh"
    //   width="40vh"
    //   bg="#85caff"
    //   ml="50px"
    //   mt="50px"
    //   mr="50px"
    //   mb="50px"
    //   boxShadow="outline"
    //   rounded="md"
    // >
    //   {tips.map((tip) => (
    //     <Grid item key={tip.id} xs={12} sm={6}>
    //       <Tip tip={tip} setCurrentId={setCurrentId} />
    //     </Grid>
    //   ))}
    // </Box>
    <Grid container>
      {tips.map((tip) => (
        <Grid item key={tip.id}>
          <Tip tip={tip} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tips;
