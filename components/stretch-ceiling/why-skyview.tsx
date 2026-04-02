"use client"

export function WhySkyView() {
  const proofs = [
    {
      stat: "1000+",
      description: "התקנות משנת 2017",
    },
    {
      stat: "10 שנים",
      description: "אחריות על היריעה",
    },
    {
      stat: "כל הארץ",
      description: "שירות וביצוע",
    },
    {
      stat: "מומחים",
      description: "בתקרות מתוחות ותאורה",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            למה לעבוד עם SkyView
          </h2>
          <p className="text-lg text-muted mt-4 max-w-2xl">
            עם ניסיון של שנים, אנחנו מבינים כל סוג חלל, אתגר ודרישה. אנחנו עוסקים בפרויקטים
            פשוטים כמו גם מורכבים, ותמיד משימים דגש על איכות וביצוע דקיק.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {proofs.map((proof, index) => (
            <div key={index} className="text-center md:text-right">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {proof.stat}
              </p>
              <p className="text-foreground font-medium">{proof.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
