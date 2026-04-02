"use client"

import Image from "next/image"

export function ProjectPreview() {
  const projects = [
    {
      title: "סלון יוקרתי בתל אביב",
      image: "/images/project-luxury-living.jpg",
      metadata: "סלון | מבריק | פסי לד שקועים",
      result: "תקרה מבריקה חלקה עם תאורה משלבת שמרחיבה את המרחב.",
    },
    {
      title: "אמבטיה מודרנית",
      image: "/images/project-elegant-bathroom.jpg",
      metadata: "אמבטיה | סאטן | תאורה צמודת תקרה",
      result: "פתרון עמיד בחלל רטוב עם גימור עדין וטבעי.",
    },
    {
      title: "חדר שינה מינימליסטי",
      image: "/images/project-modern-bedroom.jpg",
      metadata: "חדר שינה | מט | תקרה מוארת",
      result: "תאורה רכה ואמביאנטית שיוצרת אווירה רגועה.",
    },
    {
      title: "לובי משרדים",
      image: "/images/project-commercial-lobby.jpg",
      metadata: "לובי | מבריק | פסי תאורה מגנטיים",
      result: "תקרה מרשימה בגודל גדול עם תאורה קבוע ומודרנית.",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          פרויקטים נבחרים
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-accent font-medium mb-3 uppercase">
                  {project.metadata}
                </p>

                <p className="text-muted leading-relaxed">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
