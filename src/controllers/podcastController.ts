import { Request, Response } from 'express';
import { podcastService } from '../services/podcastService';

export const podcastController = {
  async uploadPodcast(req: Request, res: Response) {
    try {
      const podcast = await podcastService.uploadPodcast(req.body);
      res.status(201).json(podcast);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getPodcast(req: Request, res: Response) {
    try {
      const podcastId = req.params.id;
      const podcast = await podcastService.getPodcast(podcastId);
      res.status(200).json(podcast);
    } catch (error) {
      res.status(404).json({ message: 'Podcast not found' });
    }
  },

  async getAllPodcasts(req: Request, res: Response) {
    try {
      const podcasts = await podcastService.getAllPodcasts();
      res.status(200).json(podcasts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
