<template>
  <div class="legal-page">
    <section class="legal-hero section--dark">
      <div class="container">
        <h1 class="legal-title">Terms & Conditions</h1>
        <p class="legal-subtitle">Effective Date: April 1, 2026</p>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container container--sm">
        <div class="legal-content">
          <p>Welcome to Save Wildlife. By using our website and services, you agree to comply with the following Terms & Conditions. Please read them carefully.</p>

          <h2>1. Terms of Use</h2>
          <p>By accessing this website, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the site.</p>

          <h2>2. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and biological data, is the property of Save Wildlife or its licensors and is protected by copyright and intellectual property laws.</p>

          <h2>3. Donations and Payments</h2>
          <p>All donations made through our website are non-refundable unless required by law. Please ensure you have the authority to make any financial transactions through our platform.</p>

          <h2>4. Links to Other Websites</h2>
          <p>Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.</p>

          <h2>5. Limitation of Liability</h2>
          <p>Save Wildlife will not be liable for any damages arising out of your use of our website or inability to use the site, including but not limited to direct, indirect, or consequential damages.</p>

          <h2>6. Governing Law</h2>
          <p>These Terms & Conditions are governed by the laws of Nepal. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the courts of Nepal.</p>

          <h2>7. Contact Information</h2>
          <p>If you have any questions or concerns regarding these Terms & Conditions, please contact us at info@savewildlife.org.np.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Terms & Conditions' })
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
</style>
