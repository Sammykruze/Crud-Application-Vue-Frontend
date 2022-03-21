<template>
    <div>
          <div class="card border-danger m-2">
            <div class="card-header"> Student Details</div>
            <div class="class-body">
               
            <div class="display-4">Add Student Details</div> 
            <form class="form-group" @submit.prevent="addStudent()"> <br>
            <input class="form-control" type="text" placeholder="first name" v-model="firstName"> <br>
            <input class="form-control" type="text" placeholder="last name" v-model="lastName">  <br>
            <input class="form-control" type="number" placeholder="matric number" v-model.number="matricNumber"> <br>
            <input class="form-control" type="text" placeholder="department" v-model="department"> <br>
             <input class="form-control" type="text" placeholder="faculty" v-model="faculty"> <br>

      <button type="submit" class="btn btn-danger"> add student </button>
       
       </form>
        </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            firstName: "",
            lastName: "",
            matricNumber: 0,
            department: "",
            faculty: "",
        }
    },

methods: {
    addStudent(){

        
        axios.post('http://localhost:8084/add-student-info', {
            firstName : this.firstName,
            lastName : this.lastName,
            matricNumber: this.matricNumber,
            department: this.department,
            faculty: this.faculty,
        }).then((res) =>{
            console.log(res);

        })
    }
}
}
</script>