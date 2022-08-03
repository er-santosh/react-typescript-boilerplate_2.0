import { Grid, GridProps } from "@mui/material";

export const GridContainer = ({ children, ...otherProps }: GridProps) => {
  return (
    <Grid container {...otherProps}>
      {children}
    </Grid>
  );
};
