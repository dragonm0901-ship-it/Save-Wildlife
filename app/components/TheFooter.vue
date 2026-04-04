<template>
  <footer class="site-footer section--deep">
    <div class="container">
      <!-- Newsletter Bar -->
      <div class="footer-newsletter">
        <div class="footer-newsletter__text">
          <h3 class="footer-newsletter__title">Stay Connected with the Wild</h3>
          <p class="footer-newsletter__desc">Get the latest updates on events, new arrivals, and conservation efforts delivered to your inbox.</p>
        </div>
        <form class="footer-newsletter__form" @submit.prevent="handleSubscribe">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            class="footer-newsletter__input"
            required
            id="footer-email-input"
          />
          <button type="submit" class="footer-newsletter__btn" id="footer-subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>

      <div class="footer-divider"></div>

      <!-- Main Footer Grid -->
      <div class="footer-grid">
        <!-- About Column -->
        <div class="footer-col footer-col--about">
          <NuxtLink to="/" class="footer-logo">
            <svg class="footer-logo__icon" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/>
              <path d="M20 8c-2 4-6 7-6 12 0 5.5 3 8 6 8s6-2.5 6-8c0-5-4-8-6-12z" fill="currentColor" opacity="0.3"/>
              <path d="M20 12c-1.5 3-4.5 5.5-4.5 9 0 4 2 6 4.5 6s4.5-2 4.5-6c0-3.5-3-6-4.5-9z" fill="currentColor"/>
            </svg>
            <span class="footer-logo__text">SAVE WILDLIFE</span>
          </NuxtLink>
          <p class="footer-about-text">
            Save Wildlife is dedicated to protecting Nepal's unique biodiversity, from the peaks of the Himalayas to the plains of the Terai.
            Our mission is to fund conservation through responsible, premium eco-tourism.
          </p>
          <div class="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X Twitter" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener" aria-label="Pinterest" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.373 23.17c-.1-.937-.187-2.377.039-3.401.205-.926 1.323-5.609 1.323-5.609s-.337-.675-.337-1.674c0-1.567.909-2.738 2.04-2.738.962 0 1.427.722 1.427 1.588 0 .967-.616 2.414-.933 3.755-.265 1.122.563 2.036 1.671 2.036 2.005 0 3.546-2.114 3.546-5.165 0-2.701-1.942-4.589-4.716-4.589-3.212 0-5.096 2.411-5.096 4.903 0 .971.374 2.013.841 2.579a.34.34 0 0 1 .079.324c-.086.357-.277 1.122-.314 1.279-.05.206-.163.25-.376.151-1.401-.652-2.276-2.699-2.276-4.345 0-3.535 2.566-6.782 7.402-6.782 3.885 0 6.906 2.769 6.906 6.468 0 3.861-2.434 6.97-5.814 6.97-1.135 0-2.203-.59-2.568-1.287l-.698 2.662c-.253.973-.935 2.193-1.392 2.938A12 12 0 1 0 12 0z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" class="footer-social__link">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4 class="footer-col__title">Quick Links</h4>
          <nav class="footer-nav">
            <NuxtLink to="/about" class="footer-nav__link">Our Mission</NuxtLink>
            <NuxtLink to="/news" class="footer-nav__link">Latest News</NuxtLink>
            <NuxtLink to="/events" class="footer-nav__link">Expeditions</NuxtLink>
            <NuxtLink to="/donation" class="footer-nav__link">Support Us</NuxtLink>
            <NuxtLink to="/services" class="footer-nav__link">Exploration</NuxtLink>
            <NuxtLink to="/animals-birds" class="footer-nav__link">Himalayan Species</NuxtLink>
          </nav>
        </div>

        <!-- Utility Pages -->
        <div class="footer-col">
          <h4 class="footer-col__title">Resources</h4>
          <nav class="footer-nav">
            <NuxtLink to="/faq" class="footer-nav__link">FAQ</NuxtLink>
            <NuxtLink to="/contact" class="footer-nav__link">Contact</NuxtLink>
            <NuxtLink to="/inquiry" class="footer-nav__link">Inquiry</NuxtLink>
            <NuxtLink to="/tickets" class="footer-nav__link">Access Passes</NuxtLink>
            <NuxtLink to="/privacy-policy" class="footer-nav__link">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms-conditions" class="footer-nav__link">Terms & Conditions</NuxtLink>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="footer-col">
          <h4 class="footer-col__title">Visit Us</h4>
          <div class="footer-contact">
            <div class="footer-contact__item">
              <span class="footer-contact__label">Headquarters</span>
              <p>Durbar Marg, Kathmandu,<br/>Bagmati 44600, Nepal</p>
            </div>
            <div class="footer-contact__item">
              <span class="footer-contact__label">Phone</span>
              <a href="tel:+977014000000">+977 01 400 0000</a>
            </div>
            <div class="footer-contact__item">
              <span class="footer-contact__label">Email</span>
              <a href="mailto:info@savewildlife.org.np">info@savewildlife.org.np</a>
            </div>
            <div class="footer-contact__item">
              <span class="footer-contact__label">Visitor Hours</span>
              <p>Mon - Sun: 7:00 AM - 5:00 PM<br/>(Guided Trekking hours vary)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; {{ currentYear }} Save Wildlife Conservation. All rights reserved.
        </p>
        <div class="footer-bottom__links">
          <NuxtLink to="/privacy-policy">Privacy</NuxtLink>
          <NuxtLink to="/terms-conditions">Terms</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const currentYear = computed(() => new Date().getFullYear())

