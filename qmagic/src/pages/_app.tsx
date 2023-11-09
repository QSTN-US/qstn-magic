import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import 'survey-core/defaultV2.min.css';
import "@/styles/updatesurveyv2.css";
import { useMemo } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  return (
      <Component {...pageProps} />
  );
}