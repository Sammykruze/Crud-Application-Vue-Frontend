import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/AddStudent'
import EditStudent from '../components/EditStudent'  
import AllStudents from '../components/AllStudents'  


Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/edit-student', component: EditStudent, name : "edit-student" },
      { path: '/all-students', component: AllStudents },
    ]
})