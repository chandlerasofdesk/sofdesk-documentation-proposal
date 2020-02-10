import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
      flexGrow: 1
    },
    spacing: {
      margin: theme.spacing(2, 0)
    }
  })
);

type contentWrapperProps = {
  children: JSX.Element[] | JSX.Element;
};

function ContentWrapper({ children }: contentWrapperProps) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.toolbar} />
      <div className={classes.spacing}>{children}</div>
    </Container>
  );
}

export default ContentWrapper;
