"use client";
import { db } from "./firebase.config";
import {
  collection,
  doc,
  query,
  where,
  setDoc,
  updateDoc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

// Function to add a document to the collection
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (e) {
    console.error("Error creating document: ", e);
  }
};

// Function to add a document with a custom ID
export const addDocumentWithCustomId = async (
  collectionName,
  data,
  customId
) => {
  try {
    const docRef = doc(collection(db, collectionName), customId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      alert("Another item with this title already exists");
      return null;
    } else {
      await setDoc(docRef, data);
      return customId;
    }
  } catch (e) {
    console.error("Error creating document: ", e);
  }
};

// Function to get all documents from a collection
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return documents;
  } catch (e) {
    console.error("Error retrieving documents: ", e);
    return [];
  }
};

// Function to get multiple documents by their IDs in the same order as the ID array
export const getDocumentsByIds = async (collectionName, ids) => {
  try {
    const promises = ids.map(async (id) => {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log(`Document with id: ${id} does not exist`);
        return null;
      }
    });

    const documents = await Promise.all(promises);

    // Filters out null documents in case any ID does not exist
    return documents.filter((doc) => doc !== null);
  } catch (e) {
    console.error("Error retrieving documents by IDs: ", e);
    return [];
  }
};

// Function to update a document that meets a condition (query)
export const updateDocumentWithQuery = async (collectionName, key, operator, value, updates) => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(key, operator, value));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No document found that meets the condition.");
      return;
    }

    // Updates the first document that meets the condition
    const docRef = querySnapshot.docs[0].ref; 
    await updateDoc(docRef, updates);

    console.log("Document updated successfully.");
  } catch (e) {
    console.error("Error updating document with query: ", e);
  }
};

// Function to get a document by its ID
export const getDocument = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Document " + id + " does not exist");
      return undefined;
    }
  } catch (e) {
    console.error("Error retrieving document ", e);
  }
};

// Function to update a document
export const updateDocument = async (collectionName, id, updates) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, updates);
  } catch (e) {
    console.error("Error updating document ", e);
  }
};

// Function to add an item to an array in a document
export const addArrItem = async (collectionName, id, key, newData) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      [key]: arrayUnion(newData),
    });
  } catch (e) {
    console.error("Error updating document ", e);
  }
};

// Function to remove an item from an array in a document
export const removeArrItem = async (collectionName, id, key, newData) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      [key]: arrayRemove(newData),
    });
  } catch (e) {
    console.error("Error updating document ", e);
  }
};

// Function to get documents with a query
export const getDocumentsWithQuery = async (
  collectionName,
  key,
  operator,
  value
) => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(key, operator, value));

    const querySnapshot = await getDocs(q);

    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    return results;
  } catch (e) {
    console.error("Error retrieving documents with query ", e);
  }
};

// Function to delete a document
export const deleteDocument = async (collectionName, id) => {
  try {
    await deleteDoc(doc(db, collectionName, id));
  } catch (e) {
    console.error("Error deleting document ", e);
  }
};

// Function to check if a document exists by its ID
export const documentExists = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists();
  } catch (e) {
    console.error("Error checking document existence: ", e);
    return false;
  }
};

// Function to check if a document exists with a specific value in a field
export const documentWithFieldExists = async (collectionName, key, value) => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, where(key, "==", value));
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty; // Returns true if there are results, false otherwise
  } catch (e) {
    console.error("Error checking document existence: ", e);
    return false;
  }
};
