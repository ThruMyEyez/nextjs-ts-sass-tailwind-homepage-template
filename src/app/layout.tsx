//import Image from 'next/image';
import '../styles/globals.scss';
import Footer from '../components/UI/footer/Footer';
import HandleThemeProvider from './HandleThemeProvider';
import DarkThemeBtn from './DarkThemeBtn';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
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
  );
}
