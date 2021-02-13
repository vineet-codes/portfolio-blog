import { GlobalProvider } from '@/contexts/globalContext';
import GlobalLayout from '@/layouts/globalLayout';

import MDXComponents from '@/components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <GlobalProvider>
        <GlobalLayout>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </GlobalLayout>
      </GlobalProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;
