import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        gender: null,
        birthYear: null,
        birthMonth: null,
        birthDay: null,
        memberOfLifeInsurance: null,
        dangerCondition: null,
        surgeryExperience: null,
        consultationDetail: null
    },
    getters: {
        birthday: state => {
            return state.birthYear + '年' + state.birthMonth + '月' + state.birthDay + '日';
        },
        isSetMemberOfLifeInsurance: state => {
            return state.memberOfLifeInsurance != null;
        },
        isSetDangerCondition: state => {
            return state.dangerCondition != null;
        }
    }
})
