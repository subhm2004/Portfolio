"use client"
import { useState } from "react"
import { Lens } from "@/components/ui/lens"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "AI-Tutor - Multi-Agent AI Tutoring Platform",
        description: "AI Tutor is a comprehensive learning platform featuring interactive chat-based tutoring powered by AI. It supports real-time responses, Markdown and math rendering, theme support, chat history management, and multi-agent tutoring for topics like Math and Physics.",
        image: "/77.png",
        techStack: ["Next.js", "React", "Tailwind CSS","Gemini API", "Framer Motion", "Flask", "Python", "Radix UI", "next-themes", "TypeScript"],
        liveUrl: "https://multi-ai-tutor.vercel.app/",
        githubUrl: "https://github.com/subhm2004/AI-Tutor",
    },
    {
        id: 2,
        title: "WiseWallet - Personal Finance Dashboard",
        description: "WiseWallet - AI-Powered Finance Platform 🚀💰 WiseWallet is a modern finance management platform built with Next.js, Supabase, Prisma, Inngest, ArcJet, and ShadCN UI. It leverages AI for receipt scanning, personalized financial insights, and automated transaction tracking.",
        image: "https://ik.imagekit.io/abc5342/Screenshot%202025-06-30%20at%2011.43.59%E2%80%AFPM.png?updatedAt=1751307263503&tr=w-1200%2Ch-628%2Cfo-auto",
        techStack: ["Next.js", "Supabase", "Prisma", "ArcJet", "Inngest", "ShadCN","Gemini API", "Resend " ,"Tailwind CSS" ,],
        liveUrl: "https://wise-wallet-snowy.vercel.app/",
        githubUrl: "https://github.com/subhm2004/WiseWallet",
    },
     {
        id: 3,
        title: "VibeDub - AI Video Dubbing",
        description: "VibeDub is an intelligent video dubbing tool powered by Deepgram and Google Translate. It transcribes video audio with high accuracy, translates it to your target language, and generates natural-sounding speech, making multilingual content creation seamless and scalable for global audiences.",
        image: "https://ik.imagekit.io/abc5342/Screenshot%202025-07-01%20at%2012.07.07%E2%80%AFAM.png?updatedAt=1751308689028",
        techStack: ["moviepy", "deepgram-sdk", "googletrans", "gTTS","GitHub"],
        liveUrl: "https://github.com/subhm2004/VibeDub",
        githubUrl: "https://github.com/subhm2004/VibeDub",
    },
    {
        id: 4,
        title: "Evolving Images with Genetic Algorithm",
        description: "This project uses a Genetic Programming algorithm to evolve images that resemble a target image. It employs selection, crossover, and mutation to iteratively refine images, generating visually appealing results and mimicking natural selection.",
        image: "/78.png",
        techStack: ["Python", "PIL (Pillow)", "NumPy", "Pandas", "Matplotlib", "Seaborn", "colour", "IPython.display"],
        liveUrl: "https://github.com/subhm2004/Image_recreation_genetic_algorithm",
        githubUrl: "https://github.com/subhm2004/Image_recreation_genetic_algorithm",
    },
    {
        id: 5,
        title: "YouTube Summarizer",
        description: "A web app that analyzes YouTube playlists to calculate total watch time at various speeds and generate AI-based summaries using the Gemini API. Supports custom inputs, theme switching, and exports in PDF, TXT, and DOCX formats. Built with React, TypeScript, and Tailwind CSS.",
        image: "https://ik.imagekit.io/abc5342/Screenshot%202025-06-30%20at%2011.52.31%E2%80%AFPM.png?updatedAt=1751307766990",
        techStack: ["Next.js", "React", "Gemini", "TypeScript", "Tailwind CSS", "ShadCN UI","GitHub"],
        liveUrl: "https://you-tube-summarizer-one.vercel.app/",
        githubUrl: "https://github.com/subhm2004/YouTube_Summarizer",
    },
     {
        id: 6,
        title: "MarkSmith - Markdown Editor",
        description: "MarkSmith is a modern, feature-packed Markdown editor built with React. It offers a smooth, real-time editing and previewing experience, ideal for developers, writers, and content creators. With its clean interface and responsive design, MarkSmith makes writing Markdown easy, efficient, and enjoyable across various devices and use cases.",
        image: "/1.png",
        techStack: ["React", "JavaScript", "Material UI", "DOMPurify","GitHub"],
        liveUrl: "https://mark-smith-7o2v.vercel.app/",
        githubUrl: "https://github.com/subhm2004/MarkSmith",
    },
     {
        id: 7,
        title: "Codeforces Problem Recommender",
        description: "The Codeforces Problem Recommender is a smart tool that suggests personalized programming problems based on difficulty and tags. It uses the Codeforces API to provide efficient practice recommendations, helping users focus on specific topics and skill levels. Ideal for targeted learning and improving competitive programming performance.",
        image: "/2.png",
        techStack: ["HTML", "CSS", "JavaScript","CF API","GitHub"],
        liveUrl: "https://code-forces-problem-recommender.vercel.app/",
        githubUrl: "https://github.com/subhm2004/Code_forces_problem_recommender",
    },
     {
        id: 8,
        title: "Virtual Mouse",
        description: "Virtual Mouse is a Python project that uses MediaPipe and OpenCV to recognize hand gestures in real time. It lets you control your computer’s mouse and keyboard using just your hands. Fully customizable, it’s ideal for touchless control, accessibility solutions, and gesture-based user interfaces.",
        image: "/4.png",
        techStack: ["OpenCV", "MediaPipe", "PyAutoGUI", "NumPy","GitHub"],
        liveUrl: "https://github.com/subhm2004/Virtual_Mouse",
        githubUrl: "https://github.com/subhm2004/Virtual_Mouse",
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8  transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 font-sans">Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-md">
                        A collection of projects that showcase my skills in web development, design, and problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
    const [hovering, setHovering] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10">
                <Rays />
                <Beams />

                <div className="relative z-10">
                    <div className="mb-6">
                        <Lens hovering={hovering} setHovering={setHovering} lensSize={120} zoomFactor={1.8}>
                            <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-center"
                                />
                            </div>

                        </Lens>
                    </div>

                    <motion.div
                        animate={{
                            filter: hovering ? "blur(1px)" : "blur(0px)",
                        }}
                        className="relative z-20 font-sans text-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4 font-sans">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium bg-orange-900/30 text-orange-300 rounded-full border border-orange-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 font-sans">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 bg-white  hover:bg-white/75 text-black text-sm font-medium rounded-lg transition-all duration-200 text-center"
                            >
                                Live Demo
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:text-black text-gray-300 hover:bg-gray-50 text-sm font-medium rounded-lg transition-all duration-200 text-center"
                            >
                                Code
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}



