<template>
    <div>
        <div class="container-md">
        <router-link to="/">Add Student</router-link>
        <table class="table table-primary table-hover">
            <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Matric Number</th>
            <th scope="col">Department</th>
            <th scope="col">Faculty</th>
            <th scope="col">Action</th>
        </tr>

    </thead> 

    <tbody>
        <tr v-for="student,index in getAllStudents" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ student.firstName }}</td>
            <td>{{student.lastName}}</td>
            <td>{{student.matricNumber}}</td>
            <td>{{student.department}}</td>
            <td>{{student.faculty}}</td>
            <td> <button @click="Delete(student.id)" class="btn btn-danger">Delete</button> 
            <button @click="Edit(student)" class="btn btn-primary">Edit</button></td>
        </tr>
        </tbody>
        </table>
             <!-- <a href="AddStudent.vue" class="btn btn-light" >Add Student</a> -->
         
        </div>  
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            getAllStudents: []
        }
        
},

methods:{
    Delete(student_id){
        axios.delete('http://localhost:8084/delete-student/'+student_id).then(() =>{
                this.getAllStudents = this.getAllStudents.filter( items => items.id != student_id);
            });
    },

    Edit(student){
        this.$router.push(
            {
                name : 'edit-student',
                params: {  student  }
            });

    },
},

created(){
    axios.get('http://localhost:8084/get-all-students').then((resData) =>{
              this.getAllStudents = resData.data;
        });
        
}
}
</script>