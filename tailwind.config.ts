import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontSize: {
            h1: [
                '3.5rem',
                {
                    lineHeight: '3.625rem',
                    letterSpacing: '0.125rem',
                    fontWeight: '700',
                },
            ],
            h2: [
                '2.5rem',
                {
                    lineHeight: '2.75rem',
                    letterSpacing: '0.09rem',
                    fontWeight: '700',
                },
            ],
            h3: [
                '2rem',
                {
                    lineHeight: '2.25rem',
                    letterSpacing: '0.08rem',
                    fontWeight: '700',
                },
            ],
            h4: [
                '1.75rem',
                {
                    letterSpacing: '0.125rem',
                    fontWeight: '700',
                },
            ],
            h5: [
                '1.5rem',
                {
                    letterSpacing: '0.1rem',
                    fontWeight: '700',
                },
            ],
            h6: [
                '1.125rem',
                {
                    letterSpacing: '0.08rem',
                    fontWeight: '700',
                },
            ],
            overline: [
                '0.875rem',
                {
                    letterSpacing: '0.625rem',
                },
            ],
            'sub-title': [
                '0.812rem',
                {
                    lineHeight: '1.50rem',
                    letterSpacing: '0.06rem',
                    fontWeight: '700',
                },
            ],
            body: [
                '0.925rem',
                {
                    lineHeight: '1.55rem',
                    fontWeight: '500',
                },
            ],
            'h1-mobile': [
                '2.25rem',
                {
                    lineHeight: '2.5rem',
                    letterSpacing: '0.08rem',
                    fontWeight: '700',
                },
            ],
            'h3-mobile': [
                '0.925rem',
                {
                    letterSpacing: '0.06rem',
                    fontWeight: '700',
                },
            ],
            'form-label': [
                '0.75rem',
                {
                    letterSpacing: '-0.0133rem',
                    fontWeight: '700',
                },
            ],
            'form-input': [
                '0.875rem',
                {
                    letterSpacing: '-0.015625rem',
                    fontWeight: '700',
                },
            ],
        },
        extend: {
            backgroundImage: {
                hero: "url('/desktop/home/hero.jpg')",
                speaker: "url('/mobile/home/image-speaker-zx7.jpg')",
                'speaker-tablet': "url('/tablet/home/image-speaker-zx7.jpg')",
                'speaker-desktop': "url('/desktop/home/image-speaker-zx7.jpg')",
                'gradient-orange-radial':
                    'radial-gradient(#D87D4A 40%, white 0%)',
            },
            backgroundColor: {
                default: '#FAFAFA',
                header: '#1A1A1A',
                footer: '#1A1A1A',
            },
            colors: {
                'primary-default': '#D87D4A',
                'primary-hover': '#FBAF85',
                'neutral-hover': '#4C4C4C',
                'neutral-default': '#F1F1F1',
                'neutral-alt': '#FAFAFA',
            },
            gridTemplateColumns: {
                '2/1': '2fr 1fr',
                auto: 'auto 1fr',
            },
            maxWidth: {
                desktop: '1440px',
            },
            textColor: {
                title: '#000000',
                'title-alt': '#FFFFFF',
                paragraph: '#000000',
                'paragraph-alt': '#FFFFFF',
                emphasis: '#D87D4A',
            },
            width: {
                '9/10': '90%',
            },
        },
    },
    plugins: [],
};
export default config;
