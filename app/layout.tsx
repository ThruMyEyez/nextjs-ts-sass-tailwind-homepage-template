import Image from 'next/image'
import '../styles/globals.scss'

const Footer = () => {
  return <footer>Footer</footer>
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />

      <body>
        <nav>Navbar</nav>

        <main>
          <header>
            <h3>Header</h3>
          </header>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
/*
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center gap-2 "
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
*/
