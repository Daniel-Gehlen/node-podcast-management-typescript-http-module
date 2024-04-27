import { Podcast } from '../models/Podcast';

// Simulação de um repositório de dados
const podcasts: Podcast[] = [];

export const podcastRepository = {
  async create(podcastData: any) {
    const newPodcast = { id: podcasts.length + 1, ...podcastData };
    podcasts.push(newPodcast);
    return newPodcast;
  },

  async findById(podcastId: string) {
    return podcasts.find(podcast => podcast.id === parseInt(podcastId));
  },

  async findAll() {
    return podcasts;
  },
};
