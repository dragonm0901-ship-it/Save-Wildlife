<template>
  <div class="auth-page">
    <section class="section section--bone auth-section">
      <div class="container container--sm">
        <div class="auth-card">
          <div class="auth-header">
            <h1 class="auth-title">Welcome Back</h1>
            <p class="auth-subtitle">Sign in to manage your bookings and sanctuary experiences.</p>
          </div>
          
          <form @submit.prevent="handleLogin" class="auth-form">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                id="email" 
                v-model="email" 
                type="email" 
                required 
                placeholder="nature@savewildlife.org.np"
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <input 
                id="password" 
                v-model="password" 
                type="password" 
                required 
                placeholder="••••••••"
                class="form-input"
              />
            </div>

            <p v-if="errorMsg" class="auth-error">{{ errorMsg }}</p>

            <UiWildButton 
              type="submit" 
              variant="primary" 
              :arrow="true" 
              style="width: 100%; justify-content: center;"
              :disabled="loading"
            >
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </UiWildButton>
          </form>

          <div class="auth-footer">
            <p>Don't have an account? <NuxtLink to="/auth/signup">Join the Mission</NuxtLink></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

async function handleLogin() {
  try {
    loading.value = true
    errorMsg.value = ''
    
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error
    
    router.push('/')
  } catch (err) {
    errorMsg.value = err.message
  } finally {
    loading.value = false
  }
}

useHead({ title: 'Login' })
</script>

<style scoped>
.auth-page { min-height: 80vh; display: flex; align-items: center; justify-content: center; }
.auth-section { width: 100%; padding: var(--space-3xl) 0; }
.auth-card { background: var(--white); padding: var(--space-3xl); border-radius: var(--radius-2xl); border: 1px solid var(--fog); box-shadow: var(--shadow-xl); }
.auth-header { text-align: center; margin-bottom: var(--space-2xl); }
.auth-title { font-family: var(--font-display); font-size: var(--text-3xl); color: var(--charcoal); margin-bottom: var(--space-sm); }
.auth-subtitle { color: var(--charcoal-60); font-size: var(--text-md); }
.auth-form { display: flex; flex-direction: column; gap: var(--space-xl); }
.form-group { display: flex; flex-direction: column; gap: var(--space-xs); }
.form-group label { font-family: var(--font-accent); font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; color: var(--charcoal-80); }
.form-input { padding: var(--space-md); border-radius: var(--radius-lg); border: 1px solid var(--fog); background: var(--ivory); font-family: var(--font-body); font-size: var(--text-md); transition: all 0.2s ease; }
.form-input:focus { outline: none; border-color: var(--canopy-green); box-shadow: 0 0 0 4px var(--canopy-green-10); }
.auth-error { color: #d64545; font-size: var(--text-sm); text-align: center; margin-bottom: var(--space-md); }
.auth-footer { text-align: center; margin-top: var(--space-2xl); padding-top: var(--space-xl); border-top: 1px solid var(--fog); font-size: var(--text-sm); color: var(--charcoal-60); }
.auth-footer a { color: var(--canopy-green); font-weight: var(--weight-bold); }
</style>
