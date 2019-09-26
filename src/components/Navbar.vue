<template>
    <div>
         <nav class="navbar navbar-expand-md   bg-primary">
           <i class="fa fa-viacoin logo-style-1" aria-hidden="true"></i>
            <a href="#" class=" logo-style">MATERIALPRO.</a>
            <div class="collapse-menu">
              <div class="collapse-menu-icon-container">
                <a href="javascript:void(0)"  @click="myFunction()"><i class="fa fa-bars icons-bar" aria-hidden="true"></i></a>
              </div>
            </div>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div class="input-group-append ">
                  <button type="button" class="btn btn-style"><i class="fa fa-search "></i></button>
              </div>   
                <!-- <div class="s ample_image">
                  <img :src="image" hight="50px" width="30px" class="sample"/>
                </div> -->
             </div>
             <img :src="image" class="sidebar-image"/>
            <div class="  dropdown">
              <a href="#" class="  dropdown-toggle" data-toggle="dropdown">Messages</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Inbox</a>
                <a href="#" class="dropdown-item">Sent</a>
                <a href="#" class="dropdown-item">Drafts</a>
              </div>
          </div>
      </nav>
    </div>
</template>

<script>
import image from "../assets/sample.jpg"

export default {
  components:{

  },
  data()
  {
    return{
      // images: {
      //   sample: 'assets/sample.jpg'
      // }
      image: image
    }
  },
  methods:
  {
    myFunction() {
      let showhide = document.getElementById('mySidenav');
      
      if(showhide.style.left === "-250px"){
          showhide.style.left = "0px";
      } else {
          showhide.style.left = "-250px";
      }
      }
}
}
 
</script>

<style >
body {
  margin: 0;
  font-family: "Lato", sans-serif;
  background: #efefef;
}
.icons-bar {
  font-size: 40px;
  /* margin-right: 34px; */
  color: white;
}
.navbar { 
  position: fixed;
  z-index: 100;
  width: 100%;
}

.logo-style {
  font-size: 25px;
  color: white;
  text-decoration: none;
  margin-left: 10px;
}

.logo-style-1 {
  font-size: 25px;
}

.btn-style {
  color: white;
  /* margin-top: 55px; */
  font-size: 20px;
  margin-right: 5px;
}

.dropdown-toggle {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
 
.sidebar-image{ 
  border-radius:50%;
  width: 30px;
  height: 30px;  
  margin-top: 5px;
  overflow: hidden;
  margin-left: auto;
  margin-right: 10px;
  margin-top: -1px;
}

@media screen and (max-width: 768px) {
   .dropdown-toggle {
     display: none;
   }
  .logo-style {
    /* padding-right: 143px; */
  }
  .sidebar-image {
    /* display: block;
    margin-top: -10px;
    margin-left: auto; */
  }
}

</style>