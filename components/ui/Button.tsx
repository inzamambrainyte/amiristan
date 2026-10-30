import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  loadingText,
  disabled,
  className = "",
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-medium text-white bg-gradient-to-r from-[#f38020] to-[#fa8c34] hover:from-[#fa8c34] hover:to-[#f38020] active:scale-[0.98] disabled:opacity-60 transition-all duration-200 shadow-button-glow hover:shadow-[0_10px_28px_rgba(243,128,32,0.4)] cursor-pointer ${className}`}
      {...props}
    >
      <span>{isLoading && loadingText ? loadingText : children}</span>
    </button>
  );
};

export default Button;
