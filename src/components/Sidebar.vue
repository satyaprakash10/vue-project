<template>
  <div  id="mySidenav" class="sidebar">
    <!-- <div class="formation"> -->
      <router-link to="/">
        <li><a href="# "><i class="fa fa-tachometer" aria-hidden="true"></i> Dashbord</a></li>
      </router-link>

      <router-link to="/profile">
         <li><a href="# " class="active"><i class="fa fa-user" aria-hidden="true"></i> Profile</a></li>
      </router-link>

      <router-link to="/basic">
         <li><a href="# "><i class="fa fa-table" aria-hidden="true"></i>  Basic Table </a></li>
      </router-link>

      <router-link to="/icons">
         <li><a href="# "><i class="fa fa-grav" aria-hidden="true"></i> Icons</a> </li> 
      </router-link>

      <router-link to="/Google">
        <li><a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Google Map</a></li>
      </router-link>

      <router-link to="/blankpage">
        <li><a href="# "><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Blank Page</a></li>
      </router-link>
      
      <router-link to="/error">
        <li><a href="# "><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Error 404</a></li>     
      </router-link>
    <!-- </div> -->
    <button class="btnn btn-warning">Upgrade to Pro</button>
  </div>
</template>

<style>
.sidebar {
  margin: 0;
  width: 200px;
  background-color: #ffffff;
  position: fixed;
  padding-top: 10px;
  height: 100%;
  list-style: none;
  overflow: hidden;
  display: block;
  color:  grey;
  padding: 0px;
  z-index: 1;
  padding-top: 50px;
  text-decoration: none;
  transition: 1.5s;
}

.sidebar li a {
  display: block;
  color:  #b6b3cc;
  padding: 10px 10px 25px 21px;

  text-decoration: none;
}
 
.sidebar li a:hover:not(.active) {
  background-color: #b6b3cc;
  color: white;
}

.icons-bar {
  display: none;
}

.main-content {
  position: absolute;
}

 
.btnn {
    font-size: 15px;
    margin-left: 40px;
    margin-top: 29px;

}
   
@media screen and (max-width: 768px) {
  .sidebar {
    left: -255px;
    display: block;
    z-index: 30;
    padding-top: 64px;

  }
  .icons-bar {
    display: block;
    margin-left: 10px;
    font-size: 30px;
  }
  .sidebar li a {
    display: flex;
    justify-content: center;
    padding:  2px 37px 30px 21px;
  }
  .sidebar-image {
    display:none;
    /* margin-left: 20px; */
  }
  .dropdown {
    display: block;
    margin-left: 160px;
  }
}
  
@media screen and (max-width: 400px) {

}  
@media screen and (max-width:960px)
{
  .main-content {
    display:block;
    padding-left:50px;
    margin-right: 10%;
    padding-top: 5%;
    margin-top: 50px;
}
} 
</style>