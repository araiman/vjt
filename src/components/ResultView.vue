<template>
  <base-form form-title="以下の内容をご確認ください">
    <template v-slot:main>
      <p class="subtitle">-性別-</p>
      <p>{{ gender }}</p>
      <p class="subtitle">-生年月日-</p>
      <p>{{ birthday }}</p>
      <p class="subtitle">-現在、生命保険に加入されていますか？-</p>
      <p>{{ memberOfLifeInsurance }}</p>
      <p class="subtitle">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
      <p>{{ surgeryExperience }}</p>
      <p class="subtitle">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
      <p>{{ dangerCondition }}</p>
      <p class="subtitle">-ご相談内容-</p>
      <p>{{ consultationDetail }}</p>
    </template>
    <template v-slot:footer-buttons>
      <router-link tag="button" class="button is-primary" :to="{ name: 'consultationDetailForm' }">前へ戻る</router-link>
      <router-link tag="button" class="button is-primary" :to="{}">送信</router-link>
    </template>
  </base-form>
</template>

<script>
import BaseForm from '@/components/BaseForm';

export default {
  data() {
    return {
      consultationDetail: this.$store.state.consultationDetail
    }
  },
  computed: {
    gender: function () {
      return this.$store.state.gender === 'male' ? '男性' : '女性'
    },
    birthday: function () {
      return `${this.$store.state.birthYear}年${this.$store.state.birthMonth}月${this.$store.state.birthDay}日`
    },
    memberOfLifeInsurance: function () {
      return this.$store.state.memberOfLifeInsurance ? 'はい' : 'いいえ';
    },
    surgeryExperience: function () {
      return this.$store.state.surgeryExperience ? 'はい' : 'いいえ';
    },
    dangerCondition: function () {
      return this.$store.state.dangerCondition ? 'はい' : 'いいえ';
    },
  },
  components: {
    BaseForm
  }
}
</script>