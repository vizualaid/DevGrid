import { Box, Typography, useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";

const TrendingHashtagsWidget = ({ hashtags }) => {
  const { palette } = useTheme();

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Top Trending Hashtags
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {hashtags.map((hashtag) => (
          <Typography key={hashtag} variant="body1" fontWeight="500">
            #{hashtag}
          </Typography>
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default TrendingHashtagsWidget;
