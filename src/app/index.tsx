import React from 'react';
import Header from "components/header";
import Content from "components/content";
import {Container} from "@mui/material";
import Footer from "components/footer";
import {AppProvider} from "app/app-provider";

function App() {
  return (
    <AppProvider>
      <Container maxWidth={false} disableGutters>
        <Header/>
        <Content/>
        <Footer/>
      </Container>
    </AppProvider>
  );
}

export default App;
