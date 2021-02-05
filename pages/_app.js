import { GlobalProvider } from '@/contexts/globalContext';
import GlobalLayout from '@/layouts/globalLayout';

import MDXComponents from '@/components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <GlobalLayout>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </GlobalLayout>
    </GlobalProvider>
  );
}

export default MyApp;
