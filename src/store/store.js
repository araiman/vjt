import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        basicInfo: {
            gender: null,
            birthYear: null,
            birthMonth: null,
            birthDay: null,
            memberOfLifeInsurance: null,
            dangerCondition: null,
            surgeryExperience: null,
            consultationDetail: null
        }
    },
    // TODO gettersの用途を理解し、正しく使えるようにする
    getters: {
        birthday: state => {
            return state.birthYear + '年' + state.birthMonth + '月' + state.birthDay + '日';
        },
        memberOfLifeInsurance: state => {
            return state.memberOfLifeInsurance;
        }
    },
    mutations: {
        updateMemberOfLifeInsurance(state, flag) {
            console.log(flag);
            return this.state.memberOfLifeInsurance = flag;
        }
    },
    actions: {
        updateMemberOfLifeInsurance({ commit }, payload) {
            commit('updateMemberOfLifeInsurance', payload.memberOfLifeInsurance);
        }
    }
})
