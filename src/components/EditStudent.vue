<template>
    <div>
        <div class="container-md">
          <div class="card border-danger m-2">
            <div class="card-header"> Student Details</div>
            <div class="class-body">
               
            <div class="display-5">Edit Student Details - {{student.firstName}}</div> 
            <form class="form-group" @submit.prevent="updateStudent()"> <br>
            <input class="form-control" type="text" placeholder="first name" v-model="student.firstName"> <br>
            <input class="form-control" type="text" placeholder="last name" v-model="student.lastName">  <br>
            <input class="form-control" type="number" placeholder="matric number" v-model.number="student.matricNumber"> <br>
            <input class="form-control" type="text" placeholder="department" v-model="student.department"> <br>
             <input class="form-control" type="text" placeholder="faculty" v-model="student.faculty"> <br>

      <button type="submit" class="btn btn-danger"> Edit student </button>
       
       </form>
      
        </div>
        </div>
       
         <router-link to="/all-students">
         <button type="submit" class="btn btn-danger decoration-none">
         Show All Student </button> </router-link>
         
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props : ['student_detail'],
    data(){
        return{
          student : {}
        }
    },

methods: {
      updateStudent(){
  
        axios.put('http://localhost:8084/update-student', {
            id: this.student.id,
            firstName : this.student.firstName,
            lastName : this.student.lastName,
            matricNumber: this.student.matricNumber,
            department: this.student.department,
            faculty: this.student.faculty,
        }).then((res) =>{
            console.log(res);

        })
    }
},
created(){
    this.student =  this.$route.params.student;
}
}
</script>