import { Backdrop, ThemeProvider } from "@mui/material";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "@assets/theme";
import { UIButton } from "@components/ui/Button";
import FallbackLoader from "@components/loader/FallbackLoader";
import { LIGHT_MAIN_COLOR } from "@utils/constants";
import { Provider } from "react-redux";
import store, { persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";
import XLargeText from "@components/text/XLarge";
import CssBaseline from "@mui/material/CssBaseline";

const ErrorFallback = () => {
  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: LIGHT_MAIN_COLOR,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open
    >
      <XLargeText color={"error"} bold p={2}>
        Ooops, something went wrong
      </XLargeText>
      <UIButton
        variant="contained"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </UIButton>
    </Backdrop>
  );
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<FallbackLoader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Router>{children}</Router>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
