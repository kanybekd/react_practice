import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Loading() {
  return (
    <Box sx={{ width: "100%" }} style={{ marginTop: "20px" }}>
      <LinearProgress />
    </Box>
  );
}

export default Loading;
