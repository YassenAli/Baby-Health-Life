import React from 'react';
import { Layout } from './components/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NebulizeService } from './components/NebulizeService';
import { BabyMilkService } from './components/BabyMilkService';
import { NurseryService } from './components/NurseryService';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nebulize-service" element={<NebulizeService />} />
          <Route path="/baby-milk" element={<BabyMilkService />} />
          <Route path="/nursery" element={<NurseryService />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;