import React from "react";
import { Avatar, HStack, Box, Text } from "@chakra-ui/react";
import devAvatar from "../images/ignacio-truffa.png";
import ActionMenu from "./ActionMenu";
import moment from "moment";

const ProjectsColumns = ({ data }) => {
  return (
    <>
      <Box
        p={4}
        bgColor="white"
        borderBottom={{ base: "1px solid" }}
        borderBottomColor={{ base: "gray.300" }}
        width={"100%"}
      >
        <HStack>
          <Box flex={1}>
            <Text fontSize="lg" color="gray.600">
              {data?.projectName}
            </Text>
            <Text fontSize="sm" color="gray.400">
              Creation date:{" "}
              {moment(data?.creationDate).format("DD/MM/YYYY, LT")}
            </Text>
            <HStack alignItems="center">
              <Avatar size="sm" src={devAvatar} mr={1} bg="transparent" />
              <Text fontSize="sm" color="gray.600">
                {data?.assignedTo}
              </Text>
            </HStack>
          </Box>
          <ActionMenu id={data?.id} />
        </HStack>
      </Box>
    </>
  );
};

export default ProjectsColumns;
