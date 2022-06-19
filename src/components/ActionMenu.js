import React from "react";
import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiEditBoxLine, RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { successProjectDeletedAlert } from "./Alerts";

const ActionMenu = ({ id }) => {
  const dispatch = useDispatch();

  const requestConfirmation = () => {
    Swal.fire({
      title: "Do you want to delete this project?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject();
        successProjectDeletedAlert();
      } else if (result.isDenied) {
      }
    });
  };

  const deleteProject = () => {
    const action = {
      type: types.delete,
      payload: {
        id,
      },
    };
    dispatch(action);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<BiDotsVerticalRounded size={24} />}
          size={64}
          bg="none"

        />
        <MenuList>
          <Link to={`/edit/${id}`}>
            <MenuItem
              icon={<RiEditBoxLine />}
              borderBottom="1px solid"
              borderColor="gray.200"
            >
              Edit
            </MenuItem>
          </Link>
          <MenuItem onClick={requestConfirmation} icon={<RiDeleteBin7Line />}>
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ActionMenu;
