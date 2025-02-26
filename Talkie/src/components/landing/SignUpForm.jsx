"use client";
import { RiCloseCircleFill, RiLock2Fill, RiMailFill } from "react-icons/ri";
import FormInput from "../general/FormInput";
import Button from "../general/Button";
import { useContext, useState } from "react";
import { SectionContext } from "@/context/SectionContext";
import { signup } from "@/lib/auth_functions";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/user_functions";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setSignUpOpen } = useContext(SectionContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Function to validate email and password
  const validateCredentials = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinLength = 6;

    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (password.length < passwordMinLength) {
      setErrorMessage(
        `Password must be at least ${passwordMinLength} characters.`
      );
      return false;
    }

    setErrorMessage(""); // Clear any existing error messages
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (validateCredentials(email, password)) {
      setLoading(true);
      try {
        await signup(email, password);
        await createUser(email)
        router.push("/dashboard"); // Redirect to the dashboard
      } catch (error) {
        setErrorMessage(error.message || "An error occurred during sign-up.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="w-[90vw] md:w-[50vw] lg:w-[30vw] max-h-[90%] bg-fgray-200 rounded-xl p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-black">
          Crea tu cuenta
        </h2>
        <RiCloseCircleFill
          className="text-3xl text-tblue-900 relative cursor-pointer"
          onClick={() => setSignUpOpen(false)}
        />
      </div>
      <div className="w-full flex flex-col items-center pt-8 gap-6">
        <FormInput
          labelText="Correo"
          value={email}
          setValue={setEmail}
          placeholder="tucorreo@gmail.com"
          icon={<RiMailFill />}
          type="text"
        />
        <FormInput
          labelText="Contraseña"
          value={password}
          setValue={setPassword}
          icon={<RiLock2Fill />}
          type="password"
        />
        {errorMessage && <p className="text-fred-700 text-sm w-full font-semibold px-3 border-l-2 border-fred-700">{errorMessage}</p>}
        <Button
          text={loading ? "cargando..." : "Continuar"}
          disabled={loading}
          type="primary"
          size="xl"
          func={handleSignUp}
          aditionalStyles={`w-full py-3 mt-4 transition-all ${
            loading ? "opacity-50" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}

export default SignUpForm;
