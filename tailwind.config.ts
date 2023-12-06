import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                default: '#FFFFFF',
                header: '#000000',
                footer: '#101010',
            },
            textColor: {
                title: '#000000',
                paragraph: '#000000',
                subtitle: '#D87D4A',
                overline: '#D87D4A',
            },
            colors: {
                'primary-default': '#D87D4A',
                'primary-hover': '#FBAF85',
                'neutral-default': '#F1F1F1',
                'neutral-alt': '#FAFAFA',
            },
        },
    },
    plugins: [],
};
export default config;
