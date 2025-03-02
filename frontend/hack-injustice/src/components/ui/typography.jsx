import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

export const TypographyH1 = (
    ({ className, ...props }, ref) => (
      <h1
        ref={ref}
        className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
        {...props}
      />
    ));
  TypographyH1.displayName = "TypographyH1";
  
  export const TypographyH2 =(
    ({ className, ...props }, ref) => (
      <h2
        ref={ref}
        className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)}
        {...props}
      />
    ));
  TypographyH2.displayName = "TypographyH2";
  
  export const TypographyH3 = (
    ({ className, ...props }, ref) => (
      <h3 ref={ref} className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
    )
  );
  TypographyH3.displayName = "TypographyH3";
  
  
  
