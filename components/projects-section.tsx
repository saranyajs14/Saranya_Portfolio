"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation, useStaggeredAnimation } from "@/components/scroll-animations"

const projects = [
  {
    id: 1,
    title: "Hopeful Sign",
    description: "Provides people in war zone to find the nearby shelter, food and Hospitals",
    image: "/hopeful-sign-logo.png",
    link: "#",
    techStack: "React.js, Node.js, Mongo DB, CSS, HTML",
  },
  {
    id: 2,
    title: "Headcount Management Tool",
    description:
      "Helps projects managers and HR to recruit and manage the resource for the projects for each quarter accordingly.",
    image: "/apple-logo.png",
    link: "#",
    techStack: "Java 8, Spring Boot, REST API, Mongo DB",
  },
  {
    id: 3,
    title: "Content Management System",
    description: "Custom CMS with MongoDB integration, achieving 45x performance improvement for ViacomCBS.",
    image: "/viacomcbs-logo.jpeg",
    link: "#",
    techStack: "Java 8, Spring Boot, REST API, Mongo DB, Grafana, Sumo Logic, AWS",
  },
  {
    id: 4,
    title: "British Airways Review Analysis",
    description:
      "Developed an interactive dashboard analyzing British Airways customer reviews, focusing on cabin staff service across time, aircraft type, country, and traveler demographics to uncover service trends and insights.",
    image: "/british-airways-dashboard.png",
    link: "#",
    techStack: "Tableau, SQL",
  },
  {
    id: 5,
    title: "Patient Management System – Microservices Architecture",
    description:
      "A full-stack healthcare application enabling efficient and scalable patient lifecycle management. Developed modular Spring Boot microservices for Appointment, Billing, Notification with loose coupling. Secured APIs with OAuth2 and JWT, used Apache Kafka for real-time event-driven communication, and deployed to AWS ECS with Docker and GitHub Actions CI/CD pipelines.",
    image: "/patient-management-system.png",
    link: "#",
    techStack:
      "Java, Spring Boot, Kafka, OAuth2, JWT, AWS ECS, Docker, GitHub Actions, Spring Cloud Config, Swagger/OpenAPI, LocalStack",
  },
  {
    id: 6,
    title: "Meningioma Clinical Assistant – GenAI System",
    description:
      "A clinical decision-support tool that leverages GenAI to aid in the diagnosis and management of Meningioma. Implemented a Retrieval-Augmented Generation (RAG) pipeline for clinical question answering using LLaMA 3 via Ollama. Built a LangGraph-based conversational agent to orchestrate document retrieval, LLM interactions, and memory. Embedded curated clinical documents with all-MiniLM-L6-v2, stored in FAISS vector store for similarity search.",
    image: "/meningioma-ai-assistant.png",
    link: "#",
    techStack: "LLaMA 3 (Ollama), LangGraph, FAISS, Sentence Transformers, Python, Streamlit, LlamaIndex",
  },
  {
    id: 7,
    title: "AI Knowledge Orchestrator ",
    description:
      "Built an intelligent knowledge orchestration system that seamlessly integrates Spring Boot microservices with Python-based multi-agent AI architecture using LangChain and Model Context Protocol (MCP). The platform features specialized AI agents for research, code generation, and decision-making, processing complex queries through a RAG pipeline powered by MongoDB Atlas Vector Search.",
    image: "/AI_KNOW.png",
    link: "#",
    techStack: "Spring Boot, MongoDB, LangChain, OpenAI/Ollama APIs, Python (FastAPI), Docker, Redis, JWT, MongoDB Atlas Vector Search, GitHub Actions CI/CD",
  },
  {
  id: 8,
  title: "YouTube Data ETL Pipeline with Multi-Region Analysis",
  description:
  "Automated daily collection of ~250 YouTube videos across US, IN, GB, and PK using YouTube Data API v3. Performs category and keyword-based classification to organize video metadata by region. Built with a cloud-native architecture leveraging Azure Functions for serverless automation, Azure Blob Storage for raw data storage, Snowflake Data Warehouse for scalable SQL analytics, and Azure Key Vault for secure credential management.",
  image: "/youtube_ETL.png",
  link: "#",
  techStack: "Python 3.8+, Azure Functions, Azure Blob Storage, Azure Key Vault, Snowflake, Azure CLI, snowflake-connector-python, YouTube Data API v3",
},
]

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const titleRef = useScrollAnimation()
  const projectRefs = projects.map((_, index) => useStaggeredAnimation(index * 100))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-5 w-20 h-20 border border-white/10 rounded-full animate-spin-very-slow"></div>
        <div className="absolute bottom-20 right-5 w-16 h-16 border border-gray-600/15 rounded-full animate-bounce-very-slow"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 border-2 border-white/10 rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/10 rounded-full animate-ping-slow particle"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-white/30 rounded-full animate-float particle"></div>
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gray-600/25 rounded-full animate-float-delayed particle"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-gentle particle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-16 text-center gradient-text relative scroll-animate opacity-0 translate-y-8"
        >
          Projects
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectRef = projectRefs[index]
            return (
              <div
                key={project.id}
                ref={projectRef}
                className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-600/30 transition-all duration-500 h-[300px] hover:shadow-2xl scroll-animate opacity-0 translate-y-8 hover:scale-105 hover:-translate-y-2 group glass-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={project.link} className="block h-full">
                  <div className="h-full relative">
                    {/* Fixed title at the top - hidden on hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 p-4 glass-dark z-10 border-b border-slate-600/30 transition-all duration-500 ${
                        hoveredProject === project.id ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-center gradient-text leading-tight">{project.title}</h3>
                    </div>

                    {/* Project image */}
                    <div className="absolute inset-0 flex items-center justify-center p-10 pt-20">
                      <div
                        className={`relative w-full h-full transition-all duration-700 ${
                          (project.id === 4 || project.id === 5 || project.id === 6) && hoveredProject === project.id
                            ? "scale-110 rotate-1"
                            : (project.id === 4 || project.id === 5 || project.id === 6)
                              ? "scale-90"
                              : hoveredProject === project.id
                                ? "scale-105 rotate-1"
                                : ""
                        }`}
                      >
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-contain transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Overlay that appears on hover for the entire tile */}
                    <div
                      className={`absolute inset-0 glass p-4 flex flex-col items-center transition-all duration-500 z-20 overflow-y-auto project-tile-content border border-slate-600/20 ${
                        hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      {/* Content for the entire tile */}
                      <div className="text-center w-full pt-1">
                        <h3 className="text-lg font-semibold text-slate-100 mb-3 animate-fade-in-up gradient-text leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white mb-4 text-sm animate-fade-in-up animation-delay-100 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-3 glass-card p-3 rounded-lg shadow-lg animate-fade-in-up animation-delay-200 hover:scale-105 transition-transform border border-slate-600/30">
                          <p className="text-white text-xs">
                            <span className="font-semibold gradient-text">Tech Stack: </span>
                            <span className="break-words">{project.techStack}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Border effect on hover */}
                    <div
                      className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                        hoveredProject === project.id ? "border-2 border-white/30" : ""
                      }`}
                    ></div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
