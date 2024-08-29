import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Sum from './sum';
import Header from '@/components/features/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Sum />
    </>
  );
}
