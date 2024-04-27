import { podcastRepository } from '../repositories/podcastRepository';

export const podcastService = {
  async uploadPodcast(podcastData: any) {
    // Lógica para fazer upload do podcast e salvar no repositório
    return await podcastRepository.create(podcastData);
  },

  async getPodcast(podcastId: string) {
    const podcast = await podcastRepository.findById(podcastId);
    if (!podcast) {
      throw new Error('Podcast not found');
    }
    return podcast;
  },

  async getAllPodcasts() {
    return await podcastRepository.findAll();
  },
};
