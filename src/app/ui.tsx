import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './components/app';

import '../styles.scss';

window.onload = () => {
  const node = document.getElementById('plugin-root') as HTMLElement;
  ReactDOM.createRoot(node).render(<App />);
};
