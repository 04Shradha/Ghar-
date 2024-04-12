import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import r1Image from '../assets/r1.webp'; // Import the image
import r2Image from '../assets/r2.webp';
import r3Image from '../assets/r3.webp';

const cardData = [
  {
    id: 1,
    title: 'Room 1',
    image: r1Image,
    Type: '1 BHK',
  },
  {
    id: 2,
    title: 'Room 2',
    image: r2Image,
    Type: '2 BHK',
  },
  {
    id: 3,
    title: 'Room 3',
    image: r3Image,
    Type: '1 BHK',
  },
];

export default function MediaCard() {
  return (
    <>
        <h1 className='text-5xl mt-10 font-bold text-center text-black'>Featured Rooms</h1>
        <div className='mx-auto border-4 m-4 w-60 border-pink-200'></div>
    <div className="flex justify-between p-10 my-10 bg-slate-300">
      {cardData.map((card) => (
        <div key={card.id} className="flex-1 mx-2">
          <Card>
            <CardMedia
              className="h-40"
              image={card.image}
              title={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.Type}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
    </>
  );
}
