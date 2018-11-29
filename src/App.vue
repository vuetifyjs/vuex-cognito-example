<template>
  <VApp v-show="isReady">
    <VContent>
      <VContainer fill-height>
        <VLayout
          :style="styles"
          align-content-center
          mx-auto
          wrap
        >
          <VFlex xs12>
            <VFadeTransition hide-on-leave>
              <RouterView />
            </VFadeTransition>
          </VFlex>

          <Footer />
        </VLayout>
      </VContainer>
    </VContent>

    <Snackbar />
  </VApp>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapState
  } from 'vuex'

  export default {
    name: 'App',

    components: {
      Footer: () => import('@/components/Footer'),
      Snackbar: () => import('@/components/Snackbar')
    },

    computed: {
      ...mapGetters('cognito', ['isLoggedIn']),
      ...mapState(['isReady']),
      maxWidth () {
        switch (this.$route.path) {
          case '/auth/signin': return '500'
          default: return '900'
        }
      },
      styles () {
        return {
          maxWidth: `${this.maxWidth}px`
        }
      }
    },

    watch: {
      isReady (val) {
        if (val && this.isLoggedIn) this.$router.push('/authenticated')
      }
    }
  }
</script>
