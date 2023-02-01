import 'app/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="m-0 p-0">{children}</body>
    </html>
  )
}
