import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Select,
  Input,
  VStack,
} from "@chakra-ui/react";
import { RedButton, FormErrorMessage } from "./GlobalStyles";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { types } from "../types/types";
import {
  successProjectCreatedAlert,
  successProjectEditedAlert,
} from "./Alerts";
import { motion } from "framer-motion";

const ManagementForm = ({ create, data }) => {
  const dispatch = useDispatch();

  const initialValues = {
    projectName: data?.projectName || "",
    description: data?.description || "",
    projectManager: data?.projectManager || "",
    assignedTo: data?.assignedTo || "",
    status: data?.status || "Enabled",
  };

  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    projectManager: Yup.string().required("This field is required"),
    assignedTo: Yup.string().required("This field is required"),
    status: Yup.string().required("This field is required"),
  });

  return (
    <>
      <Container
        maxW="container.md"
        px={{ base: 0, md: 4 }}
        minH="100vh"
        py={{ base: 4, md: 8 }}
      >
        <motion.div
          initial={{ y: "1%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <VStack
            as="form"
            spacing={5}
            px={10}
            py={8}
            mb={20}
            border="2px solid"
            borderColor="gray.300"
            borderRadius="md"
            bg="white"
            alignItems="start"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                if (create === true) {
                  const action = {
                    type: types.add,
                    payload: {
                      ...values,
                      creationDate: new Date(),
                    },
                  };
                  dispatch(action);
                  successProjectCreatedAlert();
                } else {
                  const action = {
                    type: types.edit,
                    payload: {
                      id: data.id,
                      ...values,
                      creationDate: data.creationDate,
                    },
                  };
                  dispatch(action);
                  successProjectEditedAlert();
                }
              }}
            >
              {(formik) => (
                <>
                  <FormControl>
                    <FormLabel>Project name</FormLabel>
                    <Input
                      type="text"
                      id="projectName"
                      value={formik.values.projectName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.projectName && formik.errors.projectName ? (
                      <FormErrorMessage>
                        {formik.errors.projectName}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                      type="text"
                      id="description"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <FormErrorMessage>
                        {formik.errors.description}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Project manager</FormLabel>
                    <Select
                      placeholder="Select a person"
                      value={formik.values.projectManager}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "projectManager",
                          event.target.value
                        );
                      }}
                    >
                      <option value="Walt Cosani">Walt Cosani</option>
                    </Select>
                    {formik.touched.projectManager &&
                    formik.errors.projectManager ? (
                      <FormErrorMessage>
                        {formik.errors.projectManager}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Assigned to</FormLabel>
                    <Select
                      placeholder="Select a person"
                      value={formik.values.assignedTo}
                      onChange={(event) => {
                        formik.setFieldValue("assignedTo", event.target.value);
                      }}
                    >
                      <option value="Ignacio Truffa">Ignacio Truffa</option>
                    </Select>
                    {formik.touched.assignedTo && formik.errors.assignedTo ? (
                      <FormErrorMessage>
                        {formik.errors.assignedTo}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Select
                      value={formik.values.status}
                      onChange={(event) => {
                        formik.setFieldValue("status", event.target.value);
                      }}
                    >
                      <option value="Enabled">Enabled</option>
                      <option value="Disabled">Disabled</option>
                    </Select>
                    {formik.touched.status && formik.errors.status ? (
                      <FormErrorMessage>
                        {formik.errors.status}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <RedButton onClick={formik.handleSubmit}>
                    {create === true ? "Create project" : "Save changes"}
                  </RedButton>
                </>
              )}
            </Formik>
          </VStack>
        </motion.div>
      </Container>
    </>
  );
};

export default ManagementForm;
