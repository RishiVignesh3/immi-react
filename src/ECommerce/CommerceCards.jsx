import { Card, CardContent, ImageList, ImageListItem } from '@mui/material';
import { useHook } from '../Hooks/useHook';

export const CommerceCards = () => {
  const itemData = useHook();
  
  const card = (
    <>
      <CardContent>
        <ImageList sx={{ width: 270, height: 230 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </>
  );

  return (
    <Card variant="outlined" sx={{ height: '300px', width: '300px' }}>
      {card}
    </Card>
  );
};
