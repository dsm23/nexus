"use client";

import type { ComponentProps, FunctionComponent } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const Dialog: FunctionComponent<DialogPrimitive.Root.Props> = (props) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

const DialogTrigger: FunctionComponent<DialogPrimitive.Trigger.Props> = (
  props,
) => <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;

const DialogPortal: FunctionComponent<DialogPrimitive.Portal.Props> = (
  props,
) => <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;

const DialogClose: FunctionComponent<DialogPrimitive.Close.Props> = (props) => (
  <DialogPrimitive.Close data-slot="dialog-close" {...props} />
);

const DialogOverlay: FunctionComponent<DialogPrimitive.Backdrop.Props> = ({
  className,
  ...props
}) => (
  <DialogPrimitive.Backdrop
    data-slot="dialog-overlay"
    className={cn(
      "fixed inset-0 isolate z-50 bg-black/10 duration-100 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 supports-backdrop-filter:backdrop-blur-xs",
      className,
    )}
    {...props}
  />
);

const DialogContent: FunctionComponent<
  DialogPrimitive.Popup.Props & {
    showCloseButton?: boolean;
  }
> = ({ className, children, showCloseButton = true, ...props }) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Popup
      data-slot="dialog-content"
      className={cn(
        "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 sm:max-w-sm",
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot="dialog-close"
          render={
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              size="icon-sm"
            >
              <XIcon />
              <span className="sr-only">Close</span>
            </Button>
          }
        />
      )}
    </DialogPrimitive.Popup>
  </DialogPortal>
);

const DialogHeader: FunctionComponent<ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div
    data-slot="dialog-header"
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
);

const DialogFooter: FunctionComponent<
  ComponentProps<"div"> & {
    showCloseButton?: boolean;
  }
> = ({ className, showCloseButton = false, children, ...props }) => (
  <div
    data-slot="dialog-footer"
    className={cn(
      "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
      className,
    )}
    {...props}
  >
    {children}
    {showCloseButton && (
      <DialogPrimitive.Close
        render={<Button variant="outline">Close</Button>}
      />
    )}
  </div>
);

const DialogTitle: FunctionComponent<DialogPrimitive.Title.Props> = ({
  className,
  ...props
}) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    className={cn(
      /* oxlint-disable-next-line better-tailwindcss/no-unknown-classes */
      "cn-font-heading text-base leading-none font-medium",
      className,
    )}
    {...props}
  />
);

const DialogDescription: FunctionComponent<
  DialogPrimitive.Description.Props
> = ({ className, ...props }) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    className={cn(
      "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
      className,
    )}
    {...props}
  />
);

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
