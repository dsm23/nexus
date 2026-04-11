import { Loader2 } from "lucide-react";
import { cn } from "~/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = ({
  size = "md",
  className,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  return (
    <Loader2 className={cn("animate-spin", sizeClasses[size], className)} />
  );
};

interface PageLoaderProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export const PageLoader = ({
  message = "Loading...",
  size = "lg",
}: PageLoaderProps) => {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center space-y-4">
      <LoadingSpinner size={size} />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

export const FullPageLoader = ({
  message = "Loading...",
}: {
  message?: string;
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <LoadingSpinner size="lg" />
      <p className="text-lg text-muted-foreground">{message}</p>
    </div>
  );
};
