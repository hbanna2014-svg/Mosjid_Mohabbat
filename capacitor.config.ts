import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.masjidmohabbat.app',
  appName: 'Masjid Mohabbat',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
