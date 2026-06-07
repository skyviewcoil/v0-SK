import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "רשמתי — תפסיק לאבד לקוחות",
  description:
    "כל שיחה שנכנסת אליך נרשמת אוטומטית — מי התקשר, מה ביקש, ומתי לחזור אליו. בלי שתרשום מילה.",
}

export default function RashamtiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
