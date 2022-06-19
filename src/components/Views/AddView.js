import React from "react";
import ProjectsHeader from "../ProjectsHeader";
import { Box } from "@chakra-ui/react";
import { Title } from "../GlobalStyles";
import ManagementForm from "../ManagementForm";

const AddView = () => {
  return (
    <>
      <ProjectsHeader>
        <Title>Add project</Title>
      </ProjectsHeader>
      <Box bgColor="gray.100">
        <ManagementForm create />
      </Box>
    </>
  );
};

export default AddView;
