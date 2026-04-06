// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/supabase',
  ],

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY,
    redirect: false
  },

  app: {
    head: {
      title: 'Save Wildlife | Wildlife Sanctuary & Nature Reserve',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the majestic wildlife of Nepal at Save Wildlife Sanctuary.' },
        { name: 'theme-color', content: '#1a2e26' },
        { property: 'og:title', content: 'Save Wildlife — Nepalese Conservation & Eco-Tourism' },
        { property: 'og:description', content: 'Experience the wild, protect the future. Save Wildlife is a premium Nepalese sanctuary dedicated to preserving the biodiversity of the Himalayas and Terai.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap' },
      ],
    },
    pageTransition: {
      name: 'jungle',
      mode: 'out-in',
    },
  },

  css: [
    '~/assets/css/reset.css',
    '~/assets/css/design-tokens.css',
    '~/assets/css/global.css',
    '~/assets/css/transitions.css',
  ],

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || '',
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    },
  },

  nitro: {
    preset: 'vercel',
    imports: {
      dirs: ['server/utils'],
    },
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    }
  },

  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
})
