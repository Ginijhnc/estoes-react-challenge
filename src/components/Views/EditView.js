import React, { useEffect, useState } from "react";
import ProjectsHeader from "../ProjectsHeader";
import { Title } from "../GlobalStyles";
import { Box } from "@chakra-ui/react";
import ManagementForm from "../ManagementForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditView = () => {
  const { projects } = useSelector((state) => state);
  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.filter(
      (project) => project.id === parseInt(id)
    );
    setProject(selectedProject[0]);
  }, [projects, id]);

  return (
    <>
      <ProjectsHeader justifyContent="flex-start">
        <Title>Edit project</Title>
      </ProjectsHeader>
      <Box bgColor="gray.100">
        {project && <ManagementForm edit data={project} />}
      </Box>
    </>
  );
};

export default EditView;
