import React from "react";
import { Text, Th, Button } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/inter";

// components that are repeatedly used throughout the website

export const Title = ({ children, ...props }) => {
  return (
    <Text
      fontSize="xl"
      fontWeight="600"
      px={4}
      style={{ fontFamily: "Inter" }}
      {...props}
    >
      {children}
    </Text>
  );
};

export const TableHeading = ({ children, ...props }) => {
  return (
    <Th
      textTransform="normal"
      fontSize="sm"
      fontWeight="600"
      color="black.600"
      style={{ fontFamily: "Roboto" }}
      {...props}
    >
      {children}
    </Th>
  );
};

export const FormErrorMessage = ({ children, ...props }) => {
  return (
    <Text fontSize="sm" fontWeight="600" color="red.500" {...props}>
      {children}
    </Text>
  );
};

export const RedButton = ({ children, ...props }) => {
  return (
    <Button
      textTransform="normal"
      fontSize="sm"
      fontWeight="500"
      colorScheme="red"
      size='sm'
      p={5}
      style={{ fontFamily: "Roboto" }}
      {...props}
    >
      {children}
    </Button>
  );
};
