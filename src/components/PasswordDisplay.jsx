import React from "react";

const PasswordDisplay = ({
  password,
  showPassword,
  setShowPassword,
  onCopy,
  passwordRef,
}) => {
  return (
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        className="outline-none w-full py-1 px-3 bg-gray-900 text-white"
        placeholder="Password"
      />
      <button
        onClick={() => setShowPassword((prev) => !prev)}
        className="outline-none bg-gray-700 text-white px-3 py-0.5 border-r shrink-0"
        aria-pressed={showPassword}
        aria-label={showPassword ? "Hide Password" : "Show Password"}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      <button
        onClick={onCopy}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        aria-label="Copy password"
      >
        Copy
      </button>
      {/* Always use callbackfn if the new state depends on old state */}
    </div>
  );
};

export default PasswordDisplay;
