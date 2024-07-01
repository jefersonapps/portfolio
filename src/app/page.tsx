import { projectsData } from "@/data/projects";
import { Github, Instagram, Mail } from "lucide-react";
import { About } from "./_components/about";
import { Card } from "./_components/card";
import { Icon } from "./_components/icon";
import { Separator } from "./_components/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center py-14">
      <main className="flex flex-col px-6 max-w-7xl gap-4">
        <div className="flex flex-col-reverse justify-center items-center gap-12 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <h1 className="font-black text-4xl md:text-6xl">Jeferson Leite</h1>

            <About />

            <p className="text-xl font-bold">Contato</p>

            <div className="flex gap-2 text-xl">
              <Icon href="https://www.instagram.com/jefersonlcn03?igsh=eTJnbDhneHgwZTAw">
                <Instagram />
              </Icon>
              <Icon href="mailto:jefersonplaynunes@gmail.com">
                <Mail />
              </Icon>
              <Icon href="https://github.com/jefersonapps">
                <Github />
              </Icon>
            </div>
          </div>

          <div>
            <img
              src="https://github.com/jefersonapps.png"
              alt="profile picture of Jeferson Leite"
              className="rounded-full max-w-64"
            />
          </div>
        </div>

        <Separator />

        <section>
          <h2 className="font-black text-3xl md:text-4xl">
            Projetos Recentes{" "}
            <span className="text-orange-600">({projectsData.length})</span>
          </h2>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsData.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                content={project.content}
                img={project.img}
                link={project.link}
                technologies={project.technologies}
                github={project.github}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
