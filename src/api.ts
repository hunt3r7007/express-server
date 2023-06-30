import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send([
    {
      "id":1,
      "title" :"ACRYLIC BOX" ,
      "image": "./public/images/Image01.jpg",
      "description":"These are jewellery Box. we can Box's make as per your size and order."
    },
    {
      "id":2,
      "title" :"ACRYLIC BOX" ,
      "image": "./public/images/Image02.jpg",
      "description":"These are jewellery Box. we can Box's make as per your size and order."
    },
    {
      "id":3,
      "title" :"ACRYLIC BOX" ,
      "image": "./public/images/Image03.jpg",
      "description":"These are jewellery Box. we can Box's make as per your size and order."
    },
    {
      "id":4,
      "title" :"ACRYLIC BOX" ,
      "image": "./public/images/Image04.jpg",
      "description":"These are jewellery Box. we can Box's make as per your size and order."
    },
    {
      "id":5,
      "title" :"ACRYLIC BOX" ,
      "image": "./public/images/Image06.jpg",
      "description":"These are jewellery Box. we can Box's make as per your size and order."
    },
    {
      "id":6,
      "title" :"ACRYLIC BOX" ,
      "image": "./public/images/Image06.jpg",
      "description":"These are jewellery Box. we can Box's make as per your size and order."
    }
  ]);
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

// Version the api
app.use('/api/v1', api);
