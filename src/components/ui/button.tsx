import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 px-5 font-display text-lg font-bold uppercase tracking-wide transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:translate-y-px active:shadow-press disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      tone: {
        gold: "bg-gold text-ink shadow-lift hover:bg-gold/90",
        plum: "bg-plum text-cream shadow-lift hover:bg-plum/90",
        ink: "bg-ink text-cream shadow-lift hover:bg-ink/90",
        line: "bg-transparent text-cream shadow-line hover:bg-cream/10",
        quiet: "bg-transparent text-ink shadow-quiet hover:bg-ink/5",
      },
    },
    defaultVariants: { tone: "gold" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & { asChild?: boolean };

export function Button({ className, tone, asChild, type, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonStyles({ tone }), className)}
      type={asChild ? undefined : (type ?? "button")}
      {...props}
    />
  );
}
