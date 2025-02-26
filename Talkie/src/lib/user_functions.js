import { addDocumentWithCustomId, deleteDocument } from "./db_functions";

/**
 * Function to create a new user with associated collections
 * @param {string} email - The email of the user (used as the user ID in the users collection)
 */

export const createUser = async (email) => {
  try {

    // Create a document in the progress collection
    // await addDocumentWithCustomId("progress", { statistics: {} }, email);

    // Create a document in the users collection with references to the above documents
    await addDocumentWithCustomId(
      "users",
      {
        username: null,
        language: null,
        nativeLanguage: null,
        dialect: null,
      },
      email
    );

    console.log("User created successfully.");
  } catch (e) {
    console.error("Error creating user: ", e);
  }
};

/**
 * Function to delete a user and their associated collections
 * @param {string} email - The email of the user (used as the user ID in the users collection)
 */

export const deleteUser = async (email) => {
  try {
    // Delete the user's associated documents in the courses and progress collections
    await deleteDocument("courses", email);
    await deleteDocument("progress", email);

    // Delete the user document in the users collection
    await deleteDocument("users", email);

    console.log("User and associated data deleted successfully.");
  } catch (e) {
    console.error("Error deleting user: ", e);
  }
};
