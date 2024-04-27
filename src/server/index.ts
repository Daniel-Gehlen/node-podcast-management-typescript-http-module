import express from 'express';
import { podcastController } from './controllers/podcastController';

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/podcasts', podcastController.uploadPodcast);
app.get('/podcasts/:id', podcastController.getPodcast);
app.get('/podcasts', podcastController.getAllPodcasts);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
