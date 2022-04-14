import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <Typography variant="h1" component="div" gutterBottom>
          Mortgage calculator
        </Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button href="/">Banks management page</Button>
        <Button href="/calculator">Mortgage calculator page</Button>
      </Stack>
    </>
  );
};

export default Header;
