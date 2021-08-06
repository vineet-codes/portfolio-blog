import { GlobalProvider } from '@/contexts/globalContext';
import GlobalLayout from '@/layouts/globalLayout';

import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <GlobalProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </GlobalProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;
