import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "btn-press inline-flex min-h-11 items-center justify-center gap-2 px-5 font-display text-lg font-extrabold uppercase tracking-wide transition-[transform,background-color,box-shadow,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      tone: {
        gold: "bg-gold text-ink hover:bg-gold/90",
        outline:
          "border-2 border-cream bg-transparent text-cream hover:bg-cream/10",
        ink: "bg-ink text-cream hover:bg-ink/90",
        quiet:
          "border-2 border-ink/25 bg-transparent text-ink hover:bg-ink/5",
        plum: "bg-plum text-cream hover:bg-plum/90",
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
