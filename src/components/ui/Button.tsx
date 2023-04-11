import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-zinc-100 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900 dark:data-[state=open]:bg-zinc-800",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-950 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300 dark:hover:text-zinc-950",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "border border-zinc-400 bg-transparent hover:bg-zinc-200 dark:border-zinc-600 dark:text-zinc-50",
        subtle:
          "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-50",
        ghost:
          "bg-transparent hover:bg-zinc-200 data-[state=open]:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:data-[state=open]:bg-transparent",
        link: "bg-transparent text-zinc-900 underline-offset-4 hover:bg-transparent hover:underline dark:bg-transparent dark:text-zinc-50 dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-2",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
