import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{"Md Husain Thekiya | Software Developer"}</title>
      <meta name="description" content={"Md Husain Thekiya is a Software developer based in Mumbai, India."} />
      <meta property="og:title" content={"software development"} />
      <meta property="og:description" content={"portfolio, md husain thekiya, software developer, frontend, backend, react, dev, tech, programmer, hussain, thekiya, md hussain, reactJS, nodeJS, nextJS, mongoDB, golang, redis, react, node, database, razorpay, shiprocket"} />
      <meta property="og:url" content={"https://mdhusainthekiya.vercel.app/"} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={"software development"} />
      <meta name="twitter:description" content={"portfolio, md husain thekiya, software developer, frontend, backend, react, dev, tech, programmer, hussain, thekiya, md hussain, reactJS, nodeJS, nextJS, mongoDB, golang, redis, react, node, database, razorpay, shiprocket"} />
      <meta name="twitter:card" content="portfolio, md husain thekiya, software developer, frontend, backend, react, dev, tech, programmer, hussain, thekiya, md hussain, reactJS, nodeJS, nextJS, mongoDB, golang, redis, react, node, database, razorpay, shiprocket" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
