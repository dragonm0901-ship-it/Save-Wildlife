<template>
  <div class="legal-page">
    <section class="legal-hero section--dark">
      <div class="container">
        <h1 class="legal-title">Privacy Policy</h1>
        <p class="legal-subtitle">Effective Date: April 1, 2026</p>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container container--sm">
        <div class="legal-content">
          <p>At Save Wildlife, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

          <h2>1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and payment details when you browse our site, subscribe to our newsletter, make a donation, or book an expedition.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your donations and bookings.</li>
            <li>Send you updates about our conservation efforts and news.</li>
            <li>Improve our website and user experience.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive information (such as credit card data) is encrypted and transmitted via secure methods.</p>

          <h2>4. Third-Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties, except for trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.</p>

          <h2>5. Cookies</h2>
          <p>Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect some functionality of the site.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@savewildlife.org.np.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Privacy Policy' })
</script>

<style scoped>
.legal-hero {
  padding: var(--space-4xl) 0 var(--space-3xl);
  text-align: center;
}

.legal-title {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  color: var(--white);
  margin-bottom: var(--space-sm);
}

.legal-subtitle {
  font-size: var(--text-base);
  color: var(--white-50);
}

.legal-content {
  color: var(--charcoal);
  line-height: 1.8;
}

.legal-content h2 {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: var(--weight-bold);
  margin: var(--space-xl) 0 var(--space-sm);
}

.legal-content p {
  margin-bottom: var(--space-md);
}

.legal-content ul {
  margin-bottom: var(--space-md);
  padding-left: var(--space-lg);
}

.legal-content li {
  margin-bottom: var(--space-xs);
  list-style-type: disc;
}
</style>
