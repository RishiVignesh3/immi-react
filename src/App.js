import './App.css';
import { CampaignDashBoard } from './Campaign/CampaignDashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeBoard } from './Home/HomeBoard';
import { MCQ } from './MCQ/MCQ';
import Com from './com/Com';
import { ECommerce } from './ECommerce/ECommerce';
import { ReactWindow } from './Windowing/ReactWindow';
import { Tree } from './Tree/Tree';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<HomeBoard />} />
          <Route path="/MCQ" element={<MCQ />} />
          <Route path="/campaign" element={<CampaignDashBoard />} />
          <Route path="/Search" element={<Com />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/windowing" element={<ReactWindow />} />
          <Route path="/tree" element={<Tree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
