  
<template>
<div>
  <!-- <div class="container"> -->
    <div class="card-header">
      <h1>Icons</h1>
    </div>
    <div class="card-body">
       <ul class="iconz-style">
         <li><i class="fa fa-desktop  icon ic "></i></li>
         <li><i class="fa fa-tachometer  icon ic "></i></li>
         <li><i class="fa fa-area-chart  icon ic "></i></li>
         <li><i class="fa fa-google  icon ic "></i></li>
         <li><i class="fa fa-pencil-square-o  icon ic "></i></li>
         <li><i class="fa fa-tasks  icon ic "></i></li>
       </ul>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style>
 .h1 {
   /* margin-top: 20px; */
   margin-left: 50px;
 }
 .iconz-style {
   font-size: 60px;
   display: flex;
   color: rgb(99, 99, 168);
   justify-content: space-between;
   list-style: none;
 }
 @media screen and (max-width: 768px) {
   .iconz-style {
      flex-direction: column;
   }
 }
</style>
