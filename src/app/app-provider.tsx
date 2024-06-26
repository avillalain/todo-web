import React, {ReactNode} from "react";
import {ThemeProvider} from "@mui/system";
import {theme} from "styles/theme";
import {setupStore, initialState} from "stores";
import {CssBaseline} from "@mui/material";
import {Provider} from "react-redux";

type AppProviderProps = {
  children?: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <Provider store={setupStore(initialState)}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
};