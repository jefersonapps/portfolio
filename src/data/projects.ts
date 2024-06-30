// src/data/projects.ts

import { Technology } from "@/utils/helpers"; // Importe o tipo Technology (ajuste o caminho se necessário)

export interface Project {
  title: string;
  img: string;
  content: string;
  github?: string;
  link?: string
  technologies: Technology[];
}

export const projectsData: Project[] = [
  {
    title: "3D Model Maker",
    content:
      "O 3D Model Maker é uma plataforma que permite ao usuário criar e visualizar objetos 3D interativos no navegador.",
    img: "https://raw.githubusercontent.com/jefersonapps/jefersonapps-3d-model-maker-nextjs/main/src/app/favicon.ico?token=GHSAT0AAAAAACTL5IYL2IYTPSTDMMCFCLWUZUBVM5A",
    link: "https://3dmodelmakerplatform.vercel.app/",
    technologies: ["React.js", "TypeScript", "Next", "Tailwind", "Python"],
  },
  {
    title: "Task Organizer",
    content:
      "O TaskOrganizer é um aplicativo que ajuda você a organizar suas atividades diárias.",
    img: "https://raw.githubusercontent.com/jefersonapps/TaskOrganizer/main/src/assets/adaptive-icon.png",
    github: "https://github.com/jefersonapps/TaskOrganizer",
    technologies: ["React Native", "TypeScript"],
  },
  {
    title: "Fast Latex",
    content:
      "O Fast Latex é um aplicativo desktop de código aberto para renderizar equações curtas ou alinhadas em LaTeX.",
    img: "https://raw.githubusercontent.com/jefersonapps/fast-latex/main/public/icon.png",
    github: "https://github.com/jefersonapps/fast-latex",
    link: "https://github.com/jefersonapps/fast-latex/releases",
    technologies: ["HTML", "CSS", "JavaScript", "Electron"],
  },
  {
    title: "Image OCR",
    content:
      "O Image OCR é um aplicativo de código aberto que permite extrair texto de imagens usando o reconhecimento óptico de caracteres (OCR).",
    img: "https://raw.githubusercontent.com/jefersonapps/image-ocr/main/public/icon.png",
    github: "https://github.com/jefersonapps/image-ocr",
    technologies: ["HTML", "CSS", "JavaScript", "Electron"],
  },
  {
    title: "Image OCR Reader",
    content:
      "Este é um projeto que visa facilitar a extração do texto presente em imagens utilizando o tesseract.js.",
    img: "https://raw.githubusercontent.com/jefersonapps/image-ocr-reader/main/src/app/favicon.ico",
    github: "https://github.com/jefersonapps/image-ocr-reader",
    link: "https://image-ocr-reader.vercel.app/",
    technologies: ["React.js", "TypeScript", "Next", "Tailwind"],
  },
  {
    title: "Oblique Throw",
    content:
      "Este é um projeto desenvolvido em TypeScript e React que simula o lançamento de uma bolinha em um canhão. O usuário pode interagir com a simulação de diversas maneiras, alterando variáveis e observando os resultados.",
    img: "https://raw.githubusercontent.com/jefersonapps/oblique-throw/main/public/icon.png",
    github: "https://github.com/jefersonapps/oblique-throw",
    link: "https://oblique-throw.netlify.app/",
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind"],
  },
  {
    title: "Remover Plano de Fundo",
    content:
      "Esta aplicação GUI, desenvolvida em Python com a biblioteca tkinter, permite remover o fundo de imagens de forma simples e rápida utilizando a biblioteca rembg.",
    img: "https://raw.githubusercontent.com/jefersonapps/remove-background/main/assets/icon.png",
    github: "https://github.com/jefersonapps/remove-background",
    link: "https://github.com/jefersonapps/remove-background/releases/tag/v1.0",
    technologies: ["Python"],
  },
  {
    title: "Operações com Matrizes",
    content:
      "Este projeto é uma ferramenta web que auxilia alunos a entender e praticar operações com matrizes, como soma, subtração e multiplicação.",
    img: "https://raw.githubusercontent.com/jefersonapps/operacoescommatrizes/main/assets/matrix.png",
    github: "https://github.com/jefersonapps/operacoescommatrizes",
    link: "https://operacoescommatrizes.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  }, 
  {
    title: "Marca Pontos",
    content:
      "Este projeto consiste em um jogo e um simulador para o aprendizado de probabilidade e coordenadas no plano cartesiano.",
    img: "https://github.com/jefersonapps/plot-points/raw/main/public/logo.png",
    github: "https://github.com/jefersonapps/plot-points",
    link: "https://marcapontos.vercel.app/",
    technologies: ["React.js", "Vite", "Tailwind"],
  },
  {
    title: "Text Inspector",
    content:
      "Text Inspector é uma ferramenta online que permite contar caracteres e palavras em um texto, além de extrair texto de arquivos PDF para contar o número de caracteres.",
    img: "https://raw.githubusercontent.com/jefersonapps/charactere-counter/main/assets/logo.png",
    github: "https://github.com/jefersonapps/charactere-counter",
    link: "https://textinspector.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Ábaco Online",
    content:
      "Este projeto é um ábaco interativo desenvolvido em HTML, CSS e JavaScript puro. O objetivo é fornecer uma ferramenta visual e interativa para aprender sobre o sistema decimal e realizar operações matemáticas básicas.",
    img: "https://cdn-icons-png.flaticon.com/512/841/841540.png",
    github: "https://github.com/jefersonapps/abaco",
    link: "https://abaco-uepb-jeferson.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];