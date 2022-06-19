import React from "react";
import { Container, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  Avatar,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  HStack,
  VStack,
  Text,
  Tr,
} from "@chakra-ui/react";
import { TableHeading } from "./GlobalStyles";
import devAvatar from "../images/ignacio-truffa.png";
import pmAvatar from "../images/walt-cosani.png";
import ActionMenu from "./ActionMenu";
import ProjectsColumns from "./ProjectsColumns";
import { useMediaQuery } from "@chakra-ui/react";
import moment from "moment";
import { motion } from "framer-motion";

const ProjectsList = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1115px)");

  const { projects } = useSelector((state) => state);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const searchResult = projects.filter((project) =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container maxW="container.xxl" px={{ base: 0, md: 4 }}>
        {isDesktop ? (
          <motion.div
            initial={{ y: "1%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TableContainer display={{ base: "none", md: "block" }}>
              <Table>
                <Thead bgColor="gray.50">
                  <Tr>
                    <TableHeading>Project info</TableHeading>
                    <TableHeading>Project Manager</TableHeading>
                    <TableHeading>Assigned to</TableHeading>
                    <TableHeading>Status</TableHeading>
                    <TableHeading>Action</TableHeading>
                  </Tr>
                </Thead>
                <Tbody>
                  {searchResult?.map((project) => (
                    <Tr key={project?.id} bgColor="white">
                      <Td>
                        <VStack alignItems="start">
                          <Text fontSize="md" color="gray.600">
                            {project.projectName}
                          </Text>
                          <Text
                            fontSize="sm"
                            color="gray.400"
                            style={{ marginTop: 2 }}
                          >
                            Creation date:{" "}
                            {moment(project?.creationDate).format(
                              "DD/MM/YYYY, LT"
                            )}
                          </Text>
                        </VStack>
                      </Td>
                      <Td>
                        <HStack alignItems="center">
                          <Avatar
                            size="sm"
                            src={pmAvatar}
                            mr={1}
                            bg="transparent"
                          />
                          <Text> {project?.projectManager}</Text>
                        </HStack>
                      </Td>
                      <Td>
                        <HStack alignItems="center">
                          <Avatar
                            size="sm"
                            src={devAvatar}
                            mr={1}
                            bg="transparent"
                          />
                          <Text>{project?.assignedTo}</Text>
                        </HStack>
                      </Td>
                      <Td>
                        <Text
                          bgColor="gray.50"
                          display="block"
                          width="min-content"
                          textTransform="normal"
                          border="1px"
                          borderColor="gray.200"
                          color="gray.600"
                          borderRadius="md"
                          py={1}
                          px={2}
                        >
                          {project?.status}
                        </Text>
                      </Td>
                      <Td>
                        <ActionMenu
                          id={project?.id}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </motion.div>
        ) : (
          <Box display={{ sm: "100%", lg: "none" }}>
            <motion.div
              initial={{ y: "1%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {" "}
              {/* Only show ProjectsColumns when the screen width is 1115px or less:  */}
              {searchResult.map((project) => (
                <ProjectsColumns data={project} key={project.id} />
              ))}
            </motion.div>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ProjectsList;
