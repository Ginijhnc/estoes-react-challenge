import React from "react";
import ProjectsList from "../ProjectsList";
import ProjectsHeader from "../ProjectsHeader";
import { Box } from "@chakra-ui/react";
import { RedButton } from "../GlobalStyles";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import SearchInput from "../SearchInput";

const HomeView = () => {
  return (
    <>
      <ProjectsHeader justifyContent="space-between">
        <Link to="/add">
          <RedButton mr={[6, 6, 14]}>
            <BiPlus style={{ marginRight: "2px" }} />
            Add project
          </RedButton>
        </Link>
      </ProjectsHeader>
      <Box display="flex" alignItems="center" justifyContent="center" py={1}>
        <SearchInput />
      </Box>
      <Box bgColor="gray.100" minH="100vh" py={6} px={[0, 0, 10]}>
        <ProjectsList />
      </Box>
    </>
  );
};

export default HomeView;