const Beams = () => {
    return (
        <svg
            width="380"
            height="315"
            viewBox="0 0 380 315"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
        >
            <g filter="url(#filter0_f_120_7473)">
                <circle cx="34" cy="52" r="114" fill="#FF8C00" />
            </g>
            <g filter="url(#filter1_f_120_7473)">
                <circle cx="332" cy="24" r="102" fill="#FFA500" />
            </g>
            <g filter="url(#filter2_f_120_7473)">
                <circle cx="191" cy="53" r="102" fill="#FFB347" />
            </g>
            <defs>
                <filter
                    id="filter0_f_120_7473"
                    x="-192"
                    y="-174"
                    width="452"
                    height="452"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="56"
                        result="effect1_foregroundBlur_120_7473"
                    />
                </filter>
                <filter
                    id="filter1_f_120_7473"
                    x="70"
                    y="-238"
                    width="524"
                    height="524"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="80"
                        result="effect1_foregroundBlur_120_7473"
                    />
                </filter>
                <filter
                    id="filter2_f_120_7473"
                    x="-71"
                    y="-209"
                    width="524"
                    height="524"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="80"
                        result="effect1_foregroundBlur_120_7473"
                    />
                </filter>
            </defs>
        </svg>

    )
}

const Rays = ({ className }: { className?: string }) => {
    return (
        <svg
            width="380"
            height="397"
            viewBox="0 0 380 397"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "absolute left-0 top-0  pointer-events-none z-[1]",
                className
            )}
        >
            <g filter="url(#filter0_f_120_7480)">
                <path
                    d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
                    fill="url(#paint0_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.3"
                filter="url(#filter1_f_120_7480)"
            >
                <path
                    d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
                    fill="url(#paint1_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.86"
                filter="url(#filter2_f_120_7480)"
            >
                <path
                    d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
                    fill="url(#paint2_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                opacity="0.31"
                filter="url(#filter3_f_120_7480)"
            >
                <path
                    d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
                    fill="#8A50FF"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter4_f_120_7480)"
            >
                <path
                    d="M34.2031 13.2222L291.721 269.534"
                    stroke="url(#paint3_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter5_f_120_7480)"
            >
                <path
                    d="M41 -40.9331L298.518 215.378"
                    stroke="url(#paint4_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter6_f_120_7480)"
            >
                <path
                    d="M61.3691 3.8999L317.266 261.83"
                    stroke="url(#paint5_linear_120_7480)"
                />
            </g>
            <g
                style={{ mixBlendMode: "plus-lighter" }}
                filter="url(#filter7_f_120_7480)"
            >
                <path
                    d="M-1.46191 9.06348L129.458 145.868"
                    stroke="url(#paint6_linear_120_7480)"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_120_7480"
                    x="-49.4199"
                    y="-102.729"
                    width="304.212"
                    height="296.803"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="6"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter1_f_120_7480"
                    x="-115.54"
                    y="-64.0903"
                    width="300.326"
                    height="293.822"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter2_f_120_7480"
                    x="-111.647"
                    y="-103.654"
                    width="317.434"
                    height="311.722"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="5.5"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter3_f_120_7480"
                    x="-212.518"
                    y="-188.71"
                    width="473.085"
                    height="369.366"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="48"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter4_f_120_7480"
                    x="25.8447"
                    y="4.84521"
                    width="274.234"
                    height="273.065"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="4"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter5_f_120_7480"
                    x="32.6416"
                    y="-49.3101"
                    width="274.234"
                    height="273.065"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="4"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter6_f_120_7480"
                    x="54.0078"
                    y="-3.47461"
                    width="270.619"
                    height="272.68"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3.5"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <filter
                    id="filter7_f_120_7480"
                    x="-9.2002"
                    y="1.32812"
                    width="146.396"
                    height="152.275"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="3.5"
                        result="effect1_foregroundBlur_120_7480"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_120_7480"
                    x1="-57.5042"
                    y1="-134.741"
                    x2="403.147"
                    y2="351.523"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.214779" stopColor="#FF8C53" />
                    <stop offset="0.781583" stopColor="#FF8C53" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_120_7480"
                    x1="-122.154"
                    y1="-103.098"
                    x2="342.232"
                    y2="379.765"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.214779" stopColor="#FF9953" />
                    <stop offset="0.781583" stopColor="#FF9953" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_120_7480"
                    x1="-106.717"
                    y1="-138.534"
                    x2="359.545"
                    y2="342.58"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.214779" stopColor="#FFAA53" />
                    <stop offset="0.781583" stopColor="#FFAA53" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_120_7480"
                    x1="72.701"
                    y1="54.347"
                    x2="217.209"
                    y2="187.221"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFB381" />
                    <stop offset="1" stopColor="#FFB381" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_120_7480"
                    x1="79.4978"
                    y1="0.191681"
                    x2="224.006"
                    y2="133.065"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFB781" />
                    <stop offset="1" stopColor="#FFB781" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_120_7480"
                    x1="79.6568"
                    y1="21.8377"
                    x2="234.515"
                    y2="174.189"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFC281" />
                    <stop offset="1" stopColor="#FFC281" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_120_7480"
                    x1="16.119"
                    y1="27.6966"
                    x2="165.979"
                    y2="184.983"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFBC81" />
                    <stop offset="1" stopColor="#FFC181" stopOpacity="0" />
                </linearGradient>

            </defs>
        </svg>
    );
};

export default Projects
