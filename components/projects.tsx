"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpLeft } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "סלון יוקרתי בתל אביב",
    category: "דירה פרטית",
    location: "תל אביב",
    finish: "מבריק",
    image: "/images/project-luxury-living.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "אמבטיה עדינה בהרצליה",
    category: "חידוש דירה",
    location: "הרצליה",
    finish: "סאטן",
    image: "/images/project-elegant-bathroom.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "חדר שינה מודרני בגבעתיים",
    category: "דירה פרטית",
    location: "גבעתיים",
    finish: "מט",
    image: "/images/project-modern-bedroom.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "משרדים משודרגים ברמת גן",
    category: "מסחרי",
    location: "רמת גן",
    finish: "מבריק + תאורה",
    image: "/images/project-commercial-lobby.jpg",
    featured: true,
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.15 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row-reverse md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="text-right">
            <p className="text-accent text-sm font-medium tracking-widest mb-4">עבודות נבחרות</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none">
              פרויקטים
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group flex-row-reverse whitespace-nowrap"
          >
            לכל הפרויקטים
            <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Featured projects - large editorial layout */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4 flex-row-reverse">
                    <div className="text-right">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {project.category} | {project.location}
                      </p>
                    </div>
                    <span className="text-white/50 text-sm whitespace-nowrap border border-white/30 px-3 py-1">
                      {project.finish}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects - smaller cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {otherProjects.map((project, i) => {
            const index = i + featuredProjects.length
            return (
              <article
                key={project.id}
                ref={(el) => { itemRefs.current[index] = el }}
                data-index={index}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="flex items-end justify-between gap-4 flex-row-reverse">
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {project.category} | {project.location}
                        </p>
                      </div>
                      <span className="text-white/40 text-xs whitespace-nowrap">
                        {project.finish}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
