<template>
  <div class="contact-page">
    <section class="page-hero" style="min-height:40vh">
      <img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=1600&q=80" alt="Contact" class="page-hero__bg" />
      <div class="page-hero__overlay"></div>
      <div class="container page-hero__content">
        <h1 class="page-hero__title">Contact Our Hub</h1>
        <div class="page-hero__meta">
          <strong class="page-hero__label">Kathmandu</strong>
          <p>Connect with our conservation specialists or inquire about upcoming Himalayan expeditions.</p>
        </div>
      </div>
    </section>
    <section class="section section--bone">
      <div class="container">
        <div class="contact-grid">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <h2 style="margin-bottom:var(--space-xl)">Send Us a Message</h2>
            <div class="form-row">
              <div class="form-group"><label for="contact-name">Full Name</label><input type="text" id="contact-name" v-model="form.name" required placeholder="Your name" :disabled="status.loading" /></div>
              <div class="form-group"><label for="contact-email">Email</label><input type="email" id="contact-email" v-model="form.email" required placeholder="your@email.com" :disabled="status.loading" /></div>
            </div>
            <div class="form-group"><label for="contact-subject">Subject</label>
              <select id="contact-subject" v-model="form.subject" :disabled="status.loading">
                <option value="">Select a topic</option>
                <option>Expedition Inquiry</option><option>Conservation Partnership</option><option>Access Pass Support</option><option>Media & Press</option><option>Feedback</option>
              </select>
            </div>
            <div class="form-group"><label for="contact-message">Message</label><textarea id="contact-message" v-model="form.message" required rows="5" placeholder="Tell us how we can help..." :disabled="status.loading"></textarea></div>
            
            <p v-if="status.success" class="form-success">Message sent! We'll be in touch soon.</p>
            <p v-if="status.error" class="form-error">{{ status.error }}</p>

            <UiWildButton type="submit" variant="primary" size="lg" :arrow="true" id="contact-submit-btn" :disabled="status.loading">
              {{ status.loading ? 'Sending...' : 'Send Message' }}
            </UiWildButton>
          </form>
          <div class="contact-info">
            <div class="contact-info-card">
              <h3>Visit Us</h3>
              <div class="contact-detail"><span class="label" style="color:var(--canopy-green)">Headquarters</span><p>Durbar Marg, Kathmandu, Nepal</p></div>
              <div class="contact-detail"><span class="label" style="color:var(--canopy-green)">Phone</span><p><a href="tel:+977014000000">+977 01 400 0000</a></p></div>
              <div class="contact-detail"><span class="label" style="color:var(--canopy-green)">Email</span><p><a href="mailto:info@savewildlife.org.np">info@savewildlife.org.np</a></p></div>
              <div class="contact-detail"><span class="label" style="color:var(--canopy-green)">Hours</span><p>Mon-Sun: 7:00 AM - 5:00 PM</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
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
    form.value = { name: '', email: '', subject: '', message: '' }
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      status.value.success = false
    }, 5000)
  } catch (err) {
    status.value.error = err.message
  } finally {
    status.value.loading = false
  }
}

useHead({ title: 'Contact Us' })
</script>
<style scoped>
.page-hero{position:relative;display:flex;align-items:flex-end;padding-bottom:var(--space-3xl);overflow:hidden}
.page-hero__bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.page-hero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,26,18,.3) 0%,rgba(10,26,18,.7) 100%)}
.page-hero__content{position:relative;z-index:2;color:var(--white)}
.page-hero__title{font-size:var(--text-5xl);color:var(--white);margin-bottom:var(--space-xl)}
.page-hero__meta{display:flex;align-items:center;gap:var(--space-xl);padding-top:var(--space-xl);border-top:1px solid var(--white-20)}
.page-hero__label{font-size:var(--text-xl);min-width:80px}
.page-hero__meta p{color:var(--white-70);max-width:400px}
.contact-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:var(--space-3xl)}
.contact-form h2{font-size:var(--text-3xl)}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md)}
.form-group{margin-bottom:var(--space-lg)}
.form-group label{display:block;font-family:var(--font-accent);font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--charcoal);margin-bottom:var(--space-xs);letter-spacing:.03em}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:var(--space-md) var(--space-lg);border:1px solid var(--fog);border-radius:var(--radius-lg);font-size:var(--text-base);background:var(--white);transition:border-color .2s}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{outline:none;border-color:var(--canopy-green)}
.form-group textarea{resize:vertical;min-height:120px}
.form-success{color:#2e7d32;background:#e8f5e9;padding:var(--space-md);border-radius:var(--radius-lg);margin-bottom:var(--space-lg);font-size:var(--text-sm);font-weight:var(--weight-semibold);text-align:center}
.form-error{color:#d32f2f;background:#ffebee;padding:var(--space-md);border-radius:var(--radius-lg);margin-bottom:var(--space-lg);font-size:var(--text-sm);font-weight:var(--weight-semibold);text-align:center}
.contact-info-card{background:var(--jungle-dark);color:var(--white);border-radius:var(--radius-xl);padding:var(--space-2xl);position:sticky;top:100px}
.contact-info-card h3{font-family:var(--font-body);font-size:var(--text-xl);font-weight:var(--weight-bold);margin-bottom:var(--space-xl)}
.contact-detail{margin-bottom:var(--space-lg)}
.contact-detail p{font-size:var(--text-sm);color:var(--white-70);margin-top:var(--space-2xs);line-height:1.6}
.contact-detail a{color:var(--white-70);transition:color .2s}
.contact-detail a:hover{color:var(--electric-lime)}
@media(max-width:768px){.contact-grid{grid-template-columns:1fr}.form-row{grid-template-columns:1fr}.page-hero__meta{flex-direction:column;align-items:flex-start}}
</style>
