export function Lighting() {
  const lightingOptions = [
    {
      title: "פסי לד שקועים",
      description: "תאורה מוסתרת בשפה של התקרה המתוחה",
      image: "/images/lighting-recessed-led.jpg",
    },
    {
      title: "תאורה היקפית",
      description: "אור דינמי המקיף את גבול החלל",
      image: "/images/lighting-perimeter.jpg",
    },
    {
      title: "ספוטים",
      description: "תאורה נקודתית לגישוש ודגש",
      image: "/images/lighting-spotlights.jpg",
    },
    {
      title: "תקרה מוארת",
      description: "תקרה מתוחה בעלת אור דחוס בעומק",
      image: "/images/lighting-full-ceiling.jpg",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-right">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">פתרונות תאורה</p>
          <h2 className="text-5xl md:text-6xl font-bold text-background leading-tight text-pretty">
            תאורה משולבת וחכמה
          </h2>
          <p className="text-lg text-background/80 mt-6 leading-relaxed">
            משלבים פתרונות תאורה LED מתקדמים בתקרה המתוחה כדי ליצור אפקטים קסומים ופונקציוניים.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lightingOptions.map((option) => (
            <div key={option.title} className="group rounded-lg overflow-hidden border border-background/20 hover:border-accent transition-all duration-300 cursor-pointer">
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-foreground/50">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-foreground/95">
                <h3 className="text-lg font-semibold text-background mb-2 group-hover:text-accent transition-colors">
                  {option.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
