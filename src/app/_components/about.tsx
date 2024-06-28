import { getTagColor, technologies } from "@/utils/helpers";
import { Highlight } from "./highlight";

export function About() {
  return (
    <p className="text-lg md:text-xl leading-relaxed">
      Sou um estudante de matemática que estuda programação para desenvolver
      softwares educacionais utilizando{" "}
      {technologies.map((tech, index) => (
        <span key={index}>
          <Highlight style={{ backgroundColor: `${getTagColor(tech)}` }}>
            {tech}
          </Highlight>
          {index < technologies.length - 2
            ? " , "
            : index === technologies.length - 2 && " , e "}
        </span>
      ))}{" "}
      .
    </p>
  );
}
