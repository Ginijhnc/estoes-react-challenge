import React from "react";
import { Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { types } from "../types/types";
import { Formik } from "formik";

const SearchInput = () => {
  const dispatch = useDispatch();

  const initialValues = {
    searchTerm: "",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const action = {
            type: types.search,
            payload: values,
          };
          dispatch(action);
        }}
      >
        {(formik) => (
          <>
            <Input
              placeholder="Enter a search term"
              size="md"
              width={"15rem"}
              bg={"gray.50"}
              _placeholder={{ color: "gray.600" }}
              onChange={(event) => {
                formik.setFieldValue("searchTerm", event.target.value);
              }}
            />
            <BiSearch
              cursor="pointer"
              size={32}
              style={{ marginLeft: "10px" }}
              type="submit"
              onClick={formik.handleSubmit}
            />
          </>
        )}
      </Formik>
    </>
  );
};

export default SearchInput;
