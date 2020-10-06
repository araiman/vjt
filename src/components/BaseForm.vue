<template>
  <div>
    <div class="tile is-parent">
      <article class="tile is-child notification">
        <p class="title">{{ formTitle }}</p>
        <slot name="main"></slot>
      </article>
    </div>
    <div class="footer-buttons">
      <slot name="footer-buttons"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formTitle'],
  computed: {
    consultationDetail: {
      get() {
        return this.$store.state.consultationDetail;
      }
      ,
      set(value) {
        this.$store.state.consultationDetail = value;
      }
    }
  }
}
</script>

<style scoped>
  .footer-buttons {
    text-align: center;
  }
</style>

