import { Container } from '@mui/material';
import BannerImage from '../Assets/Images/ecommerceBanner.jpg';

export const Banner = () => {
  return (
    <div>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }} maxWidth="xl">
        <img className="eCommerceBanner" src={BannerImage} alt="banner" style={{width: 'inherit'}}/>
      </Container>
    </div>
  );
};
