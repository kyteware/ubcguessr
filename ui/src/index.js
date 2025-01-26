import React from 'react';
import ReactDOM from 'react-dom/client';
import My360Image from './photoSphere';
import './app.css';

export default function App() {
    return (
        <div className="sphere-container">
            <My360Image />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
