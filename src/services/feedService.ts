import { Podcast } from '../models/Podcast';

export const feedService = {
  async generateFeed(podcasts: Podcast[]) {
    const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>My Podcast Feed</title>
        <description>A feed of my podcasts</description>
        <link>http://example.com/podcasts</link>
        ${podcasts.map(podcast => `
          <item>
            <title>${podcast.title}</title>
            <description>${podcast.description}</description>
            <link>${podcast.url}</link>
          </item>
        `).join('')}
      </channel>
    </rss>`;
    
    return feed;
  },
};
