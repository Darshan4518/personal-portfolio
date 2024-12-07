interface TechnologyBadgeProps {
  icon: React.ReactNode;
  className?: string;
}

export function TechnologyBadge({
  icon,
  className = "",
}: TechnologyBadgeProps) {
  return (
    <div className={`relative h-12 w-12 ${className}`}>
      <div className="absolute inset-0 bg-red-900/20 transform rotate-45" />
      <div className="absolute inset-0.5 bg-black transform rotate-45" />
      <div className="absolute inset-0 flex items-center justify-center text-red-500">
        {icon}
      </div>
    </div>
  );
}
