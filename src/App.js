import './App.css';
import { CampaignDashBoard } from './Campaign/CampaignDashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeBoard } from './Home/HomeBoard';
import { MCQ } from './MCQ/MCQ';
import Com from './com/Com';
import { ECommerce } from './ECommerce/ECommerce';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<HomeBoard />} />
          <Route path="/MCQ" element={<MCQ />} />
          <Route path="/campaign" element={<CampaignDashBoard />} />
          <Route path="/com" element={<Com />} />
          <Route path="/ecommerce" element={<ECommerce />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
