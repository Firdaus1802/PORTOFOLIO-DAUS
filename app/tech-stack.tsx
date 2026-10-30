"use client"
import Image from "next/image"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"

export default function TechStack() {
  return (
    <section id="techstack" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10 overflow-hidden">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Skills & Competencies</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">My Tech Stack</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        {techCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/3">
              <FadeDown delay={idx * 0.1}>
                <h4 className="text-2xl font-black text-text-primary tracking-tight mb-2">{category.title}</h4>
                <p className="text-text-secondary font-medium text-sm leading-relaxed">{category.description}</p>
              </FadeDown>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 w-full">
              {category.technologies.map((tech, techIdx) => (
                <FadeUp key={techIdx} delay={idx * 0.08 + techIdx * 0.03} className="w-full h-full">
                  <div className="group flex flex-col items-center justify-center p-5 bg-background/80 dark:bg-[#121216]/80 backdrop-blur-xl border border-text-secondary/15 dark:border-white/10 hover:border-text-primary/40 rounded-[24px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-full cursor-default select-none">
                    <div className="w-12 h-12 mb-3.5 flex items-center justify-center p-2 rounded-2xl bg-text-secondary/5 dark:bg-white/[0.04] border border-text-secondary/10 dark:border-white/5 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                      {tech.svg ? (
                        tech.svg.startsWith("<") ? (
                          <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: tech.svg }} />
                        ) : (
                          <Image src={tech.svg} alt={tech.name} width={40} height={40} className="w-full h-full object-contain tech-icon-img" unoptimized />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-xl bg-thirdary/50 rounded-lg">{tech.name.charAt(0)}</div>
                      )}
                    </div>
                    <span className="text-xs font-bold text-text-primary text-center tracking-tight">{tech.name}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const techCategories = [
  {
    title: "Frontend Development",
    description: "Frameworks, libraries, and styling tools for building modern responsive web interfaces.",
    technologies: [
      { name: "React.js", svg: "./icons/react.svg" },
      { name: "Next.js", svg: "./icons/nextjs.svg" },
      { name: "Flutter", svg: "./icons/flutter.svg" },
      { name: "Dart", svg: "./icons/dart.svg" },
      { name: "JavaScript", svg: "./icons/javascript.svg" },
      { name: "Tailwind CSS", svg: "./icons/tailwindcss.svg" },
      { name: "HTML5", svg: "./icons/html.svg" },
      { name: "CSS3", svg: "./icons/css.svg" },
      { name: "Framer Motion", svg: "./icons/framermotion.svg" },
    ],
  },
  {
    title: "Back-End & Database",
    description: "Server-side runtime, BaaS / Database (Supabase), RESTful API, dan automation testing.",
    technologies: [
      { name: "Node.js", svg: "./icons/nodejs.svg" },
      { name: "Supabase", svg: "./icons/supabase.svg" },
      { name: "RESTful API", svg: "./icons/restapi.svg" },
      { name: "Postman", svg: "./icons/postman.svg" },
      { name: "Python", svg: "./icons/python.svg" },
    ],
  },
  {
    title: "Cloud & Generative AI",
    description: "Cloud computing infrastructure and AI model deployment berdasarkan sertifikasi resmi.",
    technologies: [
      { name: "Microsoft Azure", svg: "./icons/azure.svg" },
      { name: "AWS Cloud", svg: "./icons/aws.svg" },
      { name: "Kiro (Agentic IDE)", svg: "./icons/kiro.svg" },
      { name: "Scikit-Learn", svg: "./icons/scikit-learn.svg" },
    ],
  },
  {
    title: "Tools & Productivity",
    description: "Development software, version control, cloud deployment, and office productivity tools.",
    technologies: [
      { name: "Git", svg: "./icons/git.svg" },
      { name: "GitHub", svg: "./icons/github.svg" },
      { name: "VS Code", svg: "./icons/vscode.svg" },
      { name: "Vercel", svg: "./icons/vercel.svg" },
      { name: "Microsoft Office", svg: "./icons/msoffice.svg" },
    ],
  },
]
