import { ComponentProps } from "react";

export function Highlight({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={"font-bold px-2.5 py-0.5 rounded-full text-white " + className}
      {...props}
    ></span>
  );
}
