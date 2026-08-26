module.exports = {
  async onPreBuild({ utils }) {
    const cacheDir = '.netlify/cache/events-data';

    try {
      if (await utils.cache.has(cacheDir)) {
        console.log('Found cached events data');
        await utils.cache.restore(cacheDir);
        console.log('Restored events data cache');
      }
    } catch (error) {
      console.error('Error restoring events data cache:', error);
    }
  },

  async onPostBuild({ utils }) {
    const cacheDir = '.netlify/cache/events-data';

    try {
      await utils.cache.save(cacheDir);
      console.log('Saved events data cache');
    } catch (error) {
      console.error('Error saving events data cache:', error);
    }
  }
};
