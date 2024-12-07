interface ProjectButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";

  onClick?: () => void;
  className: string;
}

export function ProjectButton({
  children,
  variant = "primary",
  onClick,
  className,
}: ProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 uppercase text-sm tracking-wider
        transition-colors relative 
        ${
          variant === "primary"
            ? "bg-red-900/20 text-red-500 hover:bg-red-900/30"
            : "border border-red-900/50 text-gray-400 hover:text-red-500"
        },
        ${className}
      `}
    >
      {children}
    </button>
  );
}
