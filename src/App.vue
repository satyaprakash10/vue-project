<template>
  <div id="app"> 
  <!-- <sidebar/> -->
  <!-- <router-view /> -->
  <!-- <navbar/> -->
    <!-- 
    <navbar></navbar>
    <sidebar></sidebar>
   -->
    <layout></layout> 
    <!-- <router-view /> -->
  </div>  
</template>
<script>
import layout from "./components/Layout";
// import navbar from "./components/Navbar";
// import sidebar from "./components/Sidebar";
export default {
  components:{
    layout,
    // navbar,
    // sidebar
  }
};
</script>

