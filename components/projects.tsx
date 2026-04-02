"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpLeft } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "דירה עדכנית בתל אביב",
    category: "דירה פרטית",
    location: "תל אביב",
    finish: "מבריק",
    image: "/images/hously-1.png",
  },
  {
    id: 2,
    title: "משרדי סטארטאפ",
    category: "מסחרי",
    location: "רמת גן",
    finish: "מט",
    image: "/images/hously-2.png",
  },
  {
    id: 3,
    title: "בית פרטי מלודי",
    category: "דירה פרטית",
    location: "הרצליה",
    finish: "סאטן",
    image: "/images/hously-3.png",
  },
  {
    id: 4,
    title: "חנות עיצוב פרימיום",
    category: "קמעונאות",
    location: "בני ברק",
    finish: "מבריק + תאורה",
    image: "/images/hously-4.png",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm text-accent font-medium tracking-widest mb-3">פרויקטים מובחרים</p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              דוגמאות מהעבודות שלנו
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group flex-row-reverse"
          >
            לכל הפרויקטים
            <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-foreground origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4 text-right flex-row-reverse">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted/60 text-sm whitespace-nowrap">{project.finish}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
