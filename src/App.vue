<template>
  <VApp>
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
  export default {
    name: 'App',

    components: {
      Footer: () => import('@/components/Footer'),
      Snackbar: () => import('@/components/Snackbar')
    },

    computed: {
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
    }
  }
</script>