function handleSubscribe() {
  // TODO: integrate with backend newsletter API
  console.log('Newsletter subscription:', email.value)
  email.value = ''
}
</script>

<style scoped>
.site-footer {
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-2xl);
}

/* ── Newsletter ── */
.footer-newsletter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
  padding-bottom: var(--space-3xl);
}

.footer-newsletter__title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  color: var(--white);
  margin-bottom: var(--space-sm);
}

.footer-newsletter__desc {
  font-size: var(--text-base);
  color: var(--white-50);
  max-width: 440px;
}

.footer-newsletter__form {
  display: flex;
  gap: var(--space-xs);
  max-width: 500px;
}

.footer-newsletter__input {
  flex: 1;
  padding: var(--space-md) var(--space-lg);
  background: var(--white-10);
  border: 1px solid var(--white-20);
  border-radius: var(--radius-pill);
  color: var(--white);
  font-size: var(--text-sm);
  transition: border-color var(--duration-base) ease;
}

.footer-newsletter__input::placeholder {
  color: var(--white-50);
}

.footer-newsletter__input:focus {
  outline: none;
  border-color: var(--electric-lime);
}

.footer-newsletter__btn {
  padding: var(--space-md) var(--space-xl);
  background: var(--electric-lime);
  color: var(--jungle-deep);
  border-radius: var(--radius-pill);
  font-family: var(--font-accent);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.05em;
  transition: all var(--duration-base) ease;
  white-space: nowrap;
}

.footer-newsletter__btn:hover {
  background: var(--white);
}

/* ── Divider ── */
.footer-divider {
  height: 1px;
  background: var(--white-10);
}

/* ── Grid ── */
.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr repeat(3, 1fr);
  gap: var(--space-3xl);
  padding: var(--space-3xl) 0;
}

/* ── Logo & About ── */
.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
  color: var(--white);
}

.footer-logo__icon {
  width: 32px;
  height: 32px;
  color: var(--electric-lime);
}

.footer-logo__text {
  font-family: var(--font-accent);
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
  letter-spacing: 0.15em;
}

.footer-about-text {
  font-size: var(--text-sm);
  color: var(--white-50);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  max-width: 320px;
}

/* ── Social ── */
.footer-social {
  display: flex;
  gap: var(--space-sm);
}

.footer-social__link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-round);
  border: 1px solid var(--white-20);
  color: var(--white-70);
  transition: all var(--duration-base) ease;
}

.footer-social__link:hover {
  border-color: var(--electric-lime);
  color: var(--electric-lime);
  transform: translateY(-2px);
}

.footer-social__link svg {
  width: 18px;
  height: 18px;
}

/* ── Column Titles ── */
.footer-col__title {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-semibold);
  color: var(--white);
  margin-bottom: var(--space-lg);
}

/* ── Nav Links ── */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-nav__link {
  font-size: var(--text-sm);
  color: var(--white-50);
  transition: color var(--duration-fast) ease;
}

.footer-nav__link:hover {
  color: var(--electric-lime);
}

/* ── Contact Info ── */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.footer-contact__label {
  display: block;
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--electric-lime);
  margin-bottom: var(--space-2xs);
}

.footer-contact__item p,
.footer-contact__item a {
  font-size: var(--text-sm);
  color: var(--white-50);
  line-height: 1.6;
  transition: color var(--duration-fast) ease;
}

.footer-contact__item a:hover {
  color: var(--electric-lime);
}

/* ── Bottom ── */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-xl);
}

.footer-copyright {
  font-size: var(--text-xs);
  color: var(--white-50);
}

.footer-bottom__links {
  display: flex;
  gap: var(--space-xl);
}

.footer-bottom__links a {
  font-size: var(--text-xs);
  color: var(--white-50);
  transition: color var(--duration-fast) ease;
}

.footer-bottom__links a:hover {
  color: var(--electric-lime);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
  }
}

@media (max-width: 768px) {
  .footer-newsletter {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
  }
}
</style>
