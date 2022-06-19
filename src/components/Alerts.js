import Swal from "sweetalert2";

export const successProjectCreatedAlert = () => {
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'The project has been created successfully.',
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 2000,
		background: '#e6ecf0',
		width: 500,
	});
};

export const successProjectEditedAlert = () => {
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'The project has been edited successfully.',
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 2000,
		background: '#e6ecf0',
		width: 500,
	});
};

export const successProjectDeletedAlert = () => {
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'The project has been deleted successfully.',
		showConfirmButton: false,
		timerProgressBar: true,
		timer: 2000,
		background: '#e6ecf0',
		width: 500,
	});
};