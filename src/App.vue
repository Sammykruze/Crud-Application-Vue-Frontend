<template>
  <div id="app">
    <!-- <AddStudent/>
    <GetAllStudents/>
    <EditStudent/> --->

    <router-view></router-view>
    
  </div>
</template>

<script>
// import AddStudent from './components/AddStudent.vue'
// import GetAllStudents from './components/GetAllStudents.vue'
// import EditStudent from './components/EditStudent.vue'


export default {
  name: 'App',
      components: {
          // AddStudent,
          // GetAllStudents,
          // EditStudent,
         
     }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
