"use client"

export function About() {
  return (
    <section className="py-40 md:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading with semantic structure */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-pretty">
            מה היא תקרה מתוחה?
          </h2>
          <p className="text-xl text-muted leading-relaxed mb-6">
            תקרה מתוחה היא רשת או בד מיוחד (בדרך כלל פוליסטר או PVC) המתוחה בחוזקה בפרופילים אלומיניום המוכנסים לקיר סביב החלל. זה יוצר משטח חלק, אחיד ודקורטיבי בין 5 ס"מ ל-15 ס"מ מתחת לתקרה המקורית.
          </p>
        </div>

        {/* Grid of informational content - AI readable */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">סוגי גימור זמינים</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-foreground">
                  <span className="font-semibold">גימור מבריק:</span>
                  <span>משטח זוהר המחזיר אור, מעניק מראה יוקרתי וחדש</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="font-semibold">גימור סאטן:</span>
                  <span>משטח חלק עם זוהר עדין, מאזן בין זוהר למט</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="font-semibold">גימור מט:</span>
                  <span>משטח לא מחזיר אור, מעניק מראה רך ומודרני</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">אפשרויות תאורה משולבת</h3>
              <p className="text-muted mb-3">SkyView מציע 7 סוגי תאורה משולבת:</p>
              <ol className="space-y-2 text-foreground">
                <li>1. פסי לד שקועים בתקרה - תאורה מוסתרת בשפת התקרה</li>
                <li>2. פסי תאורה מגנטיים - גמישות בהצבת הנורות</li>
                <li>3. ספוטים שקועים - תאורה נקודתית מדויקת</li>
                <li>4. תאורה צמודת תקרה - קבועה בצמוד לתקרה</li>
                <li>5. תאורה תלויה - עם אפשרות לתליה</li>
                <li>6. תקרה מוארת כמו - כל הקרה כמקור אור</li>
                <li>7. תקרה מוארת עם הדפס - תקרה מוארת עם תמונה</li>
              </ol>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">תאימות לחללים רטובים</h3>
              <p className="text-muted mb-4">
                תקרות מתוחות מתאימות מאוד לחללים רטובים ובעלי לחות גבוהה:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>✓ חדרי אמבטיה ושרותים</li>
                <li>✓ מטבחים</li>
                <li>✓ חדרי סאונה וג'קוזי</li>
                <li>✓ בריכות שחייה פנימיות</li>
                <li>✓ חדרי רחצה וספא</li>
              </ul>
              <p className="text-muted mt-4">
                החומרים עמידים בלחות 95% ויותר. הם לא ספוגים, לא מתפיחים, ולא מפיצים עובש.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">תקרה מתוחה vs גבס</h3>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="font-semibold text-accent mb-2">תקרה מתוחה</p>
                    <ul className="space-y-1 text-foreground">
                      <li>✓ התקנה 1-2 ימים</li>
                      <li>✓ אין אבק ולכלוך</li>
                      <li>✓ עמידה בלחות גבוהה</li>
                      <li>✓ מראה אחיד ודקיק</li>
                      <li>✓ אפשרויות תאורה רחבות</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-accent mb-2">גבס מסורתי</p>
                    <ul className="space-y-1 text-muted">
                      <li>✗ התקנה 2-3 שבועות</li>
                      <li>✗ הרבה אבק ולכלוך</li>
                      <li>✗ רגיש ללחות</li>
                      <li>✗ יתכנו סדקים ופגמים</li>
                      <li>✗ אופציות תאורה מוגבלות</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">אחריות וחלוקה גיאוגרפית</h3>
              <p className="text-foreground mb-2">
                <span className="font-semibold">אחריות:</span> 10 שנים על בעיות ביצוע וחומרים
              </p>
              <p className="text-foreground">
                <span className="font-semibold">שירות:</span> כל תל אביב, רמת גן, הרצליה, גבעתיים וכל הארץ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
