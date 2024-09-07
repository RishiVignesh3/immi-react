import './App.css';
import { CampaignDashBoard } from './Campaign/CampaignDashBoard';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomeBoard } from './Home/HomeBoard';
import { MCQ } from './MCQ/MCQ';
import Com from './com/Com';
import { ECommerce } from './ECommerce/ECommerce';
import { ReactWindow } from './Windowing/ReactWindow';
import { Tree } from './Tree/Tree';
import { Button, styled } from '@mui/material';
import { Form } from './Form/Form';

const StyledBtn = styled(Button)({
  '&.MuiButton-root': {
    position: 'fixed',
    color: '#000',
    right: 0,
    zIndex: 9999,
    border: '1px solid',
    opacity: 0.5,
  },
});

function App() {
  return (
    <BrowserRouter>
      <Link to="">
        <StyledBtn>Home</StyledBtn>
      </Link>
      <div className="App">
        <Routes>
          <Route path="" element={<HomeBoard />} />
          <Route path="/Form" element={<Form />} />
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
