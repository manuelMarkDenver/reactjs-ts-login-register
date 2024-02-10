import { Box, Container, Grid, Typography } from "@mui/material";

import bgImage from "../assets/images/bg.jpg";
import bgMascot from "../assets/images/Mascot.png";

import FormContainer from "./FormContainer";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Grid container columnSpacing={50}>
          <Grid item xs={6}>
            <FormContainer />
          </Grid>
          <Grid item xs={6} sx={{ p: 0, m: 0 }} gap={0}>
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={bgMascot}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px #90CACA solid",
                    bgcolor: "transparent",
                    borderRadius: "22px",
                    boxShadow:
                      "inset 0px 3px 9px #00000059, 0px 5px 18px #000000",
                    backdropFilter: "blur(25px)",
                    background:
                      "transparent linear-gradient(102deg, #FFFFFF4D 0%, #FFFFFF66 100%) 0% 0% no-repeat padding-box",
                    padding: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#56CBCB",
                      textAlign: "center",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
