import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all",
        // Size
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-sm",
        // Variant
        variant === "primary" && "bg-[#232732] text-white hover:bg-black",
        variant === "secondary" && "border border-[#232732] text-[#232732] hover:bg-[#232732] hover:text-white",
        variant === "ghost" && "text-[#232732] hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
