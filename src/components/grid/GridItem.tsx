import { Grid, GridProps } from "@mui/material";

export const GridItem = ({ children, ...other }: GridProps) => {
  return (
    <Grid item mobile={12} tablet={6} {...other}>
      {children}
    </Grid>
  );
};
