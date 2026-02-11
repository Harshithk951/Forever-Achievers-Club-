import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './components/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Join = lazy(() => import('./pages/Join'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="what-we-do" element={<WhatWeDo />} />
            <Route path="why-us" element={<WhyUs />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="join" element={<Join />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
