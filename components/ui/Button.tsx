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
      className={`inline-flex items-center justify-center px-8 py-3.5 rounded-[50px] text-base font-medium text-white bg-[#f38020] hover:bg-[#fa8c34] active:bg-[#d96b0f] disabled:opacity-60 transition-all duration-200 shadow-neu-button hover:shadow-[0_8px_24px_rgba(243,128,32,0.38)] active:shadow-neu-button-inset active:scale-[0.98] cursor-pointer ${className}`}
      {...props}
    >
      <span>{isLoading && loadingText ? loadingText : children}</span>
    </button>
  );
};

export default Button;

