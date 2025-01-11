import React from 'react';
import ReactDOM from 'react-dom/client';
import My360Image from './photoSphere';
import './app.css';

function App() {
    return (
        <div className="sphere-container">
            <h1>Hello, World!</h1>
            <My360Image />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
