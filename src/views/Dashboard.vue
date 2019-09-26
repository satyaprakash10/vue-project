<template>
    <div>
      <div class="card bg-white"> 
        <div class=" bg-white">
          <div>
            <h1>Dashbord<small class="text-muted"> </small></h1>
              <a href=""> Home  >  </a><span class="inner-c"> Dashbord</span>
          </div>
          <button class="btn btn-danger button">Upgrade to pro</button>
        </div>     
       </div>
    </div>
</template>

<script>
// import LineChart from "../components/LineChart";
// export default {
//   components: {
//     LineChart
//   }
// };
</script>

<style>
body {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.box {
  /* margin-top:6%; */
  /* width: 100%; */
  background-color: #ffffff;
}
 
.boxes {
  /* padding-bottom: 20%; */
  /* margin-top: 5%; */
  width: 100%;
  background-color: #ffffff;
  padding-left: 460px;
}
.inner-color {
 padding-right: 20px;
 color: #7184f0;
}
.a {
  color: #4253eb;
  text-decoration: none;
}
.inner-c {
  color: grey;
}
.button {
  float: right;
  margin-top: -64px;
  font-size: 16px;
}
.card-body {
  background: #ffffff;
  width: 100%;
  margin-top: -19px;
}

 
@media screen and (max-width: 768px) {
.button {
  float: left;
  margin-top: 15px; 
  font-size: 16px;
  } 
}  
</style>
