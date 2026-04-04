<template>
  <div class="faq-page">
    <section class="page-hero" style="min-height:40vh">
      <img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&q=80" alt="FAQ" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content"><h1 class="page-hero__title">Frequently Asked<br/>Questions</h1></div>
    </section>
    <section class="section section--bone" v-if="faqs">
      <div class="container container--lg">
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ 'faq-item--open': openIndex === i }">
            <button class="faq-item__question" @click="toggleFaq(i)">
              <span>{{ faq.question }}</span>
              <span class="faq-item__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div class="faq-item__answer" v-show="openIndex === i">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-else-if="pending" class="section section--bone">
      <div class="container">
        <p>Loading questions...</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const { data: faqs, pending, error } = await useFetch('/api/faqs')

useHead({ title: 'FAQ' })
const openIndex = ref(0)
function toggleFaq(i) { openIndex.value = openIndex.value === i ? null : i }
</script>
<style scoped>
.page-hero{position:relative;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.7) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-5xl);color:var(--white)}
.faq-list{display:flex;flex-direction:column;}
.faq-item{border-bottom:1px solid var(--fog)}
.faq-item__question{width:100%;display:flex;justify-content:space-between;align-items:center;padding:var(--space-xl) 0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:var(--weight-semibold);color:var(--charcoal);text-align:left;gap:var(--space-lg);transition:color .2s}
.faq-item__question:hover{color:var(--canopy-green)}
.faq-item__icon{flex-shrink:0;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border:1px solid var(--fog);border-radius:var(--radius-round);transition:all .3s ease;color:var(--charcoal-60)}
.faq-item--open .faq-item__icon{background:var(--jungle-dark);border-color:var(--jungle-dark);color:var(--white);transform:rotate(45deg)}
.faq-item__answer{padding:0 0 var(--space-xl) 0}
.faq-item__answer p{font-size:var(--text-md);line-height:1.7;color:var(--charcoal-60);max-width:700px}
</style>
