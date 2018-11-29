<template>
  <section id="home">
    <BaseCard>
      <VCardText class="pa-5">
        <VImg
          :src="require('@/assets/logo.svg')"
          class="mb-3 mx-auto"
          width="80"
        />
        <VWindow
          v-model="model"
          lazy
        >
          <VWindowItem>
            <Email @next="model++" />
          </VWindowItem>

          <VWindowItem>
            <Password @prev="model--" />
          </VWindowItem>
        </VWindow>
      </VCardText>
    </BaseCard>
  </section>
</template>

<script>
  export default {
    components: {
      Email: () => import('@/components/Email'),
      Password: () => import('@/components/Password')
    },

    data: () => ({
      model: 0
    })
  }
</script>
