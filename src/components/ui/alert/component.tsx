import type { ComponentProps, FunctionComponent } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";
import alertVariants from "./variants";

const Alert: FunctionComponent<
  ComponentProps<"div"> & VariantProps<typeof alertVariants>
> = ({ className, variant, ...props }) => (
  <div
    data-slot="alert"
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);

const AlertTitle: FunctionComponent<ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div
    data-slot="alert-title"
    className={cn(
      "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
      className,
    )}
    {...props}
  />
);

const AlertDescription: FunctionComponent<ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div
    data-slot="alert-description"
    className={cn(
      "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed",
      className,
    )}
    {...props}
  />
);

export { Alert, AlertTitle, AlertDescription };
