"use client"

interface ButtonProps {
  label: string
  secondary?: boolean
  fullWidth?: boolean
  large?: boolean
  onClick: () => void
  disabled?: boolean
  outline?: boolean
}
  
const Button: React.FC<ButtonProps> = ({ 
  label, 
  secondary, 
  fullWidth, 
  onClick, 
  large, 
  disabled, 
  outline 
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 ${fullWidth ? "w-full" : "w-fit"} border-black ${large ? "text-xl" : "text-md"} ${large ? "px-5" : "px-4"} ${large ? "py-3" : "py-2"} ${outline ? "border-black" : ""}`}
    >
      {label}
    </button>
  )
}

export default Button