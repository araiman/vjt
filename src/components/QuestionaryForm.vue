<template>
  <base-form form-title="以下にお答えください">
    <template v-slot:main>
      <p>-ご相談内容-</p>
      <p>現在、生命保険に加入されていますか？</p>
      <template v-for="item in yesOrNo">
        <input :key="'memberOfLifeInsurance-'+item.value" type="radio" name="memberOfLifeInsurance" :value=item.value v-model="memberOfLifeInsurance">{{ item.label }}
      </template>
      {{ memberOfLifeInsurance }}
<!--      <template v-if=memberOfLifeInsurance>-->
        <hr>
        <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
        <template v-for="item in yesOrNo">
          <input :key="'dangerCondition-'+item.value" type="radio" name="dangerCondition" :value=item.value v-model="dangerCondition">{{ item.label }}
        </template>
      {{ dangerCondition }}
<!--      </template>-->
<!--      <template v-if="dangerCondition">-->
        <hr>
        <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
        <template v-for="item in yesOrNo">
          <input :key="'surgeryExperience-'+item.value" type="radio" name="surgeryExperience" :value=item.value v-model="surgeryExperience">{{ item.label }}
        </template>
<!--      </template>-->
    </template>
    <template v-slot:footer-buttons>
      <router-link tag="button" class="button is-primary" :to="{ name: 'basicInfoForm' }">前へ戻る</router-link>
      <router-link tag="button" class="button is-primary" :to="{ name: 'consultationDetailForm' }">次へ進む</router-link>
    </template>
  </base-form>
</template>

<script>
// import SingleSelectionButton from "@/components/SingleSelectionButton";
import BaseForm from "@/components/BaseForm";

export default {
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
        // this.$store.commit('updateMemberOfLifeInsurance', {memberOfLifeInsurance: value});
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
  components: {
    BaseForm
  }
}
</script>