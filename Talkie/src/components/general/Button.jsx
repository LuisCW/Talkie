"use client";

function Button({ text, func, type, size, aditionalStyles = "", disabled = false}) {
  const baseClasses =
    type === "primary"
      ? "text-fgray-200"
      : "text-black border-2 border-fgray-400 hover:border-fgray-600";

  const bgClass = type === "primary" ? "bg-tblue-700 hover:bg-tblue-900" : "bg-transparent";

  const sizeClass = size ? `text-${size}` : "";

  const buttonClasses = `
    font-semibold py-3 md:py-2 px-8 rounded-md outline-none transition-all
    ${baseClasses}
    ${sizeClass}
    ${aditionalStyles}
    ${bgClass}
  `.trim();

  return (
    <button onClick={func} className={buttonClasses} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
