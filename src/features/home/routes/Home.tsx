import { FoodImage } from "@assets/images";
import FlexBox from "@components/box/FlexBox";
import Logo from "@components/Logo";
import { Box } from "@mui/material";
import { GridContainer } from "@components/grid/GridContainer";
import { GridItem } from "@components/grid/GridItem";
import LazyImage from "@components/image/LazyImage";
import { AuthDialogToggle } from "@features/auth";

export const Home = () => {
  const location = false;

  return (
    <>
      {location ? (
        <></>
      ) : (
        <Box
          p={{
            mobile: 2,
            laptop: 16,
          }}
        >
          <GridContainer spacing={2} height="500px">
            <GridItem tablet={12} laptop={6}>
              <FlexBox>
                <Logo />
                <FlexBox>
                  <AuthDialogToggle isHome />
                </FlexBox>
              </FlexBox>
            </GridItem>
            <GridItem
              sx={{
                display: {
                  mobile: "none",
                  laptop: "block",
                },
                width: "100%",
                height: "100%",
              }}
            >
              <LazyImage src={FoodImage} alt="food_banner" height={"100%"} />
            </GridItem>
          </GridContainer>
        </Box>
      )}
    </>
  );
};
