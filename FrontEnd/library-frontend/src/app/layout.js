import '../styles/globals.css'

export const metadata = {
  title: 'Library App',
  description: 'A simple library management app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
