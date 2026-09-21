import React from 'react'
import Hero from '../components/Hero';
import OurCollaboration from '../components/OurCollaboration';
import CoreServices from '../components/CoreServices';
import OurMission from '../components/OurMission';
import TrustedInnovators from '../components/TrustedInnovators';
import TheMindsBehind from '../components/TheMindsBehind';

function Home() {
  return (
    <div>
        {/* Main Content Sections */}
              <main className="flex-grow">
                <Hero />
                <OurCollaboration />
                <CoreServices />
                <OurMission />
                <TrustedInnovators />
                <TheMindsBehind />
              </main>
    </div>
  )
}

export default Home
