import React from "react";
import App from "next/app";
import Head from "next/head";
import { createStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/materialUi/theme";
import withReduxStore from "../src/store/redux";
import { Provider } from "react-redux";
import NavBar from "../src/components/core/NavBar";
import { Container, CssBaseline } from "@material-ui/core";
import SideBar from "../src/components/core/SideBar";
import ContentWrapper from "../src/components/core/ContentWrapper";

class MyApp extends App<any, any> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Provider store={reduxStore}>
            <CssBaseline />
            <div style={{ display: "flex" }}>
              <NavBar />
              <SideBar />
              <ContentWrapper>
                <Component {...pageProps} />
              </ContentWrapper>
            </div>
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
