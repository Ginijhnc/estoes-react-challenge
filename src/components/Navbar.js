import React from "react";
import logo from "../images/logo.png";
import { Image, Box, Container } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box borderBottom="2px solid" borderColor="gray.300">
      <Container maxW="container.xxl" px={[6, 6, 14]} py={2}>
        <Image src={logo} />
      </Container>
    </Box>
  );
};

export default Navbar;
