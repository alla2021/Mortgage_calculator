import * as React from "react";
import {Box, Container} from "@mui/material/";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <>
    <Container sx={{ width: "100%", height: '200px'}}>
      <Box >
        <Typography variant="h1" component="div" gutterBottom>
          Mortgage calculator
        </Typography>
      </Box>
      <Stack direction="row" spacing={6}>
        <Button href="/">
          <HomeIcon color="secondary" />
          Banks management page
        </Button>
        <Button href="/calculator">
          <CalculateIcon color="secondary" />
          Mortgage calculator page
        </Button>
        <Button href="/add-bank">
          <AddIcon color="secondary" />
          Add new bank
        </Button>
      </Stack>
      </Container>
    </>
  );
};

export default Header;
