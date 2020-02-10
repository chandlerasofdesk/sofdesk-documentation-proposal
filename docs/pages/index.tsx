import React, { Fragment } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import HelloWorld from "@sofdesk/core";

const Home = (props: any) => {
  return (
    <div>
      <HelloWorld text={"It seems to be working now?"} />
      <Grid container spacing={2}>
        <Grid item>
          <Button color={"secondary"} variant={"contained"}>
            Secondary
          </Button>
        </Grid>
        <Grid item>
          <Button color={"primary"} variant={"contained"}>
            Primary
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
