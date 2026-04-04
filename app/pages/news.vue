<template>
  <div class="news-page">
    <section class="page-hero">
      <img src="https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=1600&q=80" alt="Wildlife news" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content"><h1 class="page-hero__title">Latest News</h1><div class="page-hero__meta"><strong class="page-hero__label">Blog</strong><p>Stay updated with the latest stories from wildlife conservation and our sanctuary community.</p></div></div>
    </section>
    <section class="section section--bone" v-if="posts">
      <div class="container">
        <div class="blog-listing">
          <NuxtLink v-for="post in posts" :key="post.slug" :to="`/blogs/${post.slug}`" class="blog-row">
            <div class="blog-row__image"><img :src="post.image" :alt="post.title" loading="lazy" /></div>
            <div class="blog-row__content">
              <div class="blog-row__meta"><span class="label" style="color:var(--canopy-green)">{{ post.category }}</span><span>{{ post.date }}</span></div>
              <h2 class="blog-row__title">{{ post.title }}</h2>
              <p>{{ post.excerpt || post.description }}</p>
              <span class="blog-row__link">Read Article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section v-else-if="pending" class="section section--bone">
      <div class="container">
        <p>Loading latest news...</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const { data: posts, pending, error } = await useFetch('/api/blog')

useHead({ title: 'News' })
</script>
<style scoped>
.page-hero{position:relative;min-height:45vh;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.7) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-5xl);color:var(--white);margin-bottom:var(--space-xl)}
.page-hero__meta{display:flex;align-items:center;gap:var(--space-xl);padding-top:var(--space-xl);border-top:1px solid var(--white-20)}
.page-hero__label{font-size:var(--text-xl);min-width:80px}
.page-hero__meta p{color:var(--white-70);max-width:400px}
.blog-listing{display:flex;flex-direction:column;gap:var(--space-2xl)}
.blog-row{display:grid;grid-template-columns:1fr 1.5fr;gap:var(--space-2xl);align-items:center;padding:var(--space-xl);background:var(--white);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);transition:all .3s var(--ease-out-expo)}
.blog-row:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.blog-row__image{border-radius:var(--radius-lg);overflow:hidden;aspect-ratio:16/10}
.blog-row__image img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
.blog-row:hover .blog-row__image img{transform:scale(1.04)}
.blog-row__meta{display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-sm)}
.blog-row__meta span:last-child{font-size:var(--text-xs);color:var(--charcoal-40)}
.blog-row__title{font-family:var(--font-body);font-size:var(--text-2xl);font-weight:var(--weight-bold);color:var(--charcoal);margin-bottom:var(--space-sm)}
.blog-row__content p{color:var(--charcoal-60);margin-bottom:var(--space-lg);line-height:1.6}
.blog-row__link{display:inline-flex;align-items:center;gap:var(--space-xs);font-family:var(--font-accent);font-size:var(--text-sm);font-weight:var(--weight-semibold);text-transform:uppercase;letter-spacing:.06em;color:var(--canopy-green);transition:color .2s}
.blog-row:hover .blog-row__link{color:var(--jungle-dark)}
@media(max-width:768px){.blog-row{grid-template-columns:1fr}.page-hero__meta{flex-direction:column;align-items:flex-start}}
</style>
