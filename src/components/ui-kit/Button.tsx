import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Reusable button. All colours come from design tokens. */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90",
        outline: "border-2 border-primary/25 bg-card text-primary hover:bg-primary-soft",
        ghost: "text-primary hover:bg-primary-soft",
        success: "bg-success text-success-foreground hover:bg-success/90",
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
        md: "min-h-11 px-5 text-[0.95rem]",
        lg: "min-h-12 px-7 text-base",
        icon: "min-h-11 min-w-11",
      },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", full: false },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({
  className,
  variant,
  size,
  full,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, full }), className)} {...props} />
  );
}
