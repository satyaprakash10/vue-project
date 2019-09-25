<template>
    <div>
         <nav class="navbar navbar-expand-md   bg-primary">
           <i class="fa fa-viacoin logo-style" aria-hidden="true"></i>
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
                <img  class="sidebar-image" :src="images.sample">
             </div>
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
export default {
  components:{

  },
  data()
  {
    return{
      images: {
        sample: 'https://cdn5.vectorstock.com/i/1000x1000/23/49/new-man-avatar-icon-flat-vector-19152349.jpg'
      }
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
  margin-right: 34px;
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
  /* display: flex; */
  justify-content: flex-end;
  width: 30px;
  height: 30px;  
  /* border: 5px   #4337a4; */
  margin-top: 5px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
   .dropdown-toggle {
     display: none;
   }
}

</style>