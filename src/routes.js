import BasicInfoForm from './components/BasicInfoForm'
import QuestionaryForm from "./components/QuestionaryForm";
import ConsulationDetailForm from "./components/ConsultationDetailForm";
import ResultView from "./components/ResultView";

export const routes = [
    {path: '', component: BasicInfoForm, name: 'basicInfoForm'},
    {path: '/questionary-form', component: QuestionaryForm, name: 'questionaryForm'},
    {path: '/consultation-detail-form', component: ConsulationDetailForm, name: 'consultationDetailForm'},
    {path: '/result-view', component: ResultView, name: 'resultView'},
]