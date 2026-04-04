import { computed } from 'vue'

export function useAuth() {
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const loading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  // initialize is no longer needed as useSupabaseUser handles it,
  // but we keep the function for compatibility with existing calls.
  async function initialize() {
    // No-op, handled by Nuxt module
  }

  async function signUp(email, password, metadata = {}) {
    loading.value = true
    error.value = null
    try {
      const { data, error: authError } = await client.auth.signUp({
        email,
        password,
        options: { data: metadata },
      })
      if (authError) throw authError
      return { data }
    } catch (err) {
      error.value = err.message
      return { error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function signIn(email, password) {
    loading.value = true
    error.value = null
    try {
      const { data, error: authError } = await client.auth.signInWithPassword({
        email,
        password,
      })
      if (authError) throw authError
      return { data }
    } catch (err) {
      error.value = err.message
      return { error: err.message }
    } finally {
      loading.value = false
    }
  }

  async function signInWithProvider(provider) {
    try {
      const { data, error: authError } = await client.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (authError) throw authError
      return { data }
    } catch (err) {
      error.value = err.message
      return { error: err.message }
    }
  }

  async function signOut() {
    loading.value = true
    try {
      await client.auth.signOut()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  async function resetPassword(email) {
    try {
      const { error: authError } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset`,
      })
      if (authError) throw authError
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { error: err.message }
    }
  }

  return {
    user: computed(() => user.value),
    loading,
    error,
    isAuthenticated,
    initialize,
    signUp,
    signIn,
    signInWithProvider,
    signOut,
    resetPassword,
    getClient: () => client,
  }
}

