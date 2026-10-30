import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  name,
  rows = 4,
  className = "",
  ...props
}) => {
  const textareaId = id || name;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        className={`w-full px-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 border border-slate-200/90 shadow-sm focus:outline-none focus:border-[#f38020] focus:ring-4 focus:ring-[#f38020]/10 transition-all text-sm sm:text-base resize-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
