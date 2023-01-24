import Image from 'next/image'
import HandleThemeProvider from './HandleThemeProvider'
import '../styles/globals.scss'
import DarkThemeBtn from './DarkThemeBtn'

const Footer = () => {
  return <footer>Footer</footer>
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />

      <body>
        <HandleThemeProvider>
          <nav>
            Navbar <DarkThemeBtn />
          </nav>

          <main>
            <header>
              <h3>Header</h3>
            </header>
            {children}
            <Footer />
          </main>
        </HandleThemeProvider>
      </body>
    </html>
  )
}
