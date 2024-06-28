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
          <h2 className="font-black text-3xl md:text-4xl">Projetos Recentes</h2>
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              title="3D Model Maker"
              content="O 3D Model Maker é uma plataforma que permite ao usuário criar e visualizar objetos 3D interativos no navegador."
              img="https://3dmodelmakerplatform.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.28c6f610.ico&w=48&q=75"
              className="scale-[2]"
              link="https://3dmodelmakerplatform.vercel.app/"
              technologies={[
                "React.js",
                "TypeScript",
                "Next",
                "Tailwind",
                "Python",
              ]}
            />
            <Card
              title="Task Organizer"
              content="O TaskOrganizer é um aplicativo que ajuda você a organizar suas
              atividades diárias."
              img="https://raw.githubusercontent.com/jefersonapps/TaskOrganizer/main/src/assets/adaptive-icon.png"
              className="scale-150"
              github="https://github.com/jefersonapps/TaskOrganizer"
              technologies={["React Native", "TypeScript"]}
            />
            <Card
              title="Fast Latex"
              content="O Fast Latex é um aplicativo desktop de código aberto para renderizar equações curtas ou alinhadas em LaTeX."
              img="https://raw.githubusercontent.com/jefersonapps/fast-latex/main/public/icon.png"
              className="invert dark:invert-0 scale-75"
              github="https://github.com/jefersonapps/fast-latex"
              link="https://github.com/jefersonapps/fast-latex/releases"
              technologies={["HTML", "CSS", "JavaScript", "Electron"]}
            />
            <Card
              title="Image OCR"
              content="O Image OCR é um aplicativo de código aberto que permite extrair texto de imagens usando o reconhecimento óptico de caracteres (OCR)."
              img="https://raw.githubusercontent.com/jefersonapps/image-ocr/main/public/icon.png"
              className="invert dark:invert-0 scale-75"
              github="https://github.com/jefersonapps/image-ocr"
              technologies={["HTML", "CSS", "JavaScript", "Electron"]}
            />
            <Card
              title="Image OCR Reader"
              content="Este é um projeto que visa facilitar a extração do texto presente em imagens utilizando o tesseract.js."
              className="scale-90"
              img="https://raw.githubusercontent.com/jefersonapps/image-ocr-reader/main/src/app/favicon.ico"
              github="https://github.com/jefersonapps/image-ocr-reader"
              link="https://image-ocr-reader.vercel.app/"
              technologies={["React.js", "TypeScript", "Next", "Tailwind"]}
            />
            <Card
              title="Oblique Throw"
              content="Este é um projeto desenvolvido em TypeScript e React que simula o lançamento de uma bolinha em um canhão. O usuário pode interagir com a simulação de diversas maneiras, alterando variáveis e observando os resultados."
              img="https://raw.githubusercontent.com/jefersonapps/oblique-throw/main/public/icon.png"
              className="scale-90"
              github="https://github.com/jefersonapps/oblique-throw"
              link="https://oblique-throw.netlify.app/"
              technologies={["React.js", "TypeScript", "Vite", "Tailwind"]}
            />
            <Card
              title="Remover Plano de Fundo"
              content="Esta aplicação GUI, desenvolvida em Python com a biblioteca tkinter, permite remover o fundo de imagens de forma simples e rápida utilizando a biblioteca rembg."
              img="https://raw.githubusercontent.com/jefersonapps/remove-background/main/assets/icon.png"
              className="scale-90"
              github="https://github.com/jefersonapps/remove-background"
              link="https://github.com/jefersonapps/remove-background/releases/tag/v1.0"
              technologies={["Python"]}
            />
            <Card
              title="Operações com Matrizes"
              content="Este projeto é uma ferramenta web que auxilia alunos a entender e praticar operações com matrizes, como soma, subtração e multiplicação."
              img="https://raw.githubusercontent.com/jefersonapps/operacoescommatrizes/main/assets/matrix.png"
              className="invert-0 dark:invert scale-75"
              github="https://github.com/jefersonapps/operacoescommatrizes"
              link="https://operacoescommatrizes.vercel.app/"
              technologies={["HTML", "CSS", "JavaScript"]}
            />
            <Card
              title="Text Inspector"
              content="Text Inspector é uma ferramenta online que permite contar caracteres e palavras em um texto, além de extrair texto de arquivos PDF para contar o número de caracteres."
              img="https://raw.githubusercontent.com/jefersonapps/charactere-counter/main/assets/logo.png"
              className="scale-75"
              github="https://github.com/jefersonapps/charactere-counter"
              link="https://textinspector.netlify.app/"
              technologies={["HTML", "CSS", "JavaScript"]}
            />
            <Card
              title="Ábaco Online"
              content="Este projeto é um ábaco interativo desenvolvido em HTML, CSS e JavaScript puro. O objetivo é fornecer uma ferramenta visual e interativa para aprender sobre o sistema decimal e realizar operações matemáticas básicas."
              img="https://cdn-icons-png.flaticon.com/512/841/841540.png"
              className="scale-75"
              github="https://github.com/jefersonapps/abaco"
              link="https://abaco-uepb-jeferson.netlify.app/"
              technologies={["HTML", "CSS", "JavaScript"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
