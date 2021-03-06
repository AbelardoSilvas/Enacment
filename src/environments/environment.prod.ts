// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
  firebaseConfig: {
    apiKey: 'AIzaSyC5uyprMWopsiLhdZ21ULJ6rim-EOF3bjM',
    authDomain: 'enacment-cf2fb.firebaseapp.com',
    projectId: 'enacment-cf2fb',
    storageBucket: 'enacment-cf2fb.appspot.com',
    messagingSenderId: '732615924922',
    appId: '1:732615924922:web:92f64364a75a6757e4f683',
  },
};
