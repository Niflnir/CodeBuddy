import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteReactTip } from "../../../actions/reacttips";
import { useDispatch } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { Flex, Text, IconButton, Button, Box } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Tip = ({ tip, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <Flex justifyContent="space-between">
        <Text variant="h4">{tip.title}</Text>
        <IconButton
          aria-label="Delete"
          icon={<FaTrash />}
          isRound="true"
          size="sm"
          onClick={() => {
            dispatch(deleteReactTip(tip._id));
          }}
        />
      </Flex>
      <Flex justifyContent="center" align>
        <Box
          justifyContent="center"
          align="center"
          width="45vh"
          height="30vh"
          bg="white"
        >
          <Text>{tip.description}</Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>{tip.creator}</Text>
        {/* <IconButton aria-label="Edit" icon={<FaEdit />} isRound="true" /> */}
      </Flex>
      <Flex justifyContent="right">
        <Button
          leftIcon={<FaEdit />}
          colorScheme="gray"
          variant="solid"
          size="xs"
          onClick={() => {
            setCurrentId(tip._id);
          }}
        >
          Edit
        </Button>
      </Flex>
    </div>

    // <Card className={classes.card}>
    //   <Typography variant="h6">{tip.title}</Typography>
    //   <CardActions className={classes.overlay}>
    //     <Button
    //       style={{ colour: "white" }}
    //       size="small"
    //       onClick={() => {
    //         setCurrentId(tip._id);
    //       }}
    //     >
    //       <EditIcon fontSize="small" />
    //       Edit
    //     </Button>
    //   </CardActions>
    //   <CardContent>
    //     <Typography className={classes.title} variant="h5" gutterBottom>
    //       {tip.description}
    //     </Typography>
    //   </CardContent>
    //   <Typography variant="h4">{tip.creator}</Typography>
    //   <CardActions className={classes.cardActions}>
    //     <Button
    //       size="small"
    //       color="primary"
    //       onClick={() => {
    //         dispatch(deleteReactTip(tip._id));
    //       }}
    //     >
    //       <DeleteIcon fontSize="small" />
    //       Delete
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default Tip;
