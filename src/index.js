import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoadingIndicator from "./components/LoadingIndicator";
import { Suspense } from "react";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingIndicator />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

