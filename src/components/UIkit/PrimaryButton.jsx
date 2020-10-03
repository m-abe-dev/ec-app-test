import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const PrimaryButton = (props) => {
  <Button
    className={classes.button}
    variant="contained"
    onClick={() => props.onClick()}
  >
    {props.label}
  </Button>;
};

export default PrimaryButton;
