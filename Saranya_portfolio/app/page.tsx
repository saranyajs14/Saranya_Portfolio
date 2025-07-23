"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamic imports with SSR disabled for components that use browser APIs
const HomeContent = dynamic(() => import("@/components/home-content"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

const AboutSection = dynamic(() => import("@/components/about-section"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

const SkillsSection = dynamic(() => import("@/components/skills-section"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-500 via-slate-400 to-slate-300 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 via-slate-300 to-slate-200 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  ),
})

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          <HomeContent />
        </Suspense>
      </section>

      {/* About Section */}
      <section id="about">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-800 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          <AboutSection />
        </Suspense>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-700 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          <ProjectsSection />
        </Suspense>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-600 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          <SkillsSection />
        </Suspense>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-500 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          <TestimonialsSection />
        </Suspense>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Suspense
          fallback={
            <div className="min-h-screen bg-slate-400 flex items-center justify-center">
              <div className="text-white">Loading...</div>
            </div>
          }
        >
          <ContactSection />
        </Suspense>
      </section>
    </>
  )
}
