import React, { useEffect, useState } from "react";
import { Typography, Grow } from "@material-ui/core";
import { getReactTips } from "../actions/reacttips";
import Tips from "../components/Tips/Tips";
import Form from "../components/Forms/Form";
import useStyles from "../styles";
import { useDispatch } from "react-redux";
import { ChakraProvider, Grid, Container } from "@chakra-ui/react";
import WithSubnavigation from "../components/WithSubnavigation";
const WelcomeScreen = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReactTips());
  }, [currentId, dispatch]);
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="normal"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Tips setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ChakraProvider>
    // <Container maxWidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">
    //       React
    //     </Typography>
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid
    //         container
    //         justifyContent="space-between"
    //         alignItems="stretch"
    //         spacing={3}
    //       >
    //         <Grid item xs={12} sm={7}>
    //           <Tips setCurrentId={setCurrentId} />
    //         </Grid>
    //         <Grid item xs={12} sm={4}>
    //           <Form currentId={currentId} setCurrentId={setCurrentId} />
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );
};

export default WelcomeScreen;
