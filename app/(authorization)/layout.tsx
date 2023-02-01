import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head><title>Authorization</title></head>
      <body>{children}</body>
    </html>
  )
}
