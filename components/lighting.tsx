export function Lighting() {
  const lightingOptions = [
    {
      title: "פסי לד שקועים",
      description: "תאורה מוסתרת בשפה של התקרה המתוחה",
    },
    {
      title: "תאורה היקפית",
      description: "אור דינמי המקיף את גבול החלל",
    },
    {
      title: "מסילה מגנטית",
      description: "ספוטים תחתיים גמישים וניתנים להסבה",
    },
    {
      title: "ספוטים",
      description: "תאורה נקודתית לגישוש ודגש",
    },
    {
      title: "תקרה מוארת",
      description: "תקרה מתוחה בעלת אור דחוס בעומק",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-right">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">פתרונות תאורה</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
            תאורה משולבת וחכמה
          </h2>
          <p className="text-lg text-muted mt-6 leading-relaxed">
            משלבים פתרונות תאורה LED מתקדמים בתקרה המתוחה כדי ליצור אפקטים קסומים ופונקציוניים.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lightingOptions.map((option, index) => (
            <div key={option.title} className="group p-6 rounded-lg bg-background border border-border hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="mb-4 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
