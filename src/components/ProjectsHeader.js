import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Title } from "./GlobalStyles";

const ProjectsHeader = ({ children, ...props }) => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <Container maxW="container.xxl" px={[0, 0, 0]}>
      <Box
        bgColor="white"
        maxW="container.xxl"
        py={2}
        display="flex"
        alignItems="center"
        borderBottom="2px solid"
        borderColor="gray.300"
        {...props}
        pl={[
          6, 6, 14,
        ]}
      >
        {path && path !== "/" ? (
          <>
            <BiArrowBack cursor="pointer" onClick={() => navigate("/")} />
            <Text
              fontSize="xs"
              color="gray.500"
              fontWeight="600"
              px={1}
              cursor="pointer"
              onClick={() => navigate("/")}
              _hover={{
                color: "black",
                transition: "all 0.6s ease-out",
              }}
            >
              Back
            </Text>
          </>
        ) : (
          <>
            <Title pl={[0, 0, 0]}>My projects</Title>
          </>
        )}
        {children}
      </Box>
    </Container>
  );
};

export default ProjectsHeader;
