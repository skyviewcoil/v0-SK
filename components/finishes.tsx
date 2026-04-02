export function Finishes() {
  const finishes = [
    {
      name: "מבריק",
      description: "משטח זוהר ומחזיר אור",
      uses: "חדרים מודרניים, חללים עם תאורה מלאכותית",
      mood: "מראה יוקרתי וחדש",
    },
    {
      name: "סאטן",
      description: "משטח חלק עם זוהר עדין",
      uses: "חדרים מגורים, משרדים, מכללות",
      mood: "איזון בין חלק וקלט",
    },
    {
      name: "מט",
      description: "משטח לא מחזיר אור",
      uses: "חדרי שינה, חללים קומפורטבליים",
      mood: "מראה רך ומודרני",
    },
  ]

  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 text-right">
          <p className="text-sm text-accent font-medium tracking-widest mb-3">סוגי גימור</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-pretty">
            הגימור הנכון משנה את כל התחושה בחלל
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {finishes.map((finish, index) => (
            <div key={finish.name} className="p-8 rounded-lg bg-secondary/50 border border-border hover:border-accent transition-colors duration-300 cursor-pointer group">
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {finish.name}
              </h3>
              <p className="text-muted mb-6 leading-relaxed">{finish.description}</p>
              
              <div className="space-y-4 border-t border-border/50 pt-6">
                <div>
                  <p className="text-xs text-accent/70 font-semibold uppercase tracking-widest mb-1">שימוש מומלץ</p>
                  <p className="text-sm text-foreground">{finish.uses}</p>
                </div>
                <div>
                  <p className="text-xs text-accent/70 font-semibold uppercase tracking-widest mb-1">אפקט</p>
                  <p className="text-sm text-foreground">{finish.mood}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
