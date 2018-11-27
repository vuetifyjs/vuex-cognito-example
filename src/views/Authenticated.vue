<template>
  <BaseCard>
    <VCardText class="text-xs-center">
      <VImg
        :src="require('@/assets/logo.svg')"
        alt="Vuetify Logo"
        class="mb-3 mx-auto"
        width="80"
      />

      <div class="mb-3">
        You have successfully logged in as:
      </div>

      <div class="headline font-weight-bold mb-5">
        {{ user.username }}
      </div>

      <BaseBtn
        :loading="isLoading"
        @click="submit"
      >
        Logout
      </BaseBtn>
    </VCardText>
  </BaseCard>
</template>

<script>
  // Utilties
  import {
    mapActions,
    mapState
  } from 'vuex'

  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (!vm.$store.getters['cognito/isLoggedIn']) {
          vm.$router.push('/signin')
        }
      })
    },

    data: () => ({
      isLoading: false
    }),

    computed: {
      ...mapState('cognito', ['user'])
    },

    methods: {
      ...mapActions('cognito', ['signOut']),
      submit () {
        this.isLoading = true

        this.signOut().finally(() => {
          this.isLoading = false
        })
      }
    }
  }
</script>
