<template>
  <base-form form-title="ご相談内容をご記入ください">
    <template v-slot:main>
      <p>-ご相談内容-</p>
      <!--    TODO 改行を受け付けられるようにしたい    -->
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
    //     // TODO 入力値のバリデーションを入れたい
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
  }
}
</script>
