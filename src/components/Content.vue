<template>
   <div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="row content">
      <div class="col-md-9 box-1">
        <div class="card-header">
          <h1>Sales OverView..</h1>
          <a href="">Apple admin vs Pixel admin.</a>
        </div>
        <div class="card-body bg-white">
        <LineChart
            :labels="[
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Satuerday'
            ]"
            :values="[50, 100, 150, 200, 250, 300]"
          />
        </div>
      </div>
    
      <div class="col-md-3 box-2">
        <div class="card-header">
          <h1>Our Visitor</h1>
            <a href="">Different Devices used to visit.</a>
        </div>
        <div class="card-body bg-white">
          <DoughnutChart
            :labels="['January', 'February', 'March', 'April', 'May']"
            :values="[80, 70, 40, 20, 50]"
          />
          <div class="card-footer">
            <div class="card-footer">
              <ul class="lists-1">
                <li>Apple</li>
                <li>Samsung</li>
              </ul>
              <ul  class="lists-2">
                <li>GooglePixel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
 
 <script>
  import DoughnutChart from "../components/DoughnutChart.vue";
  import LineChart from "../components/LineChart.vue";
 
  export default {
      components: {
        DoughnutChart,
        LineChart
      
    }
  }
 </script>
 

 <style >
    .lists-1 {
      color: blue;
      display: flex;
      margin-right: 16px;
      justify-content: space-between;
      /* margin-left: 40px; */
    }
    .lists-2 {
      margin-left: 28px;
      color: aqua;
    }
    .card-header {
      background: #ffffff;
    }
    .card-body {
      background: #ffffff;
    }
    .card-footer {
      background: #ffffff;
    }
    .box-2 {
      margin-top: 18px;
    }
    .box-1 {
      padding-top:20px;
    }
    .content{
      padding-top: 15px;
    }
 </style>