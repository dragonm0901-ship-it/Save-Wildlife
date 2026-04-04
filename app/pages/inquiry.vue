<template>
  <div class="inquiry-page">
    <section class="page-hero" style="min-height:35vh">
      <img src="https://images.unsplash.com/photo-1535338454528-1b18a0e8dfd0?w=1600&q=80" alt="Inquiry" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content"><h1 class="page-hero__title">Submit an Inquiry</h1></div>
    </section>
    <section class="section section--bone">
      <div class="container container--lg">
        <form class="inquiry-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group"><label for="inq-name">Full Name</label><input id="inq-name" type="text" v-model="form.name" required placeholder="Your name" :disabled="status.loading" /></div>
            <div class="form-group"><label for="inq-email">Email</label><input id="inq-email" type="email" v-model="form.email" required placeholder="your@email.com" :disabled="status.loading" /></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label for="inq-phone">Phone</label><input id="inq-phone" type="tel" v-model="form.phone" placeholder="+1 234 567 890" :disabled="status.loading" /></div>
            <div class="form-group">
              <label for="inq-type">Inquiry Type</label>
              <select id="inq-type" v-model="form.type" :disabled="status.loading">
                <option>Group Visit</option><option>School Trip</option><option>Corporate Event</option><option>Media Inquiry</option><option>Other</option>
              </select>
            </div>
          </div>
          <div class="form-group"><label for="inq-message">Message</label><textarea id="inq-message" v-model="form.message" rows="6" required placeholder="Please describe your inquiry in detail..." :disabled="status.loading"></textarea></div>
          
          <p v-if="status.success" class="form-success">Inquiry submitted! We'll get back to you shortly.</p>
          <p v-if="status.error" class="form-error">{{ status.error }}</p>

          <UiWildButton type="submit" variant="primary" size="lg" :arrow="true" id="inquiry-submit-btn" :disabled="status.loading">
            {{ status.loading ? 'Submitting...' : 'Submit Inquiry' }}
          </UiWildButton>
        </form>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', phone: '', type: 'Group Visit', message: '' })
const status = ref({ loading: false, success: false, error: null })

async function handleSubmit() {
  try {
    status.value.loading = true
    status.value.error = null
    
    const { data, error } = await useFetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    if (error.value) throw new Error('Submission failed. Please try again.')
    
    status.value.success = true
    form.value = { name: '', email: '', phone: '', type: 'Group Visit', message: '' }
    
    setTimeout(() => {
      status.value.success = false
    }, 5000)
  } catch (err) {
    status.value.error = err.message
  } finally {
    status.value.loading = false
  }
}

useHead({ title: 'Inquiry' })
</script>
<style scoped>
.page-hero{position:relative;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.7) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-5xl);color:var(--white)}
.inquiry-form{background:var(--white);padding:var(--space-3xl);border-radius:var(--radius-xl);box-shadow:var(--shadow-md)}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md)}
.form-group{margin-bottom:var(--space-lg)}
.form-group label{display:block;font-family:var(--font-accent);font-size:var(--text-sm);font-weight:var(--weight-semibold);margin-bottom:var(--space-xs);letter-spacing:.03em}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:var(--space-md) var(--space-lg);border:1px solid var(--fog);border-radius:var(--radius-lg);font-size:var(--text-base);background:var(--ivory);transition:border-color .2s}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{outline:none;border-color:var(--canopy-green)}
.form-group textarea{resize:vertical;min-height:140px}
.form-success{color:#2e7d32;background:#e8f5e9;padding:var(--space-md);border-radius:var(--radius-lg);margin-bottom:var(--space-lg);font-size:var(--text-sm);font-weight:var(--weight-semibold);text-align:center}
.form-error{color:#d32f2f;background:#ffebee;padding:var(--space-md);border-radius:var(--radius-lg);margin-bottom:var(--space-lg);font-size:var(--text-sm);font-weight:var(--weight-semibold);text-align:center}
@media(max-width:768px){.form-row{grid-template-columns:1fr}}
</style>
