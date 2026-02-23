// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://iloha-openlab.com',
    output: 'static',
    redirects: {
        '/': '/en/'
    }
});
