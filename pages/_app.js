import { Roboto, Raleway } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
    weight: ['100', '300', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
  });

const raleway = Raleway({
  style: ['normal', 'italic'],
  subsets: ['latin']
});

console.log(raleway);

export default function App({ Component, pageProps }) {
  return (
    <div className="main-wrapper">
      <style jsx global>{
        `
          html {
            font-family: ${roboto.style.fontFamily};
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: ${raleway.style.fontFamily};
          }
        `
      }
      </style>
      <Header />
      <main className="main">
            <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
