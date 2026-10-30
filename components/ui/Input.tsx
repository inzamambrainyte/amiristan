import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  className = "",
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        className={`w-full px-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 border border-slate-200/90 shadow-sm focus:outline-none focus:border-[#f38020] focus:ring-4 focus:ring-[#f38020]/10 transition-all text-sm sm:text-base ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
