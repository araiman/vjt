<template>
  <base-form form-title="お客様の情報を入力してください">
    <template v-slot:main>
      <p>-性別-</p>
      <template v-for="item in genders">
        <input :key="item.value" type="radio" name="gender" :value=item.value v-model="gender">{{ item.label }}
      </template>
      <hr>
      <p>-生年月日-</p>
      <select v-model="birthYear">
        <option v-for="n in 120" :key="n">
          {{ n + 1900 }}
        </option>
      </select>年
      <select v-model="birthMonth">
        <option v-for="n in 12" :key="n">
          {{ n }}
        </option>
      </select>月
      <select v-model="birthDay">
        <option v-for="n in 31" :key="n">
          {{ n }}
        </option>
      </select>日
    </template>
    <template v-slot:footer-buttons>
      <router-link tag="button" class="button is-primary" :to="{ name: 'questionaryForm' }">次へ進む</router-link>
    </template>
  </base-form>
</template>

<script>
import BaseForm from "@/components/BaseForm";

export default {
  data() {
    return {
      genders: [
        {
          value: 'male',
          label: '男性'
        },
        {
          value: 'female',
          label: '女性'
        }
      ]
    }
  },
  computed: {
    //     // TODO 入力値のバリデーションを入れたい
    gender: {
      get() {
        return this.$store.state.gender;
      }
      ,
      set(value) {
        this.$store.state.gender = value;
      }
    },
    birthYear: {
      get() {
        return this.$store.state.birthYear;
      },
      set(value) {
        this.$store.state.birthYear = value;
      }
    },
    birthMonth: {
      get() {
        return this.$store.state.birthMonth;
      },
      set(value) {
        this.$store.state.birthMonth = value;
      }
    },
    birthDay: {
      get() {
        return this.$store.state.birthDay;
      },
      set(value) {
        this.$store.state.birthDay = value;
      }
    }
  },
  methods: {
    check() {
      console.log(this.$store.getters.gender);
      console.log(this.$store.getters.birthday);
    }
  },
  components: {
    BaseForm
  }
}
</script>