import { types } from "../types/types";

const initialState = [
  {
    id: 1,
    projectName: "Landing page",
    creationDate: "09/09/2020 10:30 am",
    description: "Some description",
    assignedTo: "Ignacio Truffa",
    projectManager: "Walt Cosani",
    status: "Enabled",
  },
  {
    id: 2,
    projectName: "E-Commerce Shop",
    creationDate: "09/09/2020 10:30 am",
    description: "Some description",
    assignedTo: "Ignacio Truffa",
    projectManager: "Walt Cosani",
    status: "Enabled",
  },
  {
    id: 3,
    projectName: "CRM Linkroom",
    creationDate: "09/09/2020 10:30 am",
    description: "Some description",
    assignedTo: "Ignacio Truffa",
    projectManager: "Walt Cosani",
    status: "Enabled",
  },
];

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      const newProject = {
        id: state.length + 1,
        ...action.payload,
      };
      return [...state, newProject];

    case types.edit:
      const updatedProject = state.filter(
        (project) => project.id !== action.payload.id
      );
      return [...updatedProject, action.payload];

    case types.delete:
      return state.filter((project) => project.id !== action.payload.id);

    default:
      return state;
  }
};
