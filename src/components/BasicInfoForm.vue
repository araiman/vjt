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
        <option v-for="n in 120" :key="n" :value="n+1900">
          {{ year(n) }}
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
    year(index) {
      const year = 1900 + index;

      if (1900 <= year && year < 1912) return `${year}年(明治${year - 1867})`
      if (1912 <= year && year < 1926) return `${year}年(大正${year - 1911})`
      if (1926 <= year && year < 1989) return `${year}年(昭和${year - 1925})`
      if (1989 <= year && year < 2018) return `${year}年(平成${year - 1988})`

      return `${year}年(令和${year - 2018})`
    }
  },
  components: {
    BaseForm
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.gender == null) {
      alert('性別にチェックを入れてください。');
      next(false);
      return;
    }

    if (this.$store.state.birthYear == null || this.$store.state.birthMonth == null || this.$store.state.birthDay == null) {
      alert('生年月日にチェックを入れてください。');
      next(false);
      return;
    }

    next();
  }
}
</script>