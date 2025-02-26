"use client";

import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getDocument, updateDocument } from "@/lib/db_functions";
import { UserContext } from "@/context/UserContext";

export default function UpdateDataDialog({ isOpen, onOpenChange }) {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [dialect, setDialect] = useState("");

  const [errors, setErrors] = useState({});
  const [isUpdating, setIsUpdating] = useState(false); // State to manage the update process
  const [updateError, setUpdateError] = useState(""); // State for error message

  const { email } = useContext(UserContext);

  // Synchronize the states when the dialog is open
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getDocument("users", email);
        setName(res.name);
        setLanguage(res.language);
        setDialect(res.dialect);
        setUpdateError("");
      } catch (err) {
        console.error("An error occurred trying to get the data: " + err);
        setUpdateError("Error fetching data. Please try again later.");
      }
    };
    if (isOpen) {
      getData();
    }
  }, [isOpen, email]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
  };

  const handleSaveChanges = async () => {
    if (validateFormData()) {
      setIsUpdating(true); // Start the update process
      setUpdateError(""); // Clear error message
      try {
        await updateDocument("users", email, { name });
        // If the update is successful, close the dialog
        onOpenChange(false);
      } catch (err) {
        console.error("An error occurred trying to update the data");
        setUpdateError(
          "An error occurred while updating the data. Please try again."
        ); // Show error message
      } finally {
        setIsUpdating(false); // End the update process
      }
    }
  };

  const validateFormData = () => {
    const newErrors = {};
    if (!name || name.length < 3) {
      newErrors.name = "Username must be at least 3 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Actualizar información</DialogTitle>
          <DialogDescription>
            Modifica tus datos personales, presiona actualizar cuando hayas terminado
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Nombre de usuario" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              value={name}
              onChange={handleInputChange}
              placeholder=""
              className="col-span-3"
            />
            {errors.name && (
              <p className="text-red-500 col-span-4">{errors.name}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="language" className="text-right">
              Idioma
            </Label>
            <Input
              id="language"
              value={language}
              readOnly
              className="col-span-3 bg-gray-200 cursor-not-allowed"
            />
          </div>
          {updateError && (
            <p className="text-red-500 col-span-4">{updateError}</p>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dialect" className="text-right">
              Dialecto
            </Label>
            <Input
              id="dialect"
              value={dialect}
              readOnly
              className="col-span-3 bg-gray-200 cursor-not-allowed"
            />
          </div>
          {updateError && (
            <p className="text-red-500 col-span-4">{updateError}</p>
          )}
        </div>
        <DialogFooter>
          <Button
            onClick={handleSaveChanges}
            disabled={isUpdating}
            style={{
              cursor: isUpdating ? "default" : "pointer",
              opacity: isUpdating ? 0.5 : 1,
            }}
          >
            {isUpdating ? "Cargando..." : "Guardar cambios"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
