<template>
  <base-form form-title="ご相談内容をご記入ください">
    <template v-slot:main>
      <p>-ご相談内容-</p>
      <textarea v-model="consultationDetail"></textarea>
    </template>
    <template v-slot:footer-buttons>
      <router-link tag="button" class="button is-primary" :to="{ name: 'questionaryForm' }">前へ戻る</router-link>
      <router-link tag="button" class="button is-primary" :to="{ name: '' }">次へ進む</router-link>
    </template>
  </base-form>
</template>

<script>
import BaseForm from "@/components/BaseForm";

export default {
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
  },
  components: {
    BaseForm
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.consultationDetail == null || this.$store.state.consultationDetail.length == 0) {
      alert('相談事項を入力してください。');
      next(false);
      return;
    }

    next();
  }
}
</script>
