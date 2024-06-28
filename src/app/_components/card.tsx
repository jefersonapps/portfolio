import { Technology, getTagColor } from "@/utils/helpers";
import { Github, Link } from "lucide-react";
import { HTMLProps } from "react";
import { Highlight } from "./highlight";
import { Icon } from "./icon";

interface CardProps {
  title: string;
  img: string;
  content: string;
  github?: string;
  link?: string;
  className?: HTMLProps<HTMLElement>["className"];
  technologies?: Technology[];
}

export function Card({
  title,
  content,
  img,
  github,
  link,
  className,
  technologies = [],
}: CardProps) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-700/50 hover:bg-black/5 dark:hover:bg-zinc-700/60 border-2 border-zinc-400 dark:border-zinc-600 p-4 rounded-lg transition-colors">
      <div className="flex h-full flex-col justify-between">
        <h3 className="font-black text-2xl">{title}</h3>
        <br />
        <div className="flex gap-4 items-center h-full">
          <div className="flex items-center justify-center size-40 overflow-hidden">
            <img
              src={img}
              alt={`ícone do app ${title}`}
              className={className}
            />
          </div>

          <div className="flex flex-1 flex-col justify-between h-full">
            <p className="text-xl">{content}</p>

            <div className="flex flex-wrap my-3 gap-2">
              {technologies.map((tech, index) => (
                <Highlight
                  key={index}
                  style={{ backgroundColor: `${getTagColor(tech)}` }}
                >
                  {tech}
                </Highlight>
              ))}
            </div>
            <div className="flex gap-2 text-xl">
              {github && (
                <Icon href={github}>
                  <Github />
                </Icon>
              )}
              {link && (
                <Icon href={link}>
                  <Link />
                </Icon>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
