import { ComponentProps } from "react";

export function Icon(props: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="p-4 rounded-md bg-zinc-300 dark:bg-zinc-600 cursor-pointer hover:bg-zinc-400/60 dark:hover:bg-zinc-600/50 transition-colors"
      {...props}
    ></a>
  );
}
