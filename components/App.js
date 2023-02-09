import React, { useEffect } from 'react';
import Header from 'components/layout/Header';
import Meals from 'components/meal/Meals';
import Offer from 'components/sections/Offer';
import Footer from 'components/layout/Footer';
function App() {

    
  return (
    <div>
        <Header />
        <main>
          <Meals />
          <Offer />
        </main>
        <Footer />
    </div>
  )
}

export default App