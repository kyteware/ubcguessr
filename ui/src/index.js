import React from 'react';
import ReactDOM from 'react-dom/client';
import My360Image from './photoSphere';

function App() {
    return <h1>Hello, World!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <header>Hiiiii</header>
    <My360Image />
  </div>
);
