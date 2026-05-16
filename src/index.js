import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{"Md Husain Thekiya | Software Engineer - II"}</title>
      <meta name="description" content={"Md Husain Thekiya is a Software Engineer - II based in Mumbai, India. Specializing in full-stack development with React, Node.js, MongoDB, and more."} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://mdhusainthekiya.vercel.app/"} />
      <meta property="og:title" content={"Md Husain Thekiya | Software Engineer - II"} />
      <meta property="og:description" content={"Software Engineer - II based in Mumbai, India. Building full-stack web apps with React, Node.js, MongoDB, Go, and more."} />
      <meta property="og:image" content={"https://mdhusainthekiya.vercel.app/apple-touch-icon.png"} />
      <meta property="og:site_name" content={"Md Husain Thekiya Portfolio"} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={"Md Husain Thekiya | Software Engineer - II"} />
      <meta name="twitter:description" content={"Software Engineer - II based in Mumbai, India. Building full-stack web apps with React, Node.js, MongoDB, Go, and more."} />
      <meta name="twitter:image" content={"https://mdhusainthekiya.vercel.app/apple-touch-icon.png"} />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
