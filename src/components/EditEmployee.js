import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee(props) {
    const [show, setShow] = useState(false);
    const [editedName, setEditedName] = useState(props.name);
    const [editedRole, setEditedRole] = useState(props.role);
    const handleClose = () => setShow(false);
    const toogleShow = () => setShow(prev => !prev);


    return (
        <>
            <Button variant="primary" onClick={toogleShow}>
                Edit Employee
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        className="space-y-6"
                        id="edit-modal"
                        onSubmit={(e) => {
                            e.preventDefault();
                            props.editEmployee(props.id, editedName, editedRole);
                            toogleShow();
                        }}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                placeholder="Enter Name"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="role"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                            >
                                Role:
                            </label>
                            <input
                                type="text"
                                name="role"
                                id="role"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                                placeholder="Enter Role"
                                value={editedRole}
                                onChange={(e) => setEditedRole(e.target.value)}
                                required
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toogleShow}>
                        Close
                    </Button>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        form="edit-modal"
                    >
                        Done
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEmployee;
