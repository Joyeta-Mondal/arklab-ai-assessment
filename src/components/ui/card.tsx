
import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"section"> & {
  as?: React.ElementType;
};
function Card({ className, as: Component = "section", ...props }: CardProps) {
  return (
    <Component
      role="region"
      aria-label="Card"
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 py-6 shadow-md transition-shadow hover:shadow-lg",
        "sm:p-6", // padding on small+ screens
        className
      )}
      {...props}
    />
  );
}

type CardHeaderProps = React.ComponentProps<"header"> & {
  as?: React.ElementType;
};
function CardHeader({ className, as: Component = "header", ...props }: CardHeaderProps) {
  return (
    <Component
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-4 border-b border-gray-200 dark:border-gray-700",
        className
      )}
      {...props}
    />
  );
}

type CardTitleProps = React.ComponentProps<"h3"> & {
  as?: React.ElementType;
};
function CardTitle({ className, as: Component = "h3", ...props }: CardTitleProps) {
  return (
    <Component
      data-slot="card-title"
      className={cn(
        "text-lg font-semibold leading-tight text-gray-900 dark:text-white",
        className
      )}
      {...props}
    />
  );
}

type CardDescriptionProps = React.ComponentProps<"p"> & {
  as?: React.ElementType;
};
function CardDescription({ className, as: Component = "p", ...props }: CardDescriptionProps) {
  return (
    <Component
      data-slot="card-description"
      className={cn(
        "text-sm text-gray-600 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
}

type CardActionProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
};
function CardAction({ className, as: Component = "div", ...props }: CardActionProps) {
  return (
    <Component
      data-slot="card-action"
      className={cn(
        "self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

type CardContentProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
};
function CardContent({ className, as: Component = "div", ...props }: CardContentProps) {
  return (
    <Component
      data-slot="card-content"
      className={cn(
        "px-6 py-4",
        className
      )}
      {...props}
    />
  );
}

type CardFooterProps = React.ComponentProps<"footer"> & {
  as?: React.ElementType;
};
function CardFooter({ className, as: Component = "footer", ...props }: CardFooterProps) {
  return (
    <Component
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 pt-4 border-t border-gray-200 dark:border-gray-700",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
