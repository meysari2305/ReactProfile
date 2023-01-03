import React from 'react';
import { Provider } from 'react-redux';
import Counter from './pembahasan/Counter';
import Store from '../app/store';
const Redux = () => {
  return (
    <div>
      <Provider store={Store}>
        <Counter />
      </Provider>
    </div>
  );
};
export default Redux;
