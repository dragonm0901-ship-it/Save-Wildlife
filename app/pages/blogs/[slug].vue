<template>
  <div class="blog-detail" v-if="post">
    <section class="page-hero">
      <img :src="post.image" :alt="post.title" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <NuxtLink to="/news" class="breadcrumb">News</NuxtLink>
        <span class="label" style="color:var(--electric-lime);display:block;margin:var(--space-md) 0">{{ post.category }}</span>
        <h1 style="font-size:var(--text-4xl);color:var(--white)">{{ post.title }}</h1>
        <p style="color:var(--white-50);margin-top:var(--space-md)">{{ post.date }} &mdash; {{ post.author || post.author_name || 'Conservation Team' }}</p>
      </div>
    </section>
    <section class="section section--bone">
      <div class="container article-container">
        <article class="article-body">
          <p class="article-lead">{{ post.excerpt }}</p>
          <div v-if="post.content_html" v-html="post.content_html"></div>
          <div v-else>
            <p>Wildlife conservation has seen remarkable progress over the past decade, with dedicated organizations and passionate individuals working tirelessly to protect endangered species and restore critical habitats. From community-driven initiatives in rural areas to large-scale governmental programs, the movement to safeguard our planet's biodiversity has gained unprecedented momentum.</p>
            <h3>The Importance of Habitat Protection</h3>
            <p>Habitat loss remains the single greatest threat to wildlife worldwide. By protecting existing natural areas and restoring degraded ecosystems, we can provide essential corridors for animal migration and ensure the long-term survival of countless species. Our sanctuary plays a vital role in this effort through active land management and partnerships with conservation organizations.</p>
          </div>
        </article>
        <aside class="article-sidebar">
          <div class="sidebar-card">
            <h4>Related Articles</h4>
            <NuxtLink v-for="rel in related" :key="rel.slug" :to="`/blogs/${rel.slug}`" class="related-link">{{ rel.title }}</NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </div>
  <div v-else-if="pending" class="loading-state section section--bone">
    <div class="container">
      <p>Loading article...</p>
    </div>
  </div>
  <div v-else class="error-state section section--bone">
    <div class="container">
      <p>Could not load article. Please try again later.</p>
      <NuxtLink to="/news" class="label" style="color:var(--canopy-green)">Back to News</NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const route = useRoute()
const { data: post, pending, error } = await useFetch(`/api/blog/${route.params.slug}`)

useHead({ title: computed(() => post.value?.title || 'Article') })

const related = [
  { title:'Planning Your First Safari', slug:'planning-your-first-safari' },
  { title:'Celebrating Animal Diversity', slug:'celebrating-diversity-of-animals' },
  { title:'Ethical Safari Packing Guide', slug:'ethical-safari-adventure-packing' },
]
</script>
<style scoped>
.page-hero{position:relative;min-height:50vh;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.2) 0%,rgba(10,26,18,.85) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.breadcrumb{font-family:var(--font-accent);font-size:var(--text-sm);color:var(--white-50);letter-spacing:.08em;text-transform:uppercase}
.breadcrumb:hover{color:var(--electric-lime)}
.article-container{display:grid;grid-template-columns:2fr 1fr;gap:var(--space-3xl)}
.article-body{max-width:720px}
.article-lead{font-size:var(--text-xl);font-weight:var(--weight-medium);color:var(--charcoal);line-height:1.6;margin-bottom:var(--space-2xl);padding-bottom:var(--space-xl);border-bottom:1px solid var(--fog)}
.article-body p{font-size:var(--text-md);line-height:1.85;color:var(--charcoal-80);margin-bottom:var(--space-lg)}
.article-body h3{font-family:var(--font-body);font-size:var(--text-xl);font-weight:var(--weight-bold);color:var(--charcoal);margin:var(--space-2xl) 0 var(--space-md)}
.article-sidebar{position:sticky;top:100px;height:fit-content}
.sidebar-card{background:var(--ivory);border:1px solid var(--fog);border-radius:var(--radius-xl);padding:var(--space-xl)}
.sidebar-card h4{font-family:var(--font-body);font-size:var(--text-md);font-weight:var(--weight-bold);margin-bottom:var(--space-lg)}
.related-link{display:block;padding:var(--space-sm) 0;border-bottom:1px solid var(--fog);font-size:var(--text-sm);color:var(--charcoal-80);transition:color .2s}
.related-link:hover{color:var(--canopy-green)}
.related-link:last-child{border-bottom:none}
@media(max-width:768px){.article-container{grid-template-columns:1fr}}
</style>
