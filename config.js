// Revics public runtime config.
// Catatan: isi file ini akan terlihat oleh browser. Jangan taruh service role key,
// password, token bot, atau rahasia private lain di sini.

const SUPABASE_URL = 'https://ttocjfcslxqmwbvwiyto.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0b2NqZmNzbHhxbXdidndpeXRvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDQ2NjE4OSwiZXhwIjoyMTAwMDQyMTg5fQ.owTqckpVradAY0UlZRCrgHiI1Z2SPgl3RNEvEA9W7pk';

const DEFAULT_APP_ENV = {
  IMGBB_API_KEY: '8ddd584f7fb55ef50f87523ac0f14905',
  IMGBB_UPLOAD_URL: 'https://api.imgbb.com/1/upload',
  DEFAULT_WA_GROUP_URL: 'https://chat.whatsapp.com/Hh9PJBefjnpC6ao7rt6bWI',
  OWNER_TELEGRAM_URL: 'https://t.me/ArcZNewEra',
  CHECKOUT_TELEGRAM_URL: 'https://t.me/ArcZNewEra',
  FRUIT_STOCK_URL: 'https://blox-fruits.fandom.com/wiki/Blox_Fruits_%22Stock%22',
  SIGNUP_CAPTCHA_API: 'https://api.siputzx.my.id/api/canvas/captcha',
  GAMES_API_BASE: 'https://api.siputzx.my.id/api/games',
  RANDOM_API_BASE: 'https://api.siputzx.my.id/api/r',
  SEARCH_API_BASE: 'https://api.siputzx.my.id/api/s',
  DOWNLOADER_API_BASE: 'https://api.siputzx.my.id/api/d',
  BRAT_API_URL: 'https://api.siputzx.my.id/api/m/brat',
  RANDOM_CAT_IMAGE_URL: 'https://cataas.com/cat?ts=',
  RANDOM_NEKO_API_URL: 'https://nekos.best/api/v2/neko',
  BRAT_SHARE_URL: 'https://wa.me/',
  SOCIAL_TIKTOK_URL: 'https://www.tiktok.com/@revicsacademy',
  SOCIAL_IMAGE_URL: 'https://i.ibb.co.com/4Rs3kt6p/20260608-150559.jpg'
};

const APP_ENV = { ...DEFAULT_APP_ENV, ...(window.REVICS_ENV || {}) };
const IMGBB_API_KEY = APP_ENV.IMGBB_API_KEY;
