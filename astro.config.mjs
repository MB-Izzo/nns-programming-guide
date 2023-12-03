import { defineConfig } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';

import tailwind from "@astrojs/tailwind";
const options = {
    theme: 'rose-pine',
};


// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [
            [rehypePrettyCode, options],
        ],
    }
});
