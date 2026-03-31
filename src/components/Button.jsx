
function Button({ onClick, children, variant = "primary", disabled = false }) {
  // Base classes shared by all buttons
  const base =
    "px-4 py-2 rounded-lg text-sm font-semibold transition-opacity duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer";

  // Extra classes per variant
  const variants = {
    primary: "bg-green-400 text-gray-900 hover:bg-green-300",
    danger:  "bg-transparent text-red-400 border border-red-400 hover:bg-red-400 hover:text-white",
    ghost:   "bg-gray-700 text-gray-200 border border-gray-600 hover:bg-gray-600",
    save:    "bg-teal-400 text-gray-900 hover:bg-teal-300",
    small:   "bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 px-3 py-1 text-xs",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
