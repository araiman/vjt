<template>
  <div>
    <p>現在、生命保険に加入されていますか？</p>
    <template v-for="item in yesOrNo">
      <input :key="formFor+'-'+item.value" type="radio" :value=item.value v-model=formFor>{{ item.label }}
    </template>
  </div>
</template>

<script>
export default {
  props: ['formFor'],
  data() {
    return {
      yesOrNo: [
        {
          value: true,
          label: 'はい'
        },
        {
          value: false,
          label: 'いいえ'
        }
      ]
    }
  },
  computed: {
    // TODO 入力値のバリデーションを入れたい
    memberOfLifeInsurance: {
      get() {
        return this.$store.state.memberOfLifeInsurance;
      }
      ,
      set(value) {
        this.$store.state.memberOfLifeInsurance = value;
      }
    },
    dangerCondition: {
      get() {
        return this.$store.state.dangerCondition;
      }
      ,
      set(value) {
        this.$store.state.dangerCondition = value;
      }
    },
    surgeryExperience: {
      get() {
        return this.$store.state.surgeryExperience;
      }
      ,
      set(value) {
        this.$store.state.surgeryExperience = value;
      }
    }
  },
  methods: {
    check() {
      console.log(this.$store.getters.gender);
      console.log(this.$store.getters.birthday);
    }
  }
}
</script>

<style scoped>
  .footer-buttons {
    text-align: center;
  }
</style>

