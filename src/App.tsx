import React, { Suspense } from 'react';
import { Provider } from 'react-redux';

import { Posts } from 'pages/Posts';
import { store } from 'store';
import { Spinner } from 'components/common/Spinner';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Posts />
      </Suspense>
    </Provider>
  );
};
