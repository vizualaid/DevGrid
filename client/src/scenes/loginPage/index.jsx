import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          DevGrid
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          {/* Welcome to DevGrid, the Social Media for Sociopaths! */}
          {/* Join the Grid, Connect with the Best: */}

          Where the brightest minds converge to connect, share and grow!
          {/* DevGrid: Your Destination for Tech-driven Networking!" */}
           {/* DevGrid - Your Ultimate Social Network for Tech Enthusiasts! */}
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
