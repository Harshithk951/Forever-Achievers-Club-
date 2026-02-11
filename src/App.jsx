import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
