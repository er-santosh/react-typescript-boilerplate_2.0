import { AppBar, Toolbar } from "@mui/material";
import { ReactElement } from "react";

export default function Navbar(): ReactElement {
  return (
    <AppBar component="nav" position="static">
      <Toolbar>NAVBAR</Toolbar>
    </AppBar>
  );
}
