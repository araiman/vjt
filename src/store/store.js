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
    }
})
