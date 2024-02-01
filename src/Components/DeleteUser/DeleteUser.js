import React from 'react';

const DeleteUser = ({ userId }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://crudcrud.com/api/ef849d38a01440b49251b25467441ebd/unicorns/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(`User with ID ${userId} deleted successfully.`);
        // You can update your UI or state accordingly after successful deletion.
      } else {
        console.error(`Failed to delete user with ID ${userId}.`);
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete User
    </button>
  );
};

export default DeleteUser;
