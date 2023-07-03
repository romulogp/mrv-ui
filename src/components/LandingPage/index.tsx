import React from 'react';
import { About } from './About';
import { Home } from './Home';
import { FAQ } from './FAQ';
import { Contact } from './Contact';
import { Feature } from './Feature';
import { Pricing } from './Pricing';
import { Work } from './Work';

export const LandingPage = () => {
  return (
    <div className="main">
      <Home />
      <About />

      <FAQ />

      <footer />
    </div>
  );
};
